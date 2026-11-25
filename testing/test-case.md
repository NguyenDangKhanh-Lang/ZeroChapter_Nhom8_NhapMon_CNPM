# TEST CASE – ZEROCHAPTER

## 1. Thông tin chung

- Dự án: ZeroChapter – Nền tảng đọc truyện trực tuyến
- Sprint: Sprint 2
- Người thực hiện: TV7(nhi)
- Nhiệm vụ: Task 19 – Kiểm thử toàn bộ theo ba vai trò
- Mục đích: Kiểm tra các chức năng của hệ thống và quyền truy cập của từng vai trò.

## 2. Kiểm thử vai trò khách (Guest)

| Mã TC | Chức năng | Các bước kiểm thử | Kết quả mong đợi |
|---|---|---|---|
| TC01 | Xem danh sách truyện | Truy cập trang chủ | Hiển thị danh sách truyện |
| TC02 | Xem chi tiết truyện | Chọn một truyện | Hiển thị thông tin truyện |
| TC03 | Tìm kiếm truyện | Nhập tên truyện vào ô tìm kiếm | Hiển thị kết quả phù hợp |
| TC04 | Lọc thể loại | Chọn một thể loại | Hiển thị truyện thuộc thể loại đã chọn |
| TC05 | Đọc truyện | Chọn một chương truyện | Hiển thị nội dung chương |
| TC06 | Truy cập quản trị | Thử truy cập trang quản trị | Không được phép truy cập |

## 3. Kiểm thử vai trò thành viên (Member)

| Mã TC | Chức năng | Các bước kiểm thử | Kết quả mong đợi |
|---|---|---|---|
| TC07 | Đăng ký | Nhập thông tin hợp lệ và đăng ký | Tạo tài khoản thành công |
| TC08 | Đăng nhập | Nhập tài khoản và mật khẩu hợp lệ | Đăng nhập thành công |
| TC09 | Đăng xuất | Nhấn nút đăng xuất | Kết thúc phiên đăng nhập |
| TC10 | Xem hồ sơ | Mở trang hồ sơ cá nhân | Hiển thị thông tin thành viên |
| TC11 | Sửa hồ sơ | Thay đổi thông tin và lưu | Thông tin được cập nhật |
| TC12 | Thêm yêu thích | Nhấn nút yêu thích truyện | Truyện được thêm vào thư viện |
| TC13 | Bỏ yêu thích | Nhấn nút bỏ yêu thích | Truyện được xóa khỏi thư viện |
| TC14 | Xem lịch sử đọc | Mở lịch sử đọc | Hiển thị lịch sử đọc của thành viên |
| TC15 | Đọc tiếp | Nhấn nút Đọc tiếp | Mở lại chương đã đọc gần nhất |
| TC16 | Truy cập quản trị | Thử truy cập trang quản trị | Không được phép truy cập |

## 4. Kiểm thử vai trò Admin

| Mã TC | Chức năng | Các bước kiểm thử | Kết quả mong đợi |
|---|---|---|---|
| TC17 | Đăng nhập Admin | Nhập tài khoản Admin hợp lệ | Đăng nhập thành công |
| TC18 | Thêm truyện | Nhập thông tin truyện mới | Truyện được thêm thành công |
| TC19 | Sửa truyện | Chỉnh sửa thông tin truyện | Thông tin được cập nhật |
| TC20 | Xóa truyện | Thực hiện xóa truyện thử nghiệm | Xóa thành công hoặc có thông báo phù hợp |
| TC21 | Quản lý chương | Thêm hoặc sửa chương | Dữ liệu chương được cập nhật |
| TC22 | Quản lý thể loại | Thêm hoặc sửa thể loại | Dữ liệu thể loại được cập nhật |
| TC23 | Xem tài khoản | Mở danh sách tài khoản | Hiển thị danh sách thành viên |
| TC24 | Khóa tài khoản | Chọn tài khoản thử nghiệm và khóa | Tài khoản được khóa |
| TC25 | Mở khóa tài khoản | Mở khóa tài khoản thử nghiệm | Tài khoản hoạt động lại |

## 5. Ghi chú

- Các trường hợp kiểm thử trên là danh sách dự kiến, cần đối chiếu với chức năng thực tế của hệ thống.
- Chỉ đánh dấu Pass hoặc Fail sau khi đã thực hiện kiểm thử.
- Nếu chức năng chưa được phát triển hoặc chưa thể kiểm thử, ghi nhận trạng thái Blocked.
- Không sử dụng dữ liệu thật để thử nghiệm thao tác xóa hoặc khóa tài khoản.