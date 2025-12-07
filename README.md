# KFC Box — IOTA dApp (Fried Chicken Challenge)

A Next.js-based decentralized application (dApp) built on IOTA with Move smart contracts. Create perfect fried chicken recipes on-chain and earn rewards! 🍗

## 🚀 Quick Start

Get the application running locally in 3 steps:

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. (Optional) Deploy contract if developing
npm run iota-deploy

# 3. Start development server
npm run dev
```

Open `http://localhost:3000` in your browser (or the address shown in your terminal).

Contract Address: https://explorer.iota.org/object/0x1eaf906106e325943a5ed6359783cb0c9c87a2c0daf3624a52d1d17b5352e2c8?module=kfc&network=testnet

## 📖 Overview

**KFC Box** is an IOTA dApp where users:

1. **Connect** their wallet (MetaMask, Phantom, etc.)
2. **Fry Chicken** by submitting a recipe with specific ingredients
3. **Collect** ChickenBox NFTs as proof of creation
4. **Claim Rewards** (Flags) when they get the perfect recipe

All transactions are recorded on the IOTA blockchain using Move smart contracts.

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles + KFC branding
│
├── components/                   # Reusable React components
│   ├── Provider.tsx             # IOTA/Dapp-kit setup
│   ├── Wallet-connect.tsx       # Wallet connection button
│   └── sample.tsx               # Main dApp UI
│
├── hooks/                        # Custom React hooks
│   └── useContract.ts           # Contract interaction logic
│
├── lib/                          # Configuration & utilities
│   ├── config.ts                # Network & contract config
│   └── toast.ts                 # Toast notifications
│
├── contract/                     # Move smart contracts
│   └── pizza_box/
│       ├── Move.toml            # Contract manifest
│       └── sources/
│           └── kfc_box.move     # Contract source code
│
├── public/                       # Static assets
│   └── kfc-logo.png
│
└── package.json                 # Dependencies & scripts
```

## ⚙️ Available Scripts

| Command                       | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| `npm run dev`                 | Start Next.js dev server on `localhost:3000` |
| `npm run build`               | Build for production                         |
| `npm start`                   | Run production server                        |
| `npm run lint`                | Run ESLint checks                            |
| `npm run format`              | Format code with Prettier                    |
| `npm run iota-deploy`         | Deploy/build Move contract                   |
| `npm run iota-deploy:testnet` | Deploy to testnet                            |
| `npm run iota-deploy:devnet`  | Deploy to devnet                             |

## 🔧 Configuration

### Network Configuration (`lib/config.ts`)

The app supports multiple IOTA networks:

```typescript
export const DEVNET_PACKAGE_ID = '0x9db832e7c6fba2bab...';
export const TESTNET_PACKAGE_ID = ''; // Update after testnet deploy
export const MAINNET_PACKAGE_ID = ''; // Update after mainnet deploy
```

**To update after contract deployment:**

1. Deploy contract: `npm run iota-deploy:testnet`
2. Copy Package ID from output
3. Update `TESTNET_PACKAGE_ID` in `lib/config.ts`
4. Change default network in `components/Provider.tsx`

### Environment Variables (Optional)

Create `.env.local` for runtime settings (Git-ignored):

```
NEXT_PUBLIC_NETWORK=devnet
```

## 🎯 How It Works

### User Flow

```
1. User connects wallet → Account authenticated
2. User fills ingredient form (8 parameters)
3. Click "Fry" → Transaction submitted
4. Contract creates ChickenBox with recipe data
5. If recipe matches → "Claim Reward" button appears
6. Click "Claim" → Contract verifies recipe & issues Flag
```

### Perfect Recipe (Current Default)

```
- Chicken: 1 kg
- Garlic: 10g
- Milk: 300ml
- Salt: 15g
- Pepper: 5g
- Flour: 200g
- Cornstarch: 100g
- Eggs: 2
```

Try different values to test! Only the perfect recipe allows claiming rewards.

## 📚 Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Blockchain**: IOTA SDK, @iota/dapp-kit
- **UI**: Radix UI components
- **Styling**: Global CSS with KFC brand variables
- **State**: React hooks + localStorage
- **Development**: ESLint, Prettier, Husky, lint-staged

## 🛠️ Technical Notes

### Key Components

**`useContract.ts`** — All blockchain interactions:

- `fryChicken()` — Create ChickenBox with ingredients
- `getFlag()` — Claim reward if recipe matches
- Data fetching with React Query patterns

**`sample.tsx`** — Main UI:

- Connect state rendering
- Form inputs for 8 ingredients
- Status cards for ChickenBox & Flag display
- Toast notifications for feedback

**`globals.css`** — Scoped styling:

- KFC brand colors (`--kfc-red`, `--kfc-gold`)
- Utility classes (`.hero`, `.card`, `.primary-btn`)
- Scoped to `.app-container` to prevent wallet modal conflicts

### Best Practices

- Ensure Node.js >= 18 is installed
- When upgrading dependencies (especially `next`, `@iota/*`), check changelogs for breaking changes
- Avoid overly broad CSS selectors that might affect wallet modals
- Use TypeScript strict mode for type safety
- Test on devnet before deploying to testnet/mainnet

## ⚠️ Common Issues & Solutions

| Error                          | Cause                 | Solution                                          |
| ------------------------------ | --------------------- | ------------------------------------------------- |
| `Transaction rejected by user` | User denied in wallet | Approve transaction in wallet popup               |
| `Insufficient gas`             | Gas budget too low    | Increase gas-budget in deployment scripts         |
| `No flag ID found`             | Recipe doesn't match  | Try default recipe: chicken 1kg, garlic 10g, etc. |
| `Module not found`             | Dependencies missing  | Run `npm install --legacy-peer-deps`              |
| `Network error`                | RPC endpoint down     | Check network status or switch networks           |

## ✅ What's Included

- ✅ Full KFC branding & responsive UI
- ✅ IOTA wallet integration (MetaMask, Phantom, etc.)
- ✅ Move smart contract template
- ✅ ESLint + Prettier code formatting
- ✅ Husky pre-commit hooks
- ✅ Toast notifications
- ✅ Defensive rendering (NaN prevention)
- ✅ Responsive layout (mobile-friendly)
- ✅ localStorage persistence for ChickenBox & Flag IDs
- ✅ Comprehensive documentation

## 🚀 Deployment

### Deploy to Testnet

```bash
# 1. Setup testnet wallet (if not done)
iota client new-env --alias testnet --rpc https://api.testnet.iota.cafe
iota client switch --env testnet

# 2. Request testnet coins
iota client faucet

# 3. Deploy contract
npm run iota-deploy:testnet

# 4. Update config with Package ID
# Edit lib/config.ts and set TESTNET_PACKAGE_ID

# 5. Switch app to testnet
# Edit components/Provider.tsx: defaultNetwork="testnet"
```

### Deploy to Production

```bash
npm run build
npm start
```

For hosting, consider:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Docker + your own server

## 📖 Documentation

- **Architecture Details**: See `DEVELOPMENT.md` for code flow diagrams
- **IOTA Docs**: https://docs.iota.org/
- **dApp Kit**: https://github.com/iotaledger/dapp-kit
- **Next.js**: https://nextjs.org/docs
- **Move Language**: https://docs.iota.org/build/move

## 🧪 Testing Checklist

- [ ] Connect wallet on devnet
- [ ] Submit fry transaction with default recipe
- [ ] Verify ChickenBox created
- [ ] Try alternative ingredient values
- [ ] Test claim reward on perfect recipe
- [ ] Check localStorage persistence
- [ ] Test on testnet after deployment
- [ ] Verify gas calculations
- [ ] Test mobile responsiveness
- [ ] Verify ESLint/Prettier pass

## 📝 Contributing

Contributions welcome! Please:

1. Create a feature branch
2. Follow ESLint/Prettier rules (enforced by Husky pre-commit hooks)
3. Test on devnet/testnet before submitting
4. Update `DEVELOPMENT.md` if changing architecture
5. Add comments for complex logic

## 🔒 Security Notes

- Private keys are managed by wallet extensions (MetaMask, Phantom)
- ChickenBox IDs stored in localStorage (user-specific)
- Always verify contract address before transactions
- Never commit `.env.local` or private keys
- Use HTTPS in production

## 📄 License

MIT — Feel free to use as a template for your IOTA dApps!

## 🤝 Support

For issues or questions:

1. Check `DEVELOPMENT.md` for architecture details
2. Review the Common Issues section above
3. Check IOTA documentation
4. Open a GitHub issue with reproduction steps

## 📧 Contact & Links

### Project Information

- **GitHub Repository**: https://github.com/NguyenPhucHieu204/KFC_Box
- **Project Owner**: NguyenPhucHieu204
- **Repository**: KFC_Box

### Get Help

- **GitHub Issues**: https://github.com/NguyenPhucHieu204/KFC_Box/issues
- **IOTA Community**: https://discord.gg/iota
- **dApp Kit Discussions**: https://github.com/iotaledger/dapp-kit/discussions

### Related Resources

- **IOTA Documentation**: https://docs.iota.org/
- **IOTA GitHub**: https://github.com/iotaledger/iota
- **Move Documentation**: https://docs.iota.org/build/move
- **Next.js Docs**: https://nextjs.org/docs

### Report Issues

Found a bug? Have a feature request?

1. Check existing [GitHub Issues](https://github.com/NguyenPhucHieu204/KFC_Box/issues)
2. Create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment info (Node version, network, etc.)

---

**Version**: 1.0  
**Last Updated**: December 7, 2025  
**Maintained by**: KFC Box Development Team  
**Repository**: https://github.com/NguyenPhucHieu204/KFC_Box
