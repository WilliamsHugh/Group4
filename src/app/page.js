'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import NoteInput from '../components/NoteInput';
import NoteList from '../components/NoteList';
import styles from './page.module.css';

// ─── Dữ liệu mẫu ban đầu ───────────────────────────────────────────────────
const INITIAL_NOTES = [
  {
    id: '1',
    text: '📚 Học useState để quản lý state trong component',
    date: '17/04/2026, 20:00',
  },
  {
    id: '2',
    text: '⚡️ Tìm hiểu useEffect xử lý side effects',
    date: '17/04/2026, 20:05',
  },
  {
    id: '3',
    text: '🔗 Thực hành Context API chia sẻ dữ liệu',
    date: '17/04/2026, 20:10',
  },
  {
    id: '4',
    text: '🌙 Thêm chức năng Dark / Light mode',
    date: '17/04/2026, 20:15',
  },
  {
    id: '5',
    text: '💾 Lưu dữ liệu vào localStorage bằng useEffect',
    date: '17/04/2026, 20:20',
  },
];

// ─── Hàm định dạng ngày giờ theo tiếng Việt ───────────────────────────────
function formatDate(date) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  const hh = date.getHours().toString().padStart(2, '0');
  const mm = date.getMinutes().toString().padStart(2, '0');
  return `${d}/${m}/${y}, ${hh}:${mm}`;
}

export default function HomePage() {
  // ── useState: quản lý danh sách ghi chú ──────────────────────────────────
  const [notes, setNotes] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // ── useEffect: khôi phục ghi chú từ localStorage (chạy 1 lần khi mount) ──
  useEffect(() => {
    try {
      const saved = localStorage.getItem('notes-data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setNotes(parsed);
        } else {
          setNotes(INITIAL_NOTES);
        }
      } else {
        setNotes(INITIAL_NOTES);
      }
    } catch {
      setNotes(INITIAL_NOTES);
    }
    setIsHydrated(true);
  }, []);

  // ── useEffect: lưu ghi chú vào localStorage mỗi khi danh sách thay đổi ──
  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes, isHydrated]);

  // ── Thêm ghi chú mới ──────────────────────────────────────────────────────
  const handleAddNote = (text) => {
    const newNote = {
      id: Date.now().toString(),
      text,
      date: formatDate(new Date()),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  // ── Xóa ghi chú ────────────────────────────────────────────────────────────
  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  if (!isHydrated) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Đang tải ghi chú...</p>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      {/* Header nhận noteCount qua props */}
      <Header noteCount={notes.length} />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Phần nhập ghi chú mới */}
          <NoteInput onAddNote={handleAddNote} />

          {/* Danh sách ghi chú */}
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Được xây dựng với{' '}
          <span className={styles.heart}>❤️</span> bằng{' '}
          <strong>Next.js</strong> · useState · useEffect · Context API · localStorage
        </p>
      </footer>
    </div>
  );
}
