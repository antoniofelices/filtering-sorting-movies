import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@data': path.resolve(__dirname, './src/data'),
            '@core': path.resolve(__dirname, './src/core'),
            '@tests': path.resolve(__dirname, './src/__tests__'),
        },
    },
})
