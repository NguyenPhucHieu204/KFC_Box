import { WalletConnect } from "@/components/Wallet-connect"
import SampleIntegration from "@/components/sample"

export default function Home() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-left">
          <div className="brand">
              <img src="/kfc-logo.png" alt="KFC" className="brand-logo" />
            <span className="brand-name">KFC Box</span>
          </div>
        </div>
        <div className="header-right">
          <WalletConnect />
        </div>
      </header>

      <main className="site-main">
        <SampleIntegration />
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} KFC Box — Fry responsibly 🍗</div>
      </footer>
    </div>
  )
}
