import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const fetch = axios.create({
    baseURL: "http://158.160.36.108/api",
});

fetch.interceptors.request.use(
    function (config) {
        config.headers["Accept"] = "application/json";
        config.headers["Content-Type"] = "multipart/form-data";

        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

fetch.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            redirect("/login");
        }

        return Promise.reject(error);
    }
);

export default fetch;
