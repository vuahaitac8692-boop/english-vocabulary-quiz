HƯỚNG DẪN ĐƯA ỨNG DỤNG LÊN GITHUB PAGES

GÓI NÀY CÓ 2 PHẦN RIÊNG BIỆT
1) Website/ : các file được tải lên thư mục gốc của repository GitHub Pages.
2) Admin_Rieng/Vocabulary_Admin.html: công cụ quản trị kho chung. GIỮ FILE NÀY TRÊN MÁY RIÊNG, KHÔNG tải thư mục Admin_Rieng lên repository công khai.

A. ĐĂNG WEBSITE
1. Giải nén gói ZIP.
2. Mở repository GitHub của ứng dụng.
3. Tải các file bên trong thư mục Website lên thư mục gốc của repository, gồm index.html, vocabulary.json, sw.js, manifest.webmanifest, icon.svg.
4. Commit changes. Giữ nguyên tên và cấu trúc file vocabulary.json.
5. Trong Settings > Pages, chọn nguồn xuất bản đang dùng (thường Deploy from a branch và branch main/root).
6. Mở website. Lần đầu cần Internet; sau đó ứng dụng có thể dùng offline tùy trình duyệt.

B. CẬP NHẬT KHO CHUNG (CHỈ BẠN)
1. Trên máy riêng, mở Admin_Rieng/Vocabulary_Admin.html bằng Chrome hoặc Edge.
2. Thêm/sửa từ bằng biểu mẫu, dán danh sách, nhập DOCX hoặc JSON.
3. Bấm “Xuất vocabulary.json để đăng lên GitHub”.
4. Mở repository GitHub, thay file vocabulary.json ở thư mục gốc bằng file vừa xuất, rồi Commit changes.
5. Người học bấm “Đồng bộ kho từ vựng chung” hoặc mở ứng dụng có Internet.

BẢO MẬT
- Không tải Vocabulary_Admin.html lên website công khai nếu muốn giữ công cụ quản trị riêng.
- Không đưa GitHub token/mật khẩu vào mã HTML/JavaScript.
- Chỉ cấp quyền ghi repository GitHub cho tài khoản của bạn. GitHub Pages chỉ phục vụ file tĩnh; việc phát hành kho chung thực hiện bằng commit file vocabulary.json.

C. TỪ VỰNG CÁ NHÂN VÀ BÀI HỌC
- Từ người học tự thêm được lưu trên trình duyệt/thiết bị đó, không tự gửi lên GitHub.
- Từ mới tự tạo bài học theo ngày nhập. Tiến độ học lưu cục bộ.
- Muốn chuyển thiết bị, dùng “Xuất bản sao lưu” và “Khôi phục bản sao”.
- Cần trả lời đúng 2 lần liên tiếp để đánh dấu đã thuộc. Lịch ôn tự động: 1, 3, 7 và 14 ngày.
- File sao lưu ứng dụng có cả bài học/tiến độ; vocabulary.json dùng cho kho chung và giữ cấu trúc {format, updatedAt, vocab}.

LƯU Ý: Gói Website giữ vocabulary.json đang có; không thay file này bằng dữ liệu cá nhân. Hãy luôn xuất từ công cụ quản trị khi muốn cập nhật kho chung.
