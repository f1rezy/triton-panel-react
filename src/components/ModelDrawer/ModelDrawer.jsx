"use client";

import styles from "./style.module.css";
import fetch from "@/helpers/axios";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Upload } from "antd";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function ModelDrawer() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    function handleClick() {
        fetch
            .postForm(
                "/models",
                { files: inputRef.current.files },
                {
                    formSerializer: { indexes: null },
                }
            )
            .then((response) => {
                toast.success("Успешно");
            })
            .catch((error) => {
                toast.error("aoba");
            });
    }

    return (
        <>
            <input
                type="file"
                ref={inputRef}
                name="files"
                multiple
                webkitdirectory="true"
                directory="true"
            />
            <input onClick={handleClick} type="submit" value="add" />
        </>
    );
}
