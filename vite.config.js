import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ip_addr from "./src/utilities/constant.js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            //Focus here
            "/api": {
                target: ip_addr,
                changeOrigin: true,
                rewrite: (path) => {
                    // console.log(path);
                    return path.replace("/^/api/", "");
                },
            },
            "/annotate/image": {
                target: ip_addr,
                changeOrigin: true,
                rewrite: (path) => {
                    // console.log(path);
                    return path.replace("/^/annotate/image/", "");
                },
            },
        },
    },
});