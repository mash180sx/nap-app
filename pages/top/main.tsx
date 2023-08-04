import styles from "style/styles.module.css";
import { signOut } from "next-auth/react";

export default function TopPage() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerParent}>
          <div className={styles.textTitle}>
            <h1 className={styles.textGradient}> Auth</h1>
          </div>
          <div className={styles.row}>
            <nav className={styles.headerNav}>
              <ul>
                <li className={styles.current}>
                  <a className={styles.link}>Home</a>
                </li>
                <li>
                  <a className={styles.link}>Profile</a>
                </li>
                <li>
                  <a className={styles.link}>About me</a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/login",
                      })
                    }
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={styles.BackgroundPaper}></main>
    </div>
  );
}