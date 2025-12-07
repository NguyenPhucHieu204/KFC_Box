# KFC Fried Chicken dApp - Hướng Dẫn Chi Tiết Tiếng Việt

## 📖 Giới Thiệu

Đây là một ứng dụng **Web3 dApp (Decentralized Application)** chạy trên mạng **IOTA Devnet**. Ứng dụng cho phép bạn:
- **Nấu gà KFC** với công thức riêng bằng cách nhập các thành phần
- **Nhận cờ (Flag)** khi bạn nấu đúng công thức hoàn hảo
- Tất cả dữ liệu được lưu trữ trên blockchain IOTA

---

## 🛠️ Yêu Cầu Hệ Thống

Trước khi chạy ứng dụng, bạn cần cài đặt:

1. **Node.js** (phiên bản 18.x trở lên)
   - Tải từ: https://nodejs.org/

2. **IOTA CLI** (để build và deploy smart contract)
   - Hướng dẫn cài đặt: https://docs.iota.org/

3. **Ví Crypto** (để tương tác với dApp)
   - Sử dụng Sui Wallet hoặc IOTA Wallet
   - Tải từ: https://chrome.google.com/webstore (tìm "IOTA Wallet")

4. **Git** (để clone dự án)
   - Tải từ: https://git-scm.com/

---

## 🚀 Hướng Dẫn Cài Đặt Và Chạy

### Bước 1: Clone dự án
```bash
git clone https://github.com/anhtuanpc/pizza_box.git
cd pizza_box
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy ứng dụng local
```bash
npm run dev
```

Ứng dụng sẽ khởi động trên: `http://localhost:3001` (hoặc port khác nếu 3000 đang được sử dụng)

### Bước 4: Kết nối ví
1. Mở trình duyệt và truy cập `http://localhost:3001`
2. Nhấp vào nút **"Connect Wallet"**
3. Chọn ví của bạn (IOTA Wallet hoặc Sui Wallet)
4. Phê duyệt kết nối trong popup ví

---

## 🍗 Cách Sử Dụng Ứng Dụng

### Phần 1: Nấu Gà (Fry Chicken)

#### Công Thức Hoàn Hảo (Perfect Recipe)
Để nhận được cờ, bạn **phải** nấu gà với đúng công thức sau:

| Thành Phần | Giá Trị |
|-----------|--------|
| Gà (kg) | 1 |
| Tỏi (g) | 10 |
| Sữa (ml) | 300 |
| Muối (g) | 15 |
| Tiêu (g) | 5 |
| Bột mỳ (g) | 200 |
| Tinh bột ngô (g) | 100 |
| Trứng | 2 |

#### Các Bước Nấu:
1. **Mở form "Fry KFC Chicken"** ở phía dưới trang
2. **Nhập giá trị** cho mỗi thành phần (đã có giá trị mặc định = công thức hoàn hảo)
3. **Nhấp nút "🍗 Fry KFC Chicken"**
4. **Phê duyệt giao dịch** trong popup ví của bạn
5. **Chờ xử lý** (~10-30 giây)

#### Kết Quả Thành Công:
Nếu thành công, bạn sẽ thấy:
- ✅ **Transaction Hash** - Mã giao dịch trên blockchain
- 📦 **ChickenBox ID** - Mã định danh của gà nấu được
- Hiển thị tất cả 8 thành phần bạn vừa nấu

### Phần 2: Lấy Cờ (Get Flag)

Sau khi **nấu gà thành công**, bạn có thể lấy cờ:

1. **Nhấp nút "🚩 Get Flag"** (nút này chỉ hiển thị sau khi nấu gà thành công)
2. **Phê duyệt giao dịch** lần thứ hai
3. **Chờ kiểm tra** - ứng dụng sẽ kiểm tra xem gà bạn nấu có đúng công thức không

#### Nếu Công Thức Đúng ✅
Bạn sẽ thấy:
- 🎉 **"Congratulations! Flag Captured!"**
- Một hộp xanh lá hiển thị **Flag ID**
- Bạn đã thành công!

#### Nếu Công Thức Sai ❌
Bạn sẽ thấy thông báo lỗi:
- ⚠️ **"Transaction Error"** 
- Lý do: Công thức không đúng (các giá trị phải khớp hoàn toàn)

---

## 🔧 Cách Hoạt Động Chi Tiết

### Kiến Trúc Hệ Thống

