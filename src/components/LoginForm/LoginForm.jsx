"use client";

import styles from "./style.module.css";
import fetch from "@/helpers/axios";
import { Input, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const router = useRouter();

    const onSubmit = (data) => {
        fetch
            .post("/login/access-token", {
                username: data.username,
                password: data.password,
            })
            .then((response) => {
                toast.success("Успешно");
                localStorage.setItem(
                    "access_token",
                    response.data.access_token
                );
                router.push("/");
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    toast.error("Неверный логин или пароль");
                }
            });
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Вход в систему</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label className={styles.label}>Логин</label>
                <Controller
                    render={({ field }) => (
                        <Input
                            {...field}
                            className={styles.input}
                            size="large"
                        />
                    )}
                    name="username"
                    control={control}
                    defaultValue=""
                />
                <label className={styles.label}>Пароль</label>
                <Controller
                    render={({ field }) => (
                        <Input.Password
                            {...field}
                            className={styles.input}
                            size="large"
                        />
                    )}
                    name="password"
                    control={control}
                    defaultValue=""
                />
                <Button type="primary" size="large" htmlType="submit">
                    Войти
                </Button>
            </form>
        </div>
    );
}
