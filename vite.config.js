import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ip_addr from "./src/utilities/constant.js";

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        proxy: {
            "/api": {
                target: 'https://admin.manjeetpandey.com.np',
                changeOrigin: true,
            },
            "/annotate/image": {
                target: 'https://admin.manjeetpandey.com.np',
                changeOrigin: true,
            },

        }
    },
}, )