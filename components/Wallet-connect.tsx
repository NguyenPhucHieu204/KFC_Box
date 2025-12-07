"use client"

import { ConnectButton } from "@iota/dapp-kit"

export function WalletConnect() {
  return (
    <div className="wallet-connect" style={{ padding: "1rem", display: "flex", justifyContent: "flex-end" }}>
      <div className="wallet-panel">
        <div className="wallet-brand">
          <img
            src="/kfc-logo.png"
            alt="KFC"
            className="wallet-logo"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              const fallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect fill='%23cc0000' width='100%' height='100%' rx='12'/><text x='50%' y='56%' font-size='34' fill='%23ffffff' font-family='Arial' font-weight='700' text-anchor='middle'>K</text></svg>"
              if (img.src !== fallback) img.src = fallback
            }}
          />
          <div className="wallet-copy">
            <div className="wallet-title">KFC Box</div>
            <div className="wallet-sub">Connect to fry, collect & claim rewards</div>
          </div>
        </div>
        <div className="wallet-cta">
          <ConnectButton />
        </div>
      </div>
    </div>
  )
}

