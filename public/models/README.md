# Model 3D

Đặt file model của bạn ở đây với tên **`me.glb`** (hoặc `.gltf`):

```
public/models/me.glb
```

Component `Portrait3D` (trang Giới thiệu) sẽ tự nạp từ đường dẫn `/models/me.glb`.

- Nếu tên/đường dẫn khác, sửa prop `src` trong `components/sections/about/Portrait3D.tsx`.
- Nên tối ưu (nén Draco/meshopt) để tải nhanh; giữ dung lượng vừa phải (< 15–20MB).
