KFC Fried Chicken dApp — Guide

Goal
- Convert the example Pizza Box dApp to a KFC Fried Chicken dApp.
- Users can `fry` a ChickenBox with specific ingredients; if the recipe matches the perfect KFC recipe, they can call `get_flag` to receive a Flag object.

Files changed / added
- `contract/pizza_box/sources/kfc_box.move` — New Move module `kfc_box::kfc` with `Chicken`, `ChickenBox`, `fry`, and `get_flag` functions.
- `hooks/useContract.ts` — Updated to use module `kfc`, method `fry`, new Chicken fields parsing, and gas/error handling.
- `components/sample.tsx` — UI updated to show KFC chicken fields and presets; calls `actions.fryChicken`.

Quickstart (developer)
1. Build & deploy Move contract
   - From the `contract/pizza_box` directory, build your Move package (use your Move toolchain / iota deploy scripts). Example (depends on your environment):

```bash
# If you have the provided scripts in this repo (or iota-cli), run:
cd contract/pizza_box
# build step (example)
# replace with your actual Move build command
mover build
# deploy/publish step (example)
# This should return a package id — copy it for the next step
mover publish --network devnet
```

2. Update `lib/config.ts`
- Replace `DEVNET_PACKAGE_ID` with the package id produced by the deployment (0x... string). This tells the frontend which package to call.

3. Run the frontend

```bash
# from project root
npm install
npm run dev
```
- Open the app and connect a wallet (IOTA dApp Kit compatible wallet).

How to use (user)
- Connect your wallet.
- The form contains fields for the chicken recipe (oil, salt, pepper, flour, buttermilk, herbs, spice mix, coating id).
- Use the default preset (matches the perfect recipe) or change values.
- Click `🍗 Fry KFC Chicken` to create a `ChickenBox` object.
- Once the object is created, click `🚩 Get Flag` to attempt to claim the flag. If your recipe matches the encoded perfect recipe, the contract will transfer a `Flag` to your address.

Notes & troubleshooting
- If you see `MoveAbort` or `Dry run failed` errors, the most common reasons are:
  - The recipe does not match the exact encoded bytes (the smart contract currently requires an exact match).
  - Insufficient gas: the hook sets a gas budget, but you may need to increase it or ensure the relayer/wallet estimates gas correctly.
  - Wallet rejection: the user must approve the transaction in the wallet popup.

- To change the perfect recipe (or allow multiple recipes), edit `kfc_box.move` and update the hex string or implement a recipe registry (recommended for production).

Developer recommendations
- Implement a recipe registry on-chain to avoid rebuilding the contract for recipe changes.
- Use hashed recipe checks instead of raw BCS bytes to keep contract checks compact and obscure exact recipe bytes.
- Add tests in the Move package for positive and negative recipe cases.
- Consider range-based acceptance (tolerances) if you want to accept small variations.

If you want, I can:
- Build the Move package here (if you have the Move toolchain available in this environment).
- Implement a recipe registry in the Move contract instead of a hard-coded hex.
- Add a hex-generation script and UI preset buttons.

Tell me which next step you want me to do and I'll proceed.
