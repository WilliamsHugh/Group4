'use client';

import NoteItem from './NoteItem';
import styles from './NoteList.module.css';

export default function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🗒️</div>
        <p className={styles.emptyTitle}>Chưa có ghi chú nào</p>
        <p className={styles.emptySubtitle}>Hãy thêm ghi chú đầu tiên của bạn!</p>
      </div>
    );
  }

  return (
    <div className={styles.listSection}>
      <h2 className={styles.sectionTitle}>
        📋 Danh sách ghi chú
        <span className={styles.totalCount}>{notes.length} mục</span>
      </h2>
      <div className={styles.list}>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
