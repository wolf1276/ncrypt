import Image from "next/image";
import styles from "./page.module.css";

const networks = [
  { name: "solana", label: "Solana", asset: "/chains/solana.svg" },
  { name: "stellar", label: "Stellar", asset: "/chains/stellar.png" },
  { name: "avalanche", label: "Avalanche", asset: "/chains/avalanche.svg" },
  { name: "sui", label: "Sui", asset: "/chains/sui.svg" },
  { name: "cardano", label: "Cardano", asset: "/chains/cardano.svg" },
  { name: "bitcoin", label: "Bitcoin", asset: "/chains/bitcoin.png" },
  { name: "polkadot", label: "Polkadot", asset: "/chains/polkadot.svg" },
  { name: "arbitrum", label: "Arbitrum", asset: "/chains/arbitrum.svg" },
  { name: "optimism", label: "Optimism", asset: "/chains/optimism.svg" },
];

export default function Home() {
  return <main className={styles.page}>
    <div className={styles.scan} aria-hidden="true" />
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Ecdat home"><span className={styles.logoMark} role="img" aria-label="Ecdat" /></a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.earlyAccess} href="#early-access">Get early access <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <section className={styles.hero} id="top" aria-labelledby="headline">
      <h1 id="headline" aria-label="Find it. Understand it. Migrate it.">
        {[175, 365, 550].map((top) => (
          <svg key={top} className={styles.headlineArt} viewBox={`0 ${top} 1743 180`} aria-hidden="true">
            <image href="/headline-transparent-v2.png" width="1743" height="902" />
          </svg>
        ))}
      </h1>
    </section>
    <footer className={styles.networkFooter}>
      <p>TRUSTED BY ECOSYSTEM</p>
      <div className={styles.rule} />
      <div className={styles.ticker} aria-label="Blockchain networks">
        <div className={styles.tickerTrack}>
          {[0, 1].map((copyIndex) => (
            <div className={styles.tickerGroup} aria-hidden={copyIndex === 1 ? true : undefined} key={copyIndex}>
              {networks.map(({ name, label, asset }) => (
                <div className={styles.network} data-chain={name} key={`${name}-${copyIndex}`}>
                  <span className={styles.logoFrame}>
                    <Image
                      className={styles.chainLogo}
                      src={asset}
                      alt={copyIndex === 0 ? `${label} logo` : ""}
                      width={30}
                      height={30}
                      loading="eager"
                      unoptimized
                      draggable={false}
                    />
                  </span>
                  <span>{label}</span>
                  <b aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  </main>;
}
