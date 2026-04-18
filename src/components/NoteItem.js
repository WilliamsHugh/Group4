'use client';

import { useState } from 'react';
import styles from './NoteItem.module.css';

export default function NoteItem({ note, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    if (!showConfirm) {
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 3000);
      return;
    }
    setIsDeleting(true);
    setTimeout(() => onDelete(note.id), 300);
  };

  return (
    <div className={`${styles.noteItem} ${isDeleting ? styles.deleting : ''}`}>
      <div className={styles.noteContent}>
        <p className={styles.noteText}>{note.text}</p>
        <span className={styles.noteDate}>{note.date}</span>
      </div>
      <div className={styles.noteActions}>
        {showConfirm ? (
          <div className={styles.confirmGroup}>
            <span className={styles.confirmText}>Xóa?</span>
            <button
              className={`${styles.actionBtn} ${styles.confirmYes}`}
              onClick={handleDelete}
              title="Xác nhận xóa"
            >
              ✓
            </button>
            <button
              className={`${styles.actionBtn} ${styles.confirmNo}`}
              onClick={() => setShowConfirm(false)}
              title="Hủy"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            className={`${styles.deleteBtn}`}
            onClick={handleDelete}
            title="Xóa ghi chú"
            id={`delete-note-${note.id}`}
          >
            🗑️ Xóa
          </button>
        )}
      </div>
    </div>
  );
}
