"use client";

import styles from "./style.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.title} href="/">
                Triton control panel
            </Link>
        </header>
    );
}
