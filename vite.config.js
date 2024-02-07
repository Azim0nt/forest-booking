import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	plugins: [
		react(),
		ViteImageOptimizer({
			jpeg: {
				quality: 90,
			},
			jpg: {
				quality: 90,
			},
			png: {
				quality: 90,
			},
		}),
	],
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				index: 'index.html',
			},
		},
	},
})