```
┌─────────────────────────────────────────────────────────┐
│           KFC dApp (Frontend - React/Next.js)           │
│  - Giao diện người dùng (UI)                            │
│  - Kết nối ví crypto                                    │
│  - Gửi giao dịch đến blockchain                         │
└─────────────────┬───────────────────────────────────────┘
                  │ HTTP + IOTA SDK
                  ▼
┌─────────────────────────────────────────────────────────┐
│        IOTA Devnet (Blockchain Network)                 │
│  - Lưu trữ dữ liệu gà nấu được (ChickenBox)            │
│  - Kiểm tra công thức (get_flag function)              │
│  - Tạo cờ (Flag) khi công thức đúng                    │
└─────────────────────────────────────────────────────────┘
```

### Quy Trình Chi Tiết

#### 1️⃣ Quá Trình Nấu Gà (Fry Chicken)

```
Bạn nhập công thức
    ↓
Nhấp "Fry KFC Chicken"
    ↓
Frontend tạo giao dịch blockchain với 8 giá trị thành phần
    ↓
Gửi giao dịch đến ví của bạn (wallet)
    ↓
Bạn phê duyệt trong popup ví
    ↓
Blockchain xử lý: Tạo object "ChickenBox" với 8 giá trị
    ↓
Lưu ChickenBox ID vào localStorage (lưu ở máy tính bạn)
    ↓
Hiển thị thông tin gà nấu được trên giao diện
```

#### 2️⃣ Quá Trình Lấy Cờ (Get Flag)

```
Bạn nhấp "Get Flag"
    ↓
Frontend lấy ChickenBox ID từ localStorage
    ↓
Tạo giao dịch gọi hàm get_flag trên blockchain
    ↓
Gửi đến ví để phê duyệt
    ↓
Bạn phê duyệt
    ↓
Blockchain thực hiện kiểm tra:
  - So sánh 8 giá trị gà với công thức hoàn hảo
  - Nếu sai → Giao dịch bị hủy (MoveAbort)
  - Nếu đúng → Tạo object "Flag"
    ↓
Frontend tìm Flag ID từ kết quả giao dịch
    ↓
Lưu Flag ID vào localStorage
    ↓
Hiển thị thông báo thành công và Flag ID
```

### Smart Contract (Blockchain Logic)

File: `contract/pizza_box/sources/kfc_box.move`

**Module: `pizza_box::kfc`**

#### Struct Chicken (Thành Phần Gà)
```move
public struct Chicken has store {
    chicken_kg: u16,      // Gà (kg)
    garlic_g: u16,        // Tỏi (g)
    milk_ml: u16,         // Sữa (ml)
    salt_g: u16,          // Muối (g)
    pepper_g: u16,        // Tiêu (g)
    flour_g: u16,         // Bột mỳ (g)
    cornstarch_g: u16,    // Tinh bột ngô (g)
    eggs: u16             // Trứng
}
```

#### Struct ChickenBox (Hộp Gà Nấu)
```move
public struct ChickenBox has key, store {
    id: UID,              // Mã định danh duy nhất
    chicken: Chicken      // Thông tin gà bên trong
}
```

#### Struct Flag (Cờ Thành Công)
```move
public struct Flag has key, store {
    id: UID,              // Mã định danh duy nhất
    user: address         // Địa chỉ ví người dùng
}
```

#### Hàm Nấu (fry)
```move
public fun fry(
    chicken_kg, garlic_g, milk_ml, salt_g, 
    pepper_g, flour_g, cornstarch_g, eggs,
    ctx
) {
    // Tạo struct Chicken với các giá trị nhập vào
    // Đóng gói vào ChickenBox
    // Gửi ChickenBox cho người dùng
}
```

**Hành động:** Nhận 8 giá trị, tạo ChickenBox, gửi cho ví của bạn

#### Hàm Lấy Cờ (get_flag)
```move
public fun get_flag(chickenbox: &ChickenBox, ctx) {
    // Kiểm tra 8 giá trị của Chicken trong ChickenBox
    // So sánh với công thức hoàn hảo:
    //   chicken_kg == 1 AND garlic_g == 10 AND ... AND eggs == 2
    
    // Nếu ĐÚNG:
    //   Tạo object Flag
    //   Gửi Flag cho người dùng
    
    // Nếu SAI:
    //   Lỗi ENotKFCPerfect (Giao dịch bị hủy)
}
```

**Hành động:** Kiểm tra công thức, nếu đúng tạo Flag, nếu sai hủy giao dịch

---

## 📦 Cấu Trúc Dự Án

```
pizza_box/
├── app/                          # Next.js app
│   ├── layout.tsx               # Layout trang
│   └── page.tsx                 # Trang chính
├── components/
│   ├── sample.tsx               # Giao diện chính (UI)
│   ├── Provider.tsx             # Cấu hình IOTA SDK
│   └── Wallet-connect.tsx       # Nút kết nối ví
├── hooks/
│   └── useContract.ts           # Logic tương tác smart contract
│                                  (hàm fry và get_flag)
├── lib/
│   └── config.ts                # Cấu hình IOTA (package ID, network)
├── contract/
│   └── pizza_box/
│       ├── Move.toml            # Cấu hình Move package
│       └── sources/
│           └── kfc_box.move     # Smart contract (Chicken, ChickenBox, Flag)
├── public/                       # Static files
├── package.json                  # Dependencies (npm packages)
└── HUONG_DAN_TIENG_VIET.md      # File này
```

