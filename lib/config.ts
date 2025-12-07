/**
 * Network Configuration
 *
 * Configure your IOTA networks and package IDs here
 */

import { getFullnodeUrl } from '@iota/iota-sdk/client';
import { createNetworkConfig } from '@iota/dapp-kit';

// Package IDs - These will be automatically filled when you run `npm run iota-deploy`
export const DEVNET_PACKAGE_ID =
  '0x9db832e7c6fba2bab1459ebec461e381a5f59f6f39d56eb5d1f852b7aaac768a';
export const TESTNET_PACKAGE_ID =
  '0x1eaf906106e325943a5ed6359783cb0c9c87a2c0daf3624a52d1d17b5352e2c8'; // Cập nhật lại nếu bạn vừa deploy contract mới lên testnet
export const MAINNET_PACKAGE_ID = '';

// Network configuration
const { networkConfig, useNetworkVariable, useNetworkVariables } = createNetworkConfig({
  devnet: {
    url: getFullnodeUrl('devnet'),
    variables: {
      packageId: DEVNET_PACKAGE_ID,
    },
  },
  testnet: {
    url: getFullnodeUrl('testnet'),
    variables: {
      packageId: TESTNET_PACKAGE_ID,
    },
  },
  mainnet: {
    url: getFullnodeUrl('mainnet'),
    variables: {
      packageId: MAINNET_PACKAGE_ID,
    },
  },
});

export { useNetworkVariable, useNetworkVariables, networkConfig };
