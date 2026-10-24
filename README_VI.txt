ỨNG DỤNG KIỂM TRA TỪ VỰNG TIẾNG ANH - BẢN PWA OFFLINE

CÓ GÌ TRONG GÓI?
- index.html: ứng dụng và kho từ vựng ban đầu trích từ file Word đã cung cấp.
- manifest.webmanifest + icon.svg: thông tin cài lên màn hình chính.
- sw.js: lưu ứng dụng để mở lại khi mất Internet.

CÁCH DÙNG TRÊN ANDROID, IPHONE VÀ MÁY TÍNH
Ứng dụng PWA cần được đặt trên một địa chỉ HTTPS để cài đặt và dùng offline ổn định. Chỉ chép file index.html vào điện thoại hoặc mở trực tiếp từ file không kích hoạt được Service Worker.

Cách triển khai miễn phí bằng GitHub Pages:
1. Trên máy tính, đăng nhập hoặc tạo tài khoản GitHub.
2. Tạo repository mới, ví dụ: english-vocabulary-quiz. Có thể đặt Public.
3. Tải lên TOÀN BỘ 4 file trong thư mục này: index.html, manifest.webmanifest, sw.js, icon.svg (không đổi tên file).
4. Trong repository, vào Settings > Pages.
5. Ở Build and deployment, chọn Deploy from a branch; chọn branch main và folder /(root), bấm Save.
6. Đợi GitHub Pages cấp URL dạng https://TEN-TAI-KHOAN.github.io/english-vocabulary-quiz/ rồi mở URL đó khi có Internet.
7. Mở trang trên từng thiết bị ít nhất một lần khi có Internet để trình duyệt lưu ứng dụng. Sau đó có thể bật chế độ máy bay và kiểm tra.

CÀI LÊN MÀN HÌNH CHÍNH
- Android (Chrome): mở URL HTTPS > menu ⋮ > Install app / Add to Home screen.
- iPhone/iPad (Safari): mở URL HTTPS > nút Share > Add to Home Screen > Add.
- Máy tính (Chrome/Edge): mở URL HTTPS > biểu tượng Install trên thanh địa chỉ hoặc menu > Install app.

OFFLINE VÀ DỮ LIỆU
- Sau lần tải đầu, ứng dụng và chức năng kiểm tra chạy offline. Nhập DOCX được xử lý ngay trên thiết bị, không tải file lên mạng; cần trình duyệt hiện đại hỗ trợ DecompressionStream('deflate-raw').
- Dữ liệu lưu cục bộ riêng trong từng trình duyệt/thiết bị. Không có đồng bộ đám mây.
- Để chuyển kho từ: thiết bị cũ > Xuất bản sao lưu (JSON); chuyển file JSON sang thiết bị mới > Khôi phục bản sao.
- Nên sao lưu định kỳ. Xóa dữ liệu trang web/trình duyệt có thể làm mất kho từ đã lưu trên thiết bị đó.

CHỨC NĂNG
- Bài kiểm tra 30 câu, giới hạn 15 phút.
- Chọn 1 trong 4 nghĩa tiếng Việt; hiện từ loại và phiên âm khi trả lời đúng; câu sai vẫn tự chuyển.
- Chấm điểm, xem lại đáp án.
- Nhập Word .docx hoặc dán 4 cột: Từ vựng, Từ loại, Phiên âm, Nghĩa tiếng Việt.
- Tự bỏ từ trùng; tìm kiếm và phân trang kho từ.
- Xuất/nhập bản sao lưu JSON.
