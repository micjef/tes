import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import Obfuscator from "rollup-plugin-javascript-obfuscator";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	resolve: {
		alias: {
			"src/": path.resolve(__dirname, "./src"),
			"components/": path.resolve(__dirname, "./src/components/*"),
			"dao/": path.resolve(__dirname, "./src/dao/*"),
			"store/": path.resolve(__dirname, "./src/store/*"),
			Assets: path.resolve(__dirname, "./src/assets"),
		},
	},
	plugins: [react(), tsconfigPaths()],
	build: {
		target: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
		outDir: "dist",
		assetsDir: "assets",
		cssCodeSplit: true,
		sourcemap: false, // Disable sourcemaps to further protect your code
		rollupOptions: {
			output: {
				entryFileNames: "[name]-[hash].js",
				chunkFileNames: "[name]-[hash].js",
				assetFileNames: "[name]-[hash].[ext]",
			},
			manualChunks(id) {
				if (id.includes("node_modules")) {
					// Split libraries by package name
					const packageNameMatch = id.match(/[/\\]node_modules[/\\](.*?)([/\\]|$)/);
					if (packageNameMatch) {
						const packageName = packageNameMatch[1].replace("@", "");
						return `npm.${packageName}`;
					}
				}
			},
			plugins: [
				Obfuscator({
					// You can pass options to javascript-obfuscator here
					// For example, if you want to enable the controlFlowFlattening option:
					controlFlowFlattening: true,
				}),
			],
		},
	},
});
