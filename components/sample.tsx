"use client";

/**
 * ============================================================================
 * KFC CHICKEN DAPP INTEGRATION COMPONENT
 * ============================================================================
 *
 * This component allows users to fry KFC chicken and get flags when they
 * fry the perfect chicken with the right ingredients.
 *
 * All the contract logic is in hooks/useContract.ts
 *
 * ============================================================================
 */

import { useCurrentAccount } from "@iota/dapp-kit";
import { useContract } from "@/hooks/useContract";
import { Button, Container, Heading, Text, TextField } from "@radix-ui/themes";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const SampleIntegration = () => {
  const currentAccount = useCurrentAccount();
  const { data, actions, state, chickenBoxId, flagId } = useContract();

  const [ingredients, setIngredients] = useState({
    chickenKg: "1",
    garlicG: "10",
    milkMl: "300",
    saltG: "15",
    pepperG: "5",
    flourG: "200",
    cornstarchG: "100",
    eggs: "2",
  });

  const isConnected = !!currentAccount;

  const handleIngredientChange = (field: string, value: string) => {
    setIngredients((prev) => ({ ...prev, [field]: value }));
  };

  if (!isConnected) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <Heading size="6" style={{ marginBottom: "1rem" }}>
            🍗 KFC Chicken dApp
          </Heading>
          <Text>Please connect your wallet to fry chicken!</Text>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "1rem",
        background: "var(--gray-a2)",
      }}
    >
      <Container style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Heading size="6" style={{ marginBottom: "2rem" }}>
          🍗 KFC Fried Chicken dApp
        </Heading>

        {/* Flag Status */}
        {flagId && (
          <div
            style={{
              marginBottom: "1rem",
              padding: "1.5rem",
              background: "var(--green-a3)",
              borderRadius: "8px",
              border: "2px solid var(--green-7)",
            }}
          >
              <Heading size="4" style={{ marginBottom: "0.5rem" }}>
              🎉 Congratulations! Flag Captured!
            </Heading>
            <Text
              style={{
                color: "var(--green-11)",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              You&apos;ve fried the perfect KFC chicken and earned your flag!
            </Text>
            <Text
              size="1"
              style={{
                color: "var(--gray-a11)",
                display: "block",
                fontFamily: "monospace",
                wordBreak: "break-all",
              }}
            >
              Flag ID: {flagId}
            </Text>
          </div>
        )}

        {/* Chicken Box Status */}
        {chickenBoxId && data && (
          <div
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              background: "var(--gray-a3)",
              borderRadius: "8px",
            }}
          >
              <Text
              size="2"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Your Chicken Box 📦
            </Text>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Text size="2">Chicken (kg): {data.chickenKg}</Text>
              <Text size="2">Garlic (g): {data.garlicG}</Text>
              <Text size="2">Milk (ml): {data.milkMl}</Text>
              <Text size="2">Salt (g): {data.saltG}</Text>
              <Text size="2">Pepper (g): {data.pepperG}</Text>
              <Text size="2">Flour (g): {data.flourG}</Text>
              <Text size="2">Cornstarch (g): {data.cornstarchG}</Text>
              <Text size="2">Eggs: {data.eggs}</Text>
            </div>
              <Text
              size="1"
              style={{
                color: "var(--gray-a11)",
                display: "block",
                fontFamily: "monospace",
                wordBreak: "break-all",
              }}
            >
              ChickenBox ID: {chickenBoxId}
            </Text>

            {!flagId && (
              <Button
                size="2"
                style={{ marginTop: "1rem" }}
                onClick={actions.getFlag}
                disabled={state.isLoading || state.isPending}
              >
                {state.isLoading || state.isPending ? (
                  <>
                    <ClipLoader size={14} style={{ marginRight: "8px" }} />
                    Checking...
                  </>
                ) : (
                  "🚩 Get Flag"
                )}
              </Button>
            )}
          </div>
        )}

        {/* Fry Chicken Form */}
        <div
          style={{
            padding: "1.5rem",
            background: "var(--gray-a3)",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <Heading size="4" style={{ marginBottom: "1rem" }}>
              Fry KFC Chicken 👨‍🍳
            </Heading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Chicken (kg)
              </Text>
              <TextField.Root
                value={ingredients.chickenKg}
                onChange={(e) =>
                  handleIngredientChange("chickenKg", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Garlic (g)
              </Text>
              <TextField.Root
                value={ingredients.garlicG}
                onChange={(e) =>
                  handleIngredientChange("garlicG", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Milk (ml)
              </Text>
              <TextField.Root
                value={ingredients.milkMl}
                onChange={(e) =>
                  handleIngredientChange("milkMl", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Salt (g)
              </Text>
              <TextField.Root
                value={ingredients.saltG}
                onChange={(e) =>
                  handleIngredientChange("saltG", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Pepper (g)
              </Text>
              <TextField.Root
                value={ingredients.pepperG}
                onChange={(e) =>
                  handleIngredientChange("pepperG", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Flour (g)
              </Text>
              <TextField.Root
                value={ingredients.flourG}
                onChange={(e) =>
                  handleIngredientChange("flourG", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Cornstarch (g)
              </Text>
              <TextField.Root
                value={ingredients.cornstarchG}
                onChange={(e) =>
                  handleIngredientChange("cornstarchG", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div>
              <Text
                size="2"
                style={{ display: "block", marginBottom: "0.3rem" }}
              >
                Eggs
              </Text>
              <TextField.Root
                value={ingredients.eggs}
                onChange={(e) =>
                  handleIngredientChange("eggs", e.target.value)
                }
                type="number"
                min="0"
                max="65535"
              />
            </div>
          </div>

          <Button
            size="3"
            onClick={() =>
              actions.fryChicken(
                parseInt(ingredients.chickenKg),
                parseInt(ingredients.garlicG),
                parseInt(ingredients.milkMl),
                parseInt(ingredients.saltG),
                parseInt(ingredients.pepperG),
                parseInt(ingredients.flourG),
                parseInt(ingredients.cornstarchG),
                parseInt(ingredients.eggs)
              )
            }
            disabled={state.isPending || state.isLoading}
          >
            {state.isLoading ? (
              <>
                <ClipLoader size={16} style={{ marginRight: "8px" }} />
                Frying...
              </>
            ) : (
              "🍗 Fry KFC Chicken"
            )}
          </Button>
        </div>

        {/* Transaction Status */}
        {state.hash && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "var(--gray-a3)",
              borderRadius: "8px",
            }}
          >
            <Text size="1" style={{ display: "block", marginBottom: "0.5rem" }}>
              Transaction Hash
            </Text>
            <Text
              size="2"
              style={{ fontFamily: "monospace", wordBreak: "break-all" }}
            >
              {state.hash}
            </Text>
            {state.isConfirmed && (
              <Text
                size="2"
                style={{
                  color: "green",
                  marginTop: "0.5rem",
                  display: "block",
                }}
              >
                ✅ Transaction confirmed!
              </Text>
            )}
          </div>
        )}

        {/* Error Display */}
        {state.error && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "var(--red-a3)",
              borderRadius: "8px",
              border: "1px solid var(--red-7)",
            }}
          >
            <Heading size="3" style={{ color: "var(--red-11)", marginBottom: "0.5rem" }}>
              ⚠️ Transaction Error
            </Heading>
            <Text style={{ color: "var(--red-11)" }}>
              {(state.error as Error)?.message || String(state.error)}
            </Text>
            {(state.error as Error)?.message?.includes("Rejected from user") && (
              <Text size="1" style={{ color: "var(--red-10)", marginTop: "0.5rem", display: "block" }}>
                💡 Please approve the transaction in your wallet popup
              </Text>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default SampleIntegration;
