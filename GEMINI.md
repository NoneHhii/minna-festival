# Quy tắc làm việc của Agent (Workspace Rules)

## Quy trình chỉnh sửa từng file và chờ duyệt (One-File-At-A-Time Review)

1. **Chỉ sửa tối đa 1 file mỗi lượt (1 file per turn)**:
   - Trong mỗi lượt phản hồi, Agent **chỉ được phép tạo hoặc chỉnh sửa duy nhất 1 file** bằng `edit_file` hoặc `write_file`.
   - Tuyệt đối **không** gọi nhiều lệnh `edit_file` / `write_file` trên nhiều file khác nhau trong cùng một lượt.

2. **Dừng lại ngay sau khi sửa 1 file để chờ người dùng Accept / Reject**:
   - Ngay sau khi thực hiện thay đổi trên 1 file, Agent phải **dừng gọi công cụ (stop calling tools)** và thông báo ngắn gọn:
     - Tên file vừa sửa (kèm link mở trực tiếp tới dòng code thay đổi).
     - Tóm tắt ngắn các dòng vừa thay đổi.
     - File tiếp theo dự kiến sẽ sửa (nếu nhiệm vụ gồm nhiều file).
   - Chờ người dùng kiểm tra giao diện Diff (Accept hoặc Reject từng đoạn/dòng code trên trình soạn thảo) và phản hồi xác nhận (ví dụ: *"tiếp"*, *"ok"*, *"duyệt"*) rồi mới tiếp tục sửa file kế tiếp.

3. **Ưu tiên chỉnh sửa từng cụm nhỏ (`edit_file`) thay vì ghi đè toàn bộ file (`write_file`)**:
   - Khi sửa file đã tồn tại, luôn dùng `edit_file` chỉ đúng đoạn dòng cần thay đổi (thay vì `write_file` với `Overwrite: true`) để trình soạn thảo hiển thị rõ ràng từng dòng xanh/đỏ (inline diff) giúp người dùng dễ dàng **Accept** hoặc **Reject** từng phần.

