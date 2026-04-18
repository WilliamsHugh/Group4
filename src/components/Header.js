'use client';

import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

export default function Header({ noteCount }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <span className={styles.logo}>📝</span>
          <div>
            <h1 className={styles.title}>Ghi Chú Của Tôi</h1>
            <p className={styles.subtitle}>Ứng dụng quản lý ghi chú cá nhân</p>
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.countBadge}>
            <span className={styles.countNumber}>{noteCount}</span>
            <span className={styles.countLabel}>ghi chú</span>
          </div>

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            title={theme === 'light' ? 'Chuyển sang Dark Mode' : 'Chuyển sang Light Mode'}
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            <span className={styles.themeIcon}>
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
            <span className={styles.themeText}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