---

## 🔑 Các Biến Môi Trường Quan Trọng

### `lib/config.ts`
```typescript
// DEVNET_PACKAGE_ID: Mã định danh của smart contract trên blockchain
// Mỗi lần deploy contract mới, ID này sẽ thay đổi
export const DEVNET_PACKAGE_ID = "0x9db832e7c6fba2bab1459ebec461e381a5f59f6f39d56eb5d1f852b7aaac768a"
```

### Lưu Trữ Local (localStorage)
Ứng dụng lưu 2 mã định danh vào localStorage (trình duyệt):
```javascript
chickenBoxId_{address}    // Mã gà nấu được của bạn
flagId_{address}          // Mã cờ của bạn (nếu đã lấy)
```

Điều này giúp:
- Bạn đóng tab rồi quay lại vẫn thấy dữ liệu cũ
- Không cần gọi blockchain mỗi lần refresh

---

## ⚠️ Các Lỗi Thường Gặp Và Cách Sửa

### Lỗi 1: "Transaction rejected by user"
**Nguyên nhân:** Bạn từ chối phê duyệt giao dịch trong ví
**Cách sửa:** Nhấp vào nút hành động lại và phê duyệt giao dịch trong popup ví

### Lỗi 2: "Insufficient gas"
**Nguyên nhân:** Ví bạn không có đủ IOTA coin để trả phí giao dịch
**Cách sửa:** 
- Yêu cầu faucet IOTA (vòi): https://faucet.iota.io/
- Hoặc mua IOTA từ sàn giao dịch

### Lỗi 3: "No flag ID found in transaction effects"
**Nguyên nhân:** Công thức gà bạn nấu không đúng với công thức hoàn hảo
**Cách sửa:** 
- Kiểm tra lại 8 giá trị
- Sử dụng giá trị mặc định (đã là công thức hoàn hảo)
- Nhấp "Get Flag" lại

### Lỗi 4: "Cannot read property 'fields' of undefined"
**Nguyên nhân:** ChickenBox bị xóa hoặc localStorage bị xóa
**Cách sửa:**
- Mở Developer Tools (F12)
- Vào "Application" → "Local Storage"
- Xóa mục `chickenBoxId_{address}`
- Nấu gà mới

---

## 🔐 Bảo Mật

### Thông Tin Lưu Trữ Local
- **Không** lưu private key hay seed phrase
- Chỉ lưu IDs của objects trên blockchain
- Dữ liệu này **công khai** và có thể xem được trên blockchain

### Phê Duyệt Giao Dịch
- Luôn kiểm tra chi tiết giao dịch trước khi phê duyệt
- Ví của bạn quản lý private key (không bao giờ gửi đến server)

---

## 📊 Gas Cost (Chi Phí Giao Dịch)

Mỗi giao dịch trên blockchain cần trả phí:

| Hành Động | Chi Phí Ước Tính |
|----------|-----------------|
| Fry Chicken | ~1-2 IOTA |
| Get Flag | ~1-2 IOTA |

Chi phí này tùy thuộc vào tình trạng mạng. Devnet rẻ hơn mainnet rất nhiều (vì mục đích test).

---

## 🔗 Các Liên Kết Hữu Ích

- **IOTA Docs:** https://docs.iota.org/
- **IOTA dApp Kit:** https://github.com/iotaledger/iota-sdk
- **Move Language:** https://move-language.github.io/
- **IOTA Devnet Explorer:** https://explorer.iota.io/ (chọn Devnet)
- **IOTA Wallet:** https://chromewebstore.google.com/

---

## 🆘 Cần Giúp Đỡ?

1. **Kiểm tra console browser** (F12 → Console)
2. **Kiểm tra transaction trên explorer:** https://explorer.iota.io/?network=devnet
3. **Đọc lại hướng dẫn trên**
4. **Liên hệ tác giả:** [GitHub Issues]

---

## 📝 Ghi Chú

- Đây là ứng dụng **TESTNET** (devnet)
- Dữ liệu có thể bị reset khi devnet update
- Các IOTA coin trên devnet không có giá trị thực
- Mục đích: học tập và thử nghiệm Web3

---

**Tạo ngày:** 06/12/2025  
**Phiên bản:** 1.0  
**Dự án:** KFC Fried Chicken dApp (IOTA)
