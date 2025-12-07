# DEVELOPMENT.md — Hướng Dẫn Chi Tiết Cách Hoạt Động

Tài liệu này giải thích chi tiết **cách code hoạt động**, **luồng dữ liệu**, **kiến trúc**, và **quy trình phát triển** của dự án KFC Box dApp.

---

## 📊 Kiến Trúc Tổng Quan

```
┌─────────────────────────────────────────────────┐
│           Frontend (React/Next.js)              │
│  - UI (page.tsx, sample.tsx)                    │
│  - Hooks (useContract.ts)                       │
│  - Components (Wallet-connect.tsx)              │
└──────────────────┬──────────────────────────────┘
                   │ HTTP + IOTA SDK
                   ▼
┌─────────────────────────────────────────────────┐
│    Browser Wallet (IOTA Wallet / Sui Wallet)    │
│  - Quản lý private key                          │
│  - Ký giao dịch (signing)                       │
│  - Quản lý gas budget                           │
└──────────────────┬──────────────────────────────┘
                   │ Signed Transaction
                   ▼
┌─────────────────────────────────────────────────┐
│   IOTA Blockchain (Devnet)                      │
│  - Execute Move contract functions              │
│  - Lưu trữ objects (ChickenBox, Flag)           │
│  - Trả về transaction effects                   │
└─────────────────────────────────────────────────┘
```

---

## 🔄 Luồng Dữ Liệu Chính

### Luồng 1: Kết Nối Ví (Connect Wallet)

```
[UI: "Connect Wallet" button]
          ↓
[Wallet-connect.tsx]
  └─ Render ConnectButton từ @iota/dapp-kit
          ↓
[Browser Wallet Popup]
  └─ Người dùng chọn ví & phê duyệt
          ↓
[useContract.ts]
  └─ useCurrentAccount() hook lấy account info
          ↓
[sample.tsx]
  └─ Kiểm tra `currentAccount` → render form (nếu connected)
```

**Code trọng yếu:**
- `components/Wallet-connect.tsx`: Render ConnectButton
- `hooks/useContract.ts`: useCurrentAccount() từ @iota/dapp-kit
- `components/sample.tsx`: Kiểm tra `isConnected = !!currentAccount`

---

### Luồng 2: Nấu Gà (Fry Chicken)

```
[User nhập 8 giá trị thành phần]
  chickenKg, garlicG, milkMl, saltG, pepperG, flourG, cornstarchG, eggs
          ↓
[UI: Click "Fry KFC Chicken"]
          ↓
[sample.tsx → handleFryChicken()]
  └─ Validate input (kiểm tra số hợp lệ)
  └─ Gọi actions.fryChicken(...)
          ↓
[useContract.ts → fryChicken() async]
  ├─ Tạo Transaction object (từ @iota/iota-sdk)
  ├─ Gọi tx.moveCall({
  │    arguments: [8 giá trị u16],
  │    target: `${packageId}::kfc::fry`
  │  })
  ├─ Set gas budget: tx.setGasBudget(5000000)
  └─ Gửi đến ví: signAndExecute({ transaction: tx })
          ↓
[Browser Wallet Popup]
  └─ Hiển thị chi tiết giao dịch
  └─ Người dùng ký (private key không bao giờ gửi về server)
          ↓
[IOTA Blockchain]
  ├─ Execute Move function `kfc::fry(...)`
  ├─ Tạo Chicken struct từ 8 giá trị
  ├─ Wrap vào ChickenBox object
  ├─ Gửi ChickenBox cho user address
  └─ Trả về transaction effects (created objects, mutated objects, ...)
          ↓
[useContract.ts → onSuccess callback]
  ├─ Nhận transaction digest (hash)
  ├─ Gọi iotaClient.waitForTransaction({ digest })
  ├─ Tìm ChickenBox ID từ effects.created
  ├─ Lưu vào localStorage: `chickenBoxId_{address}`
  └─ Gọi refetch() để fetch ChickenBox data
          ↓
[useIotaClientQuery (getObject)]
  ├─ Query ChickenBox object từ blockchain
  ├─ Parse fields từ object data
  ├─ Trả về ChickenData { chickenKg, garlicG, ... }
          ↓
[sample.tsx]
  └─ Render "Your Creation" card với 8 giá trị
  └─ Hiển thị ChickenBox ID
  └─ Hiển thị "Claim Reward" button
```

**Code trọng yếu:**
- `components/sample.tsx`:
  ```tsx
  const handleFryChicken = async () => {
    await actions.fryChicken(
      parseInt(ingredients.chickenKg), // 8 giá trị
      ...
    );
  };
  ```
- `hooks/useContract.ts`:
  ```tsx
  const fryChicken = async (...) => {
    const tx = new Transaction();
    tx.moveCall({
      arguments: [tx.pure.u16(chickenKg), ...],
      target: `${packageId}::kfc::fry`
    });
    signAndExecute({ transaction: tx }, {
      onSuccess: async ({ digest }) => {
        const { effects } = await iotaClient.waitForTransaction({ digest });
        const newChickenBoxId = effects?.created?.[0]?.reference?.objectId;
        setChickenBoxId(newChickenBoxId);
        localStorage.setItem(`chickenBoxId_${address}`, newChickenBoxId);
        await refetch();
      }
    });
  };
  ```

---

### Luồng 3: Lấy Cờ (Get Flag)

```
[User nhấp "Claim Reward" button]
          ↓
[sample.tsx → handleClaimReward()]
  ├─ Hiển thị confirm dialog
  └─ Nếu "OK" → gọi actions.getFlag()
          ↓
[useContract.ts → getFlag() async]
  ├─ Tạo Transaction object
  ├─ Gọi tx.moveCall({
  │    arguments: [tx.object(chickenBoxId)],
  │    target: `${packageId}::kfc::get_flag`
  │  })
  │  (Lưu ý: ChickenBox là object reference, không phải value)
  ├─ Set gas budget
  └─ Gửi đến ví: signAndExecute(...)
          ↓
[Browser Wallet Popup]
  └─ Ký giao dịch
          ↓
[IOTA Blockchain → kfc::get_flag(chickenbox)]
  ├─ So sánh 8 giá trị của chicken với công thức hoàn hảo:
  │    chicken_kg == 1 && garlic_g == 10 && ... && eggs == 2
  ├─ NẾU ĐÚNG:
  │    ├─ Tạo Flag object mới
  │    ├─ Gửi Flag cho user
  │    └─ Return success
  │
  └─ NẾU SAI:
       └─ Abort giao dịch (MoveAbort) → Lỗi
          ↓
[useContract.ts → onSuccess / onError]
  ├─ NẾU SUCCESS:
  │    ├─ Tìm Flag ID từ effects.created
  │    ├─ Lưu vào localStorage: `flagId_{address}`
  │    └─ Render "Flag Claimed!" message
  │
  └─ NẾU ERROR:
       └─ Hiển thị lỗi: "Công thức sai" hoặc "Transaction rejected"
          ↓
[sample.tsx]
  └─ Nếu thành công: Render flag card với Flag ID
  └─ Nếu lỗi: Render error card
```

**Code trọng yếu:**
- `components/sample.tsx`:
  ```tsx
  const handleClaimReward = () => {
    const confirmed = window.confirm("Ready to claim?");
    if (confirmed) {
      actions.getFlag();
    }
  };
  ```
- `hooks/useContract.ts`:
  ```tsx
  const getFlag = async () => {
    const tx = new Transaction();
    tx.moveCall({
      arguments: [tx.object(chickenBoxId)],  // ← Object reference
      target: `${packageId}::kfc::get_flag`
    });
    signAndExecute({ transaction: tx }, {
      onSuccess: async ({ digest }) => {
        const { effects } = await iotaClient.waitForTransaction({ digest });
        let newFlagId = effects?.created?.[0]?.reference?.objectId;
        if (newFlagId) {
          setFlagId(newFlagId);
          localStorage.setItem(`flagId_${address}`, newFlagId);
        }
      },
      onError: (err) => {
        setTransactionError(new Error(err.message));
      }
    });
  };
  ```

---

## 📁 Chi Tiết Từng File

### `app/page.tsx`
**Mục đích:** Entry point của ứng dụng (server component)

```tsx
export default function Home() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">KFC Box</div>
        <WalletConnect /> {/* Top-right wallet button */}
      </header>
      <main className="site-main">
        <SampleIntegration /> {/* Main UI */}
      </main>
      <footer className="site-footer">© KFC Box</footer>
    </div>
  );
}
```

**Vai trò:** Bố cục chung (layout) của trang. `WalletConnect` ở top-right, nội dung chính là `SampleIntegration`.

---

### `components/Wallet-connect.tsx`
**Mục đích:** Render nút "Connect Wallet" với logo

```tsx
"use client";
import { ConnectButton } from "@iota/dapp-kit";

export function WalletConnect() {
  return (
    <div className="wallet-connect">
      <div className="wallet-panel">
        <div className="wallet-brand">
          <img src="/kfc-logo.png" alt="KFC" className="wallet-logo" />
          <div className="wallet-copy">
            <div className="wallet-title">KFC Box</div>
            <div className="wallet-sub">Connect to fry, collect & claim rewards</div>
          </div>
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}
```

**Vai trò:** Hiển thị ConnectButton (từ @iota/dapp-kit) cùng logo và text mô tả. Người dùng nhấp để kết nối ví.

---

### `components/sample.tsx`
**Mục đích:** Giao diện chính (main UI)

**Cấu trúc:**
```tsx
const SampleIntegration = () => {
  const currentAccount = useCurrentAccount();
  const { data, actions, state, chickenBoxId, flagId } = useContract();
  
  // State cho ingredients
  const [ingredients, setIngredients] = useState({...});
  
  if (!isConnected) {
    // Render logged-out UI (hero + features)
  }
  
  return (
    <div className="app-container">
      <Hero /> {/* KFC themed hero section */}
      {flagId && <RewardCard />} {/* Nếu đã claim flag */}
      {chickenBoxId && <ChickenBoxCard />} {/* Nếu đã nấu gà */}
      <FryForm /> {/* Form nhập 8 giá trị + nút Fry */}
      {state.hash && <SuccessCard />} {/* Nếu giao dịch thành công */}
      {state.error && <ErrorCard />} {/* Nếu có lỗi */}
    </div>
  );
};
```

**Luồng logic:**
1. Kiểm tra account kết nối → nếu không, hiển thị logged-out UI
2. Lấy contract data từ `useContract()`
3. Render form để nhập ingredients
4. Khi user click "Fry", gọi `actions.fryChicken(...)`
5. Khi user click "Claim Reward", gọi `actions.getFlag()`
6. Render status cards (success/error/reward/chickenbox)

---

### `hooks/useContract.ts`
**Mục đích:** Logic tương tác với Move contract (trái tim của dApp)

**Các function chính:**

#### `fryChicken()`
- Tạo Transaction gọi `kfc::fry()`
- Gửi đến ví ký
- Chờ blockchain xác nhận
- Parse ChickenBox ID từ effects
- Lưu vào localStorage
- Fetch ChickenBox data

#### `getFlag()`
- Tạo Transaction gọi `kfc::get_flag(chickenboxId)`
- Gửi đến ví ký
- Chờ blockchain xác nhận
- Nếu thành công: tìm Flag ID, lưu vào localStorage
- Nếu lỗi: hiển thị error message

#### `useIotaClientQuery()`
- Query ChickenBox object từ blockchain
- Parse fields (chicken_kg, garlic_g, ...)
- Return ContractData

**Cấu trúc State:**
```typescript
interface ContractState {
  isLoading: boolean;    // Đang chờ transaction
  isPending: boolean;    // Đang ký
  hash: string;          // Transaction hash
  error: Error | null;   // Lỗi nếu có
}

interface ContractData {
  chickenKg, garlicG, milkMl, saltG, pepperG, flourG, cornstarchG, eggs
}
```

---

### `lib/config.ts`
**Mục đích:** Cấu hình mạng & contract ID

```typescript
export const DEVNET_PACKAGE_ID = "0x..."; // Contract ID trên devnet
// Mỗi lần deploy contract, ID này thay đổi
```

**Cách dùng:** `useNetworkVariable("packageId")` trong `useContract.ts`

---

### `lib/toast.ts`
**Mục đích:** Hiển thị toast notification (thay cho alert)

```typescript
export const showToast = (message: string) => {
  const el = document.createElement('div');
  el.className = 'kfc-toast kfc-toast--visible';
  el.textContent = message;
  document.body.appendChild(el);
  
  setTimeout(() => {
    el.classList.remove('kfc-toast--visible');
    setTimeout(() => el.remove(), 220);
  }, 3000);
};
```

**Khi dùng:** `showToast("Copied to clipboard!")` khi user copy ID

---

### `app/globals.css`
**Mục đích:** Style global, CSS variables, KFC theme

**Chủ yếu:**
- KFC brand colors: `--kfc-red`, `--kfc-gold`, ...
- Component classes: `.hero`, `.card`, `.primary-btn`, ...
- Toast styles: `.kfc-toast`
- Responsive layout: `.site-header`, `.site-main`, `.site-footer`

**Lưu ý:** CSS bị scoped để không ảnh hưởng tới modal của wallet

---

## 🔐 Lưu Trữ & Bảo Mật

### localStorage
- `chickenBoxId_{address}` — ID ChickenBox của user
- `flagId_{address}` — ID Flag của user (nếu đã claim)

**Tại sao:** Để user không mất dữ liệu khi refresh/đóng tab

**An toàn:** Chỉ lưu IDs, không lưu private key hay sensitive data

---

## 🧪 Chu Kỳ Giao Dịch Chi Tiết

### Từng bước (step-by-step)

