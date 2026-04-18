'use client';

import { useState } from 'react';
import styles from './NoteInput.module.css';

export default function NoteInput({ onAddNote }) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleAdd = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onAddNote(trimmed);
    setValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className={styles.inputSection}>
      <h2 className={styles.sectionTitle}>✏️ Thêm ghi chú mới</h2>
      <div className={`${styles.inputWrapper} ${isFocused ? styles.focused : ''}`}>
        <textarea
          id="note-input"
          className={styles.textarea}
          placeholder="Nhập nội dung ghi chú... (Enter để thêm)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={3}
        />
        <div className={styles.inputFooter}>
          <span className={styles.hint}>💡 Nhấn Enter hoặc nút Thêm để lưu ghi chú</span>
          <button
            id="add-note-btn"
            className={styles.addButton}
            onClick={handleAdd}
            disabled={!value.trim()}
          >
            <span className={styles.btnIcon}>+</span>
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
}
