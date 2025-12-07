# IOTA dApp Starter

A beginner-friendly Next.js template for building IOTA dApps with Move smart contracts.

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Deploy your contract
npm run iota-deploy

# Start development server
npm run dev
```

# KFC Box — IOTA dApp (Fried Chicken)

Hướng dẫn ngắn (Tiếng Việt) để chạy, phát triển và hiểu cấu trúc dự án.

## 🚀 Chạy dự án (Quick start)

Các bước cơ bản để chạy ứng dụng local:

```bash
# 1. Cài dependencies
npm install --legacy-peer-deps

# 2. (Tùy chọn) Deploy contract nếu bạn đang phát triển contract
npm run iota-deploy

# 3. Chạy dev server
npm run dev
```

Mở trình duyệt vào `http://localhost:3000` (hoặc địa chỉ/port hiển thị khi dev server khởi động).

## ℹ️ Mô tả ngắn

Ứng dụng là một ví dụ dApp sử dụng IOTA dApp Kit và Move smart contracts để mô phỏng việc "nấu gà KFC" trên blockchain. Người dùng có thể gửi giao dịch để tạo "ChickenBox" và gọi hàm lấy "Flag" khi công thức trùng khớp.

## 📁 Cấu trúc dự án

- `app/` — Next.js (App Router) pages, layout và global styles.
- `components/` — React components tái sử dụng (ví dụ: `Wallet-connect.tsx`, `sample.tsx`).
- `hooks/` — Custom hooks; `useContract.ts` chứa logic tương tác với Move contract.
- `lib/` — Cấu hình và utilities (ví dụ: `config.ts`, `toast.ts`).
- `contract/` — Mã Move contract (sources, Move.toml, build artefacts khi biên dịch).
- `public/` — Tài nguyên tĩnh (logo, hình ảnh).
- `package.json` — Scripts & dependencies.

## ⚙️ Scripts quan trọng

- `npm run dev` — Chạy Next.js dev server
- `npm run build` — Build production
- `npm start` — Chạy server production sau khi build
- `npm run iota-deploy` — (wrapper) deploy Move contract lên mạng IOTA (tuỳ dự án)
- `npm run gen-hex` — hỗ trợ build/convert (nếu bạn dùng script đi kèm)

## 🧩 Cấu hình môi trường

- `lib/config.ts` chứa các biến cấu hình mạng và `packageId` contract. Khi deploy contract mới, cập nhật `DEVNET_PACKAGE_ID`.
- Nếu cần, tạo file `.env.local` cho các biến runtime (không commit file này vào Git).

## 🛠️ Lưu ý kỹ thuật & Best practices

- Đảm bảo sử dụng Node.js >= 18.
- Khi nâng dependencies (đặc biệt `next`, `@iota/*`), kiểm tra changelog vì có thể có breaking changes.
- Tránh đặt các selector CSS quá chung (ví dụ thay đổi toàn bộ `p, span`) vì có thể ảnh hưởng tới modal/wallet popups.

## 🧪 Test & QA

- Nên thêm unit tests cho `useContract` (mock IOTA client) và UI tests (Playwright) để kiểm tra luồng: connect wallet → fry → get flag.

## 🚨 Xử lý lỗi phổ biến

- `Transaction rejected by user` — người dùng từ chối ký giao dịch.
- `Insufficient gas` — cần cung cấp thêm token testnet hoặc tăng gas budget.
- `No flag ID found` — contract không trả về Flag (thường do công thức sai).

## ✅ Những việc đã làm trong repo (tạm thời)

- Scoped CSS để tránh ảnh hưởng tới modal của wallet.
- Thêm ESLint + Prettier + Husky + lint-staged để cải thiện code style và pre-commit hooks.

## 👩‍💻 Muốn tôi làm tiếp?

- Tôi có thể: audit dependency (kiểm tra vulnerablities), thêm CI workflow, hoặc refactor `useContract` để an toàn hơn. Nói "làm A" hoặc "làm B" và tôi sẽ bắt đầu.

## 📚 Tài liệu tham khảo

- IOTA Docs: https://docs.iota.org/
- IOTA dApp Kit: https://github.com/iotaledger/dapp-kit
- Next.js: https://nextjs.org/docs

---

_Phiên bản README: 1.0 — 07/12/2025_
