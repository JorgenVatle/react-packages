import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.js'],
    outDir: 'dist',
    format: ['esm', 'cjs'],
    external: ['meteor/meteor', 'meteor/mongo', 'meteor/tracker']
})