"use client";

/**
 * ============================================================================
 * IOTA CONTRACT INTEGRATION HOOK
 * ============================================================================
 *
 * This hook contains ALL the contract interaction logic.
 *
 * To customize your dApp, modify the configuration section below.
 *
 * ============================================================================
 */

import { useState } from "react";
import {
  useCurrentAccount,
  useIotaClient,
  useSignAndExecuteTransaction,
  useIotaClientQuery,
} from "@iota/dapp-kit";
import { Transaction } from "@iota/iota-sdk/transactions";
import { useNetworkVariable } from "@/lib/config";
import type { IotaObjectData } from "@iota/iota-sdk/client";

// ============================================================================
// CONTRACT CONFIGURATION
// ============================================================================
// Change these values to match your Move contract

export const CONTRACT_MODULE = "kfc"; // New Move module name (kfc_box::kfc)
export const CONTRACT_METHODS = {
  FRY: "fry",
  GET_FLAG: "get_flag",
} as const;

// ============================================================================
// DATA EXTRACTION
// ============================================================================
// Modify this to extract data from your contract's object structure

interface ChickenData {
  chickenKg: number;
  garlicG: number;
  milkMl: number;
  saltG: number;
  pepperG: number;
  flourG: number;
  cornstarchG: number;
  eggs: number;
}

function getChickenBoxFields(data: IotaObjectData): ChickenData | null {
  if (data.content?.dataType !== "moveObject") {
    console.log("Data is not a moveObject:", data.content?.dataType);
    return null;
  }

  const fields = data.content.fields as Record<string, unknown>;
  if (!fields || !fields.chicken) {
    console.log("No chicken fields found in object data");
    return null;
  }

  // Log the actual structure for debugging
  console.log("ChickenBox fields structure:", JSON.stringify(fields, null, 2));

  const chicken = fields.chicken as Record<string, unknown>;

  try {
    return {
      chickenKg: parseInt(String(chicken.chicken_kg), 10),
      garlicG: parseInt(String(chicken.garlic_g), 10),
      milkMl: parseInt(String(chicken.milk_ml), 10),
      saltG: parseInt(String(chicken.salt_g), 10),
      pepperG: parseInt(String(chicken.pepper_g), 10),
      flourG: parseInt(String(chicken.flour_g), 10),
      cornstarchG: parseInt(String(chicken.cornstarch_g), 10),
      eggs: parseInt(String(chicken.eggs), 10),
    };
  } catch (error) {
    console.error("Error parsing chicken fields:", error);
    return null;
  }
}

// ============================================================================
// MAIN HOOK
// ============================================================================

export interface ContractData {
  chickenKg: number;
  garlicG: number;
  milkMl: number;
  saltG: number;
  pepperG: number;
  flourG: number;
  cornstarchG: number;
  eggs: number;
}

export interface ContractState {
  isLoading: boolean;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  hash: string | undefined;
  error: Error | null;
}

export interface ContractActions {
  fryChicken: (
    chickenKg: number,
    garlicG: number,
    milkMl: number,
    saltG: number,
    pepperG: number,
    flourG: number,
    cornstarchG: number,
    eggs: number
  ) => Promise<void>;
  getFlag: () => Promise<void>;
  clearObject: () => void;
}

