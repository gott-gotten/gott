import {defineConfig} from "vite";
export default defineConfig({
    build: {
        outDir: 'dist',
        target: 'es2020',
        lib: {
            entry: 'src/main.ts',
            formats: ['es', 'cjs']
        }
    }
})