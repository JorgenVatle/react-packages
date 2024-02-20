import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.js'],
    outDir: 'dist',
    format: ['esm', 'cjs']
})