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
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
			png: {
				quality: 80,
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
