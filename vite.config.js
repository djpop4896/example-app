import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/app.js", "resources/css/app.css",
                "resources/js/api.js",
            ],
            refresh: true,
        }),
        tailwindcss(),
        vue(),
    ],
    build: {
        sourcemap: true,  // Ensure source maps are enabled for debugging
    },
});
