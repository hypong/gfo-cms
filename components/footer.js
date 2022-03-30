import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a rel="noopener noreferrer">Back to the home page</a>
      </Link>
    </footer>
  )
}
