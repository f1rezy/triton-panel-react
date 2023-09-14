import styles from "./style.module.css";
import { Spin } from "antd";

export default function Loader() {
    return (
        <Spin tip="Loading" size="large">
            <div className={styles.content} />
        </Spin>
    );
}
