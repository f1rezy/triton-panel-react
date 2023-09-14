"use client";

import styles from "./style.module.css";
import Link from "next/link";

export default function ModelCard({ id, name }) {
    return (
        <section className={styles.card}>
            <Link href={`/models/${id}`}>
                <div className={styles.container}>
                    <h2 className={styles.name}>{name}</h2>
                </div>
            </Link>
        </section>
    );
}
