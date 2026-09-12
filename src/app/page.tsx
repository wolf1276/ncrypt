import styles from "./page.module.css";

const networks = [["solana", "Solana"], ["ethereum", "Ethereum"], ["stellar", "Stellar"], ["avalanche", "Avalanche"], ["sui", "Sui"], ["cardano", "Cardano"], ["polygon", "Polygon"]];

function Mark({ name }: { name: string }) {
  return <span className={`${styles.mark} ${styles[name]}`} aria-hidden="true" />;
}

export default function Home() {
  return <main className={styles.page}>
    <div className={styles.scan} aria-hidden="true" />
    <header className={styles.header}><a className={styles.brand} href="#top" aria-label="Ecdat home"><span className={styles.logoMark} role="img" aria-label="Ecdat" /></a></header>
    <section className={styles.hero} id="top" aria-labelledby="headline">
      <h1 id="headline" aria-label="Find it. Understand it. Migrate it.">
        {[175, 365, 550].map((top) => (
          <svg key={top} className={styles.headlineArt} viewBox={`0 ${top} 1743 180`} aria-hidden="true">
            <image href="/headline-transparent-v2.png" width="1743" height="902" />
          </svg>
        ))}
      </h1>
    </section>
    <footer className={styles.networkFooter}><p>Built for the multi-chain world</p><div className={styles.rule} /><div className={styles.ticker} aria-label="Supported blockchain networks"><div className={styles.tickerTrack}>{[...networks, ...networks].map(([name, label], index) => <div className={styles.network} key={`${name}-${index}`}><Mark name={name} /><span>{label}</span><b aria-hidden="true" /></div>)}</div></div></footer>
  </main>;
}
