#!/bin/bash

echo "🚀 KFC Box - Testnet Deployment Script"
echo "======================================"
echo ""

# Check if IOTA CLI is installed
if ! command -v iota &> /dev/null; then
    echo "❌ IOTA CLI is not installed!"
    echo "Please install it from: https://docs.iota.org/"
    exit 1
fi

echo "📦 Step 1: Building contract..."
cd contract/pizza_box
iota move build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "🌐 Step 2: Switching to testnet..."
iota client switch --env testnet

echo ""
echo "✈️  Step 3: Publishing contract..."
echo ""
echo "⚠️  Please approve the transaction in your wallet!"
echo ""

DEPLOY_OUTPUT=$(iota client publish --path . --gas-budget 500000000)
echo "$DEPLOY_OUTPUT"

# Extract Package ID
PACKAGE_ID=$(echo "$DEPLOY_OUTPUT" | grep -oP 'published package at \K0x[a-f0-9]*' | head -1)

if [ -z "$PACKAGE_ID" ]; then
    echo "❌ Failed to extract Package ID from deployment output!"
    echo "Please check the output above and manually update lib/config.ts"
    exit 1
fi

echo ""
echo "✅ Deployment successful!"
echo ""
echo "📝 Contract Details:"
echo "  Package ID (Contract Address): $PACKAGE_ID"
echo "  Network: Testnet"
echo ""
echo "📋 Next Steps:"
echo "  1. Update TESTNET_PACKAGE_ID in lib/config.ts:"
echo "     export const TESTNET_PACKAGE_ID = \"$PACKAGE_ID\""
echo ""
echo "  2. Update components/Provider.tsx to use testnet:"
echo "     defaultNetwork=\"testnet\""
echo ""
echo "  3. Run: npm run dev"
echo ""
