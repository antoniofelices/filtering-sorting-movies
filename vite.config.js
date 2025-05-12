import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@content': path.resolve(__dirname, './src/content'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@tests': path.resolve(__dirname, './src/__tests__'),
        },
    },
})
