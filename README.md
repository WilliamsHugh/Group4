# 📝 Ứng dụng Ghi Chú Cá Nhân (Note App)

Đây là một ứng dụng quản lý ghi chú cá nhân đơn giản được xây dựng bằng **Next.js**, tập trung vào việc thực hành các kiến thức cơ bản về Hooks, Props, Context API và LocalStorage trong môi trường App Router.

---

## 👤 Thông tin sinh viên
- **Họ và tên:** Trần Trường Thuận
- **Mã số sinh viên (MSSV):** N23DCCN060
- **Học phần:** Thực hành Lập trình Web

---

## ✨ Tính năng chính
Ứng dụng hoàn thành đầy đủ các yêu cầu của bài tập thực hành:
- **Quản lý ghi chú:** Thêm ghi chú mới và xóa các ghi chú hiện có (`useState`).
- **Thống kê:** Đếm và hiển thị tổng số lượng ghi chú ngay trên Header (`props`).
- **Chế độ giao diện:** Hỗ trợ chuyển đổi linh hoạt giữa Dark Mode và Light Mode (`ThemeContext.js` với `Context API`).
- **Lưu trữ dữ liệu:** Tự động lưu và khôi phục dữ liệu ghi chú khi tải lại trang (`useEffect` + `localStorage`).

---

## 🛠 Công nghệ sử dụng
- **Framework:** Next.js (App Router)
- **Styling:** CSS Modules (`.module.css` cho từng component) và Global CSS.
- **Quản lý trạng thái:** React Hooks (`useState`, `useEffect`, `useContext`)
- **Lưu trữ:** Web Storage API (LocalStorage)

---

## 📁 Cấu trúc thư mục chính (src/)
- `app/`: Chứa file `page.js` (trang chủ) và `layout.js` (layout tổng).
- `components/`: Chứa các thành phần UI độc lập:
  - `Header.js`: Thanh điều hướng, chứa bộ đếm ghi chú và nút chuyển đổi theme.
  - `NoteInput.js`: Ô nhập liệu và nút thêm ghi chú.
  - `NoteList.js` & `NoteItem.js`: Danh sách và từng phần tử ghi chú hiển thị.
- `context/`: 
  - `ThemeContext.js`: Cung cấp state về giao diện (Sáng/Tối) cho toàn bộ ứng dụng.

---

## 🚀 Hướng dẫn cài đặt và chạy ứng dụng

1. **Clone project:**
   ```bash
   git clone <link-repo-cua-ban>
   cd <ten-thu-muc-project>