```
1. Frontend tạo Transaction object (tx)
   └─ tx = new Transaction()

2. Frontend thêm move call
   └─ tx.moveCall({ arguments, target })
   └─ target = "${packageId}::kfc::fry"

3. Frontend set gas budget
   └─ tx.setGasBudget(5000000)

4. Frontend gửi TX tới ví để ký
   └─ signAndExecute({ transaction: tx })
   └─ Ví popup xuất hiện

5. User xem chi tiết & ký (bằng private key local)
   └─ Private key KHÔNG bao giờ gửi về server/dApp

6. Ví gửi TX đã ký tới blockchain
   └─ TX broadcast lên IOTA network

7. Blockchain node nhận TX, execute Move code
   └─ Tìm function kfc::fry(8 params)
   └─ Tạo Chicken struct
   └─ Wrap vào ChickenBox
   └─ Lưu vào state
   └─ Return effects (created/mutated objects)

8. Frontend nhận confirmation + effects
   └─ onSuccess callback được gọi
   └─ Extract ChickenBox ID từ effects

9. Frontend lưu ID vào localStorage
   └─ localStorage.setItem(`chickenBoxId_${address}`, id)

10. Frontend fetch ChickenBox data từ blockchain
    └─ useIotaClientQuery("getObject", { id })

11. UI render ChickenBox card với data
    └─ Hiển thị 8 giá trị thành phần
```

---

## 🚀 Quy Trình Phát Triển (Development Workflow)

### 1. Chuẩn Bị Môi Trường
```bash
npm install --legacy-peer-deps
npm run dev
```

### 2. Thay Đổi Code
- Sửa component: `components/sample.tsx`
- Sửa hook: `hooks/useContract.ts`
- Sửa style: `app/globals.css`

### 3. Kiểm Tra Local
- Hot reload tự động (Next.js)
- Mở `http://localhost:3000`
- Test trong browser devtools (F12)

### 4. Lint & Format (Husky + lint-staged)
```bash
# Khi bạn commit, Husky hook tự chạy:
git add .
git commit -m "feat: update UI"
# └─ pre-commit hook chạy: eslint --fix + prettier
```

### 5. Deploy Contract (nếu thay đổi Move code)
```bash
npm run iota-deploy
# Cập nhật DEVNET_PACKAGE_ID trong lib/config.ts
```

### 6. Build Production
```bash
npm run build
npm start
```

---

## 🔧 Các Công Cụ Hỗ Trợ

| Công Cụ | Mục Đích |
|---------|---------|
| Next.js | Framework frontend (SSR, routing) |
| React | UI components |
| TypeScript | Type safety |
| @iota/dapp-kit | Wallet connection, hooks |
| @iota/iota-sdk | Transaction building, querying |
| Radix UI | UI components (Button, TextField, ...) |
| ESLint | Linting (code style check) |
| Prettier | Formatting (code style auto-fix) |
| Husky | Git hooks (pre-commit) |
| lint-staged | Run eslint/prettier only on staged files |

---

## 📝 Các Lỗi Thường Gặp Khi Phát Triển

### Lỗi 1: "Cannot read property 'fields' of undefined"
**Nguyên nhân:** ChickenBox không tồn tại hoặc localStorage bị xóa
**Cách sửa:** Xóa localStorage → nấu gà mới

### Lỗi 2: "No flag ID found in transaction effects"
**Nguyên nhân:** Contract trả về error (thường do công thức sai)
**Cách sửa:** Kiểm tra 8 giá trị, đảm bảo đúng công thức hoàn hảo

### Lỗi 3: "Received NaN for the children attribute"
**Nguyên nhân:** Dữ liệu undefined/null khi render
**Cách sửa:** Dùng helper `safe()` để coerce giá trị

### Lỗi 4: "Ví popup không hiển thị"
**Nguyên nhân:** Ví chưa cài hoặc chưa enable devnet
**Cách sửa:** Cài IOTA Wallet extension, chọn Devnet network

---

## ✅ Checklist Khi Thêm Feature Mới

- [ ] Thêm logic vào `useContract.ts` (hook)
- [ ] Thêm UI component trong `sample.tsx`
- [ ] Thêm style vào `app/globals.css`
- [ ] Kiểm tra TypeScript types
- [ ] Test local (npm run dev)
- [ ] Chạy lint: `npm run lint`
- [ ] Chạy format: `npm run format`
- [ ] Commit với git hooks (Husky)
- [ ] Test final build: `npm run build`

---

## 📚 Tài Liệu Tham Khảo

- **IOTA Docs:** https://docs.iota.org/
- **IOTA dApp Kit:** https://github.com/iotaledger/dapp-kit
- **Move Language:** https://move-language.github.io/
- **Next.js:** https://nextjs.org/docs
- **TypeScript:** https://www.typescriptlang.org/

---

_Cập nhật lần cuối: 07/12/2025_
