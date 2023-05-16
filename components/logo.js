import Link from "next/link";
import styles from 'styles/logo.module.css'

export default function Logo({ boxOn = false }) {
    return (
        <Link href="/">
            <p className={boxOn ? styles.box : styles.basic}>CUBE</p>
        </Link>
    )
}