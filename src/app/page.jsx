"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import fetch from "@/helpers/axios";
import Loader from "@/components/Loader/Loader";
import ModelCard from "@/components/ModelCard/ModelCard";
import ModelDrawer from "@/components/ModelDrawer/ModelDrawer";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch
            .get("/models")
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!posts) {
        return <Loader />;
    }

    return (
        <main className={styles.main}>
            <ModelDrawer />
            {posts.map((item, index) => {
                return <ModelCard key={index} id={item.id} name={item.name} />;
            })}
        </main>
    );
}