export const useContract = () => {
  const currentAccount = useCurrentAccount();
  const address = currentAccount?.address;
  const packageId = useNetworkVariable("packageId");
  const iotaClient = useIotaClient();
  const { mutate: signAndExecute, isPending } = useSignAndExecuteTransaction();
  const [chickenBoxId, setChickenBoxId] = useState<string | null>(() => {
    if (typeof window !== "undefined" && currentAccount?.address) {
      return localStorage.getItem(`chickenBoxId_${currentAccount.address}`);
    }
    return null;
  });
  const [flagId, setFlagId] = useState<string | null>(() => {
    if (typeof window !== "undefined" && currentAccount?.address) {
      return localStorage.getItem(`flagId_${currentAccount.address}`);
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hash, setHash] = useState<string | undefined>();
  const [transactionError, setTransactionError] = useState<Error | null>(null);

  // Fetch chicken box data
  const {
    data,
    isPending: isFetching,
    error: queryError,
    refetch,
  } = useIotaClientQuery(
    "getObject",
    {
      id: chickenBoxId!,
      options: { showContent: true, showOwner: true },
    },
    {
      enabled: !!chickenBoxId,
    }
  );

  // Extract fields
  const fields = data?.data ? getChickenBoxFields(data.data) : null;

  // Check if object exists but data extraction failed
  const objectExists = !!data?.data;
  const hasValidData = !!fields;

  // Fry Chicken
  const fryChicken = async (
    chickenKg: number,
    garlicG: number,
    milkMl: number,
    saltG: number,
    pepperG: number,
    flourG: number,
    cornstarchG: number,
    eggs: number
  ) => {
    if (!packageId) return;

    try {
      setTransactionError(null);
      setHash(undefined);
      const tx = new Transaction();
      tx.moveCall({
        arguments: [
          tx.pure.u16(chickenKg),
          tx.pure.u16(garlicG),
          tx.pure.u16(milkMl),
          tx.pure.u16(saltG),
          tx.pure.u16(pepperG),
          tx.pure.u16(flourG),
          tx.pure.u16(cornstarchG),
          tx.pure.u16(eggs),
        ],
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.FRY}`,
      });
      tx.setGasBudget(5000000);

      signAndExecute(
        { transaction: tx as never },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest);
            setIsLoading(true);
            try {
              const { effects } = await iotaClient.waitForTransaction({
                digest,
                options: { showEffects: true },
              });
              const newChickenBoxId = effects?.created?.[0]?.reference?.objectId;
              if (newChickenBoxId) {
                setChickenBoxId(newChickenBoxId);
                if (typeof window !== "undefined" && address) {
                  localStorage.setItem(`chickenBoxId_${address}`, newChickenBoxId);
                }
                await refetch();
                setIsLoading(false);
              } else {
                setIsLoading(false);
                console.warn("No chicken box ID found in transaction effects");
              }
            } catch (waitError) {
              console.error("Error waiting for transaction:", waitError);
              setIsLoading(false);
            }
          },
          onError: (err) => {
            let errorMessage = String(err);
            if (err instanceof Error) {
              errorMessage = err.message;
            }
            // Handle common wallet rejection messages
            if (errorMessage.includes("Rejected from user")) {
              errorMessage = "Transaction rejected by user. Please approve in your wallet.";
            } else if (errorMessage.includes("InsufficientGas")) {
              errorMessage = "Insufficient gas. Please add more gas and try again.";
            }
            const error = new Error(errorMessage);
            setTransactionError(error);
            console.error("Error:", err);
          },
        }
      );
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setTransactionError(error);
      console.error("Error frying chicken:", err);
    }
  };

  // Get Flag
  const getFlag = async () => {
    if (!chickenBoxId || !packageId) return;

    try {
      setTransactionError(null);
      setHash(undefined);
      const tx = new Transaction();
      tx.moveCall({
        arguments: [tx.object(chickenBoxId)],
        target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.GET_FLAG}`,
      });
      tx.setGasBudget(5000000);

      signAndExecute(
        { transaction: tx as never },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest);
            setIsLoading(true);
            try {
              const { effects } = await iotaClient.waitForTransaction({
                digest,
                options: { showEffects: true },
              });
              // Try to locate the created Flag object robustly across effects
              let newFlagId: string | undefined;
              const created = effects?.created ?? [];
              if (created.length > 0) {
                for (const c of created) {
                  const objId = c?.reference?.objectId;
                  // Try to detect Flag by type string if available
                  const maybeType = (c as any)?.reference?.type || (c as any)?.type || "";
                  if (objId && String(maybeType).toLowerCase().includes("flag")) {
                    newFlagId = objId;
                    break;
                  }
                }
                // Fallback to the first created object if none matched the name
                if (!newFlagId && created[0]?.reference?.objectId) {
                  newFlagId = created[0].reference.objectId;
                }
              }

              // If still not found, check mutated objects (some transfers may appear there)
              if (!newFlagId && effects?.mutated?.length) {
                for (const m of effects.mutated) {
                  const objId = m?.reference?.objectId;
                  const maybeType = (m as any)?.reference?.type || (m as any)?.type || "";
                  if (objId && String(maybeType).toLowerCase().includes("flag")) {
                    newFlagId = objId;
                    break;
                  }
                }
              }

              if (newFlagId) {
                setFlagId(newFlagId);
                if (typeof window !== "undefined" && address) {
                  localStorage.setItem(`flagId_${address}`, newFlagId);
                }
                setIsLoading(false);
              } else {
                setIsLoading(false);
                console.warn("No flag ID found in transaction effects", effects);
              }
            } catch (waitError) {
              console.error("Error waiting for transaction:", waitError);
              setIsLoading(false);
            }
          },
          onError: (err) => {
            setIsLoading(false);
            let errorMessage = String(err);
            if (err instanceof Error) {
              errorMessage = err.message;
            }
            // Handle common wallet rejection messages
            if (errorMessage.includes("Rejected from user")) {
              errorMessage = "Transaction rejected by user. Please approve in your wallet.";
            } else if (errorMessage.includes("InsufficientGas")) {
              errorMessage = "Insufficient gas. Please add more gas and try again.";
            }
            const error = new Error(errorMessage);
            setTransactionError(error);
            console.error("Error:", err);
          },
        }
      );
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setTransactionError(error);
      console.error("Error getting flag:", err);
    }
  };

  const contractData: ContractData | null = fields;

  const clearObject = () => {
    setChickenBoxId(null);
    setFlagId(null);
    setTransactionError(null);
    if (typeof window !== "undefined" && address) {
      localStorage.removeItem(`chickenBoxId_${address}`);
      localStorage.removeItem(`flagId_${address}`);
    }
  };

  const actions: ContractActions = {
    fryChicken,
    getFlag,
    clearObject,
  };

  const contractState: ContractState = {
    isLoading: isLoading,
    isPending,
    isConfirming: false,
    isConfirmed: !!hash && !isLoading && !isPending,
    hash,
    error: queryError || transactionError,
  };

  return {
    data: contractData,
    actions,
    state: contractState,
    chickenBoxId,
    flagId,
    objectExists,
    hasValidData,
    isFetching,
  };
};
