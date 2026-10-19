# Web thi trắc nghiệm Toán 12 (GitHub Pages + Firebase)

Cấu trúc: `index.html` (ứng dụng), `firebase-config.js` (cấu hình), `pdf/` (4 đề 0121–0124).
GitHub Pages chỉ chứa file tĩnh nên bài nộp được lưu ở Firebase Firestore (gói Spark miễn phí).

## 1. Tạo Firebase
1. Vào https://console.firebase.google.com → Add project.
2. Build → Firestore Database → Create database (chọn vùng gần Việt Nam, vd. asia-southeast1).
3. Project settings → Your apps → Web (`</>`) → copy đoạn config, dán vào `firebase-config.js`.
4. Firestore → Rules, dán rồi Publish:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /subs/{id}   { allow read, create: if true; allow update, delete: if false; }
    match /last/{id}   { allow read, write: if true; }
    match /config/{id} { allow read, write: if true; }
  }
}
```
Lưu ý: mật khẩu giáo viên (12345678) chỉ chặn ở giao diện; luật trên cho phép ai biết kỹ thuật đều đọc/ghi được. Dùng ôn tập trong lớp thì đủ; thi chính thức cần Firebase Authentication.

## 2. Đưa lên GitHub Pages
1. Tạo repo mới, tải toàn bộ nội dung thư mục này lên (giữ nguyên `pdf/`).
2. Settings → Pages → Branch `main`, thư mục `/ (root)` → Save.
3. Link học sinh: `https://<tài-khoản>.github.io/<tên-repo>/`

## 3. Dùng
Giáo viên: bấm "Trang giáo viên", mật khẩu 12345678, đặt giờ bắt đầu/kết thúc (chưa đặt thì trang khóa). Cơ sở dữ liệu ban đầu rỗng.
Giờ khóa/mở dựa trên đồng hồ máy học sinh.
Đổi mật khẩu: tìm `12345678` trong `index.html`.
