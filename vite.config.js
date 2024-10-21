import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        lib: {
            entry: 'resources/js/app.js',  // Specify your entry point
            name: 'MyLibrary',
            fileName: (format) => `my-library.${format}.js`
        },
        rollupOptions: {
            // Externalize dependencies you don’t want bundled into the library
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
