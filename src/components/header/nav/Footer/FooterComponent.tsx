import styles from "./footer.module.css";

export default function FooterComponent() {
  return (
    <div className={styles.footer}>
        <a>Awwwards</a>
        <a>Instagram</a>
        <a>Dribble</a>
        <a>LinkedIn</a>
    </div>
  )
}