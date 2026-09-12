import styles from "./page.module.css";

const networks = [["solana", "Solana"], ["ethereum", "Ethereum"], ["stellar", "Stellar"], ["avalanche", "Avalanche"], ["sui", "Sui"], ["cardano", "Cardano"], ["polygon", "Polygon"]];

function Mark({ name }: { name: string }) {
  return <span className={`${styles.mark} ${styles[name]}`} aria-hidden="true" />;
}

export default function Home() {
  return <main className={styles.page}>
    <div className={styles.scan} aria-hidden="true" />
    <header className={styles.header}><a className={styles.brand} href="#top" aria-label="Ecdat home"><img src="/ecdat-logo.png" alt="Ecdat" /></a></header>
    <section className={styles.hero} id="top" aria-labelledby="headline"><h1 id="headline"><span>Find it</span><span>Understand it</span><span>Migrate it</span></h1></section>
    <footer className={styles.networkFooter}><p>Built for the multi-chain world</p><div className={styles.rule} /><div className={styles.ticker} aria-label="Supported blockchain networks"><div className={styles.tickerTrack}>{[...networks, ...networks].map(([name, label], index) => <div className={styles.network} key={`${name}-${index}`}><Mark name={name} /><span>{label}</span><b aria-hidden="true" /></div>)}</div></div></footer>
  </main>;
}
