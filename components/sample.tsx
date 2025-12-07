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
import copy from "copy-to-clipboard";
import { showToast } from "@/lib/toast";

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

  const applyPreset = () => {
    setIngredients({
      chickenKg: "1",
      garlicG: "10",
      milkMl: "300",
      saltG: "15",
      pepperG: "5",
      flourG: "200",
      cornstarchG: "100",
      eggs: "2",
    });
  };

  const copyId = (id?: string) => {
    if (!id) return;
    try {
      copy(id);
      showToast("Copied to clipboard");
    } catch (e) {
      console.error(e);
      showToast("Copy failed");
    }
  };

  const handleClaimReward = () => {
    const confirmed = window.confirm(
      "🍗 Ready to claim your reward?\n\nYou have successfully completed the challenge!"
    );
    if (confirmed) {
      actions.getFlag();
    }
  };

  const safe = (v: any) => {
    if (v === undefined || v === null) return "-";
    if (typeof v === "number") return Number.isFinite(v) ? String(v) : "-";
    if (typeof v === "string") {
      // guard against numeric strings that may be empty
      if (v.trim() === "") return "-";
      return v;
    }
    try {
      return String(v);
    } catch {
      return "-";
    }
  };

  if (!isConnected) {
    return (
      <div className="app-container" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <div className="hero" style={{ textAlign: "left" }}>
          <h1>🍗 KFC Chicken dApp</h1>
          <p>Welcome! Connect your wallet to start frying, collecting and claiming rewards.</p>
          <div style={{ marginTop: "1rem" }}>
            <button className="primary-btn" onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>Get Started</button>
            <button className="secondary-btn" style={{ marginLeft: "0.6rem" }} onClick={() => showToast('Connect to see recipes')}>Why connect?</button>
          </div>
        </div>

        <div className="card" style={{ marginTop: '1.25rem' }}>
          <div className="card-header">
            <span style={{ fontSize: '1.6rem' }}>✨</span>
            <h2>How it works</h2>
          </div>
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div className="feature-card card">
              <h3>Fry</h3>
              <p className="muted">Create recipes and fry chicken on-chain.</p>
            </div>
            <div className="feature-card card">
              <h3>Collect</h3>
              <p className="muted">Store ChickenBoxes as proof of your creations.</p>
            </div>
            <div className="feature-card card">
              <h3>Claim</h3>
              <p className="muted">Complete challenges to earn rewards and flags.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="hero">
        <h1>🍗 KFC Challenge</h1>
        <p>Master the perfect fried chicken recipe and claim your reward!</p>
      </div>

      <Container style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Reward Status Section */}
        {flagId && (
          <div className="card status-reward">
            <div className="card-header">
              <span style={{ fontSize: "2rem" }}>🎖️</span>
              <h2>Reward Claimed</h2>
            </div>
            <Text style={{ color: "#fcd34d", marginBottom: "1rem", fontSize: "1.1rem" }}>
              🔥 You're a KFC Legend! You've successfully completed the perfect recipe challenge!
            </Text>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "8px", borderLeft: "3px solid #ffc600" }}>
              <Text size="1" style={{ color: "#a0a0a0", marginBottom: "0.5rem" }}>
                Reward ID:
              </Text>
              <Text size="2" className="kv">
                {flagId}
              </Text>
            </div>
          </div>
        )}

        {/* Chicken Box Status */}
        {chickenBoxId && data && (
          <div className="card">
            <div className="card-header">
              <span style={{ fontSize: "2rem" }}>📦</span>
              <h2>Your Creation</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🐔 Chicken</span>
                <Text>{safe(data.chickenKg)} kg</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🧄 Garlic</span>
                <Text>{safe(data.garlicG)} g</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🥛 Milk</span>
                <Text>{safe(data.milkMl)} ml</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🧂 Salt</span>
                <Text>{safe(data.saltG)} g</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🌶️ Pepper</span>
                <Text>{safe(data.pepperG)} g</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🍞 Flour</span>
                <Text>{safe(data.flourG)} g</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🥔 Cornstarch</span>
                <Text>{safe(data.cornstarchG)} g</Text>
              </div>
              <div className="form-group">
                <span style={{ color: "#ffc600" }}>🥚 Eggs</span>
                <Text>{safe(data.eggs)}</Text>
              </div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "8px", marginTop: "1rem", marginBottom: "1rem", borderLeft: "3px solid #ffc600" }}>
              <Text size="1" style={{ color: "#a0a0a0" }}>
                ChickenBox ID: <span className="kv">{chickenBoxId}</span>
              </Text>
            </div>
            {!flagId && (
              <Button
                size="3"
                className="primary-btn"
                onClick={handleClaimReward}
                disabled={state.isLoading || state.isPending}
              >
                {state.isLoading || state.isPending ? (
                  <>
                    <ClipLoader size={14} style={{ marginRight: "8px" }} />
                    Processing...
                  </>
                ) : (
                  "🎁 Claim Reward"
                )}
              </Button>
            )}
          </div>
        )}

        {/* Fry Chicken Form */}
        <div className="card">
          <div className="card-header">
            <span style={{ fontSize: "2rem" }}>👨‍🍳</span>
            <h2>Craft Your Recipe</h2>
          </div>

          <div style={{ marginBottom: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button className="secondary-btn" onClick={applyPreset}>⚡ Use Perfect Recipe</button>
            {chickenBoxId && (
              <button className="secondary-btn" onClick={() => copyId(chickenBoxId)}>📋 Copy ChickenBox ID</button>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>🐔 Chicken (kg)</label>
              <TextField.Root
                value={ingredients.chickenKg}
                onChange={(e) => handleIngredientChange("chickenKg", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🧄 Garlic (g)</label>
              <TextField.Root
                value={ingredients.garlicG}
                onChange={(e) => handleIngredientChange("garlicG", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🥛 Milk (ml)</label>
              <TextField.Root
                value={ingredients.milkMl}
                onChange={(e) => handleIngredientChange("milkMl", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🧂 Salt (g)</label>
              <TextField.Root
                value={ingredients.saltG}
                onChange={(e) => handleIngredientChange("saltG", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🌶️ Pepper (g)</label>
              <TextField.Root
                value={ingredients.pepperG}
                onChange={(e) => handleIngredientChange("pepperG", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🍞 Flour (g)</label>
              <TextField.Root
                value={ingredients.flourG}
                onChange={(e) => handleIngredientChange("flourG", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🥔 Cornstarch (g)</label>
              <TextField.Root
                value={ingredients.cornstarchG}
                onChange={(e) => handleIngredientChange("cornstarchG", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
            <div className="form-group">
              <label>🥚 Eggs</label>
              <TextField.Root
                value={ingredients.eggs}
                onChange={(e) => handleIngredientChange("eggs", e.target.value)}
                type="number"
                min="0"
                max="65535"
              />
            </div>
          </div>

          <Button
            size="3"
            className="primary-btn"
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
          <div className="card status-success">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>✅</span>
              <Text style={{ fontSize: "1.1rem", fontWeight: "600" }}>Transaction Confirmed</Text>
            </div>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: "1rem", borderRadius: "8px", borderLeft: "3px solid #22c55e" }}>
              <Text size="1" style={{ color: "#a0a0a0", marginBottom: "0.5rem" }}>
                Transaction Hash:
              </Text>
              <Text size="2" className="kv">
                {state.hash}
              </Text>
            </div>
          </div>
        )}

        {/* Error Display */}
        {state.error && (
          <div className="card status-error">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>⚠️</span>
              <Text style={{ fontSize: "1.1rem", fontWeight: "600", color: "#ef4444" }}>Oops! Something went wrong</Text>
            </div>
            <Text style={{ color: "#fca5a5", marginBottom: "0.75rem" }}>
              {(state.error as Error)?.message || String(state.error)}
            </Text>
            {(state.error as Error)?.message?.includes("Rejected from user") && (
              <Text size="1" style={{ color: "#fca5a5", fontStyle: "italic" }}>
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
