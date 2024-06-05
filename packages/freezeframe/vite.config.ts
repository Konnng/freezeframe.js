import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import { resolve } from 'path'
import { existsSync } from 'fs';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig(() => {

  const { BUILD_ENTRY = 'index' } = process.env || {};

  const name = BUILD_ENTRY !== 'index' ? BUILD_ENTRY : 'freezeframe';
  const entry = resolve(__dirname, `src/${BUILD_ENTRY}.ts`);

  if (!existsSync(entry)) {
    throw new Error('Invalid BUILD_ENTRY');
  }

  return {
    server: {
      open: '/examples/index.html'
    },
    build: {
      emptyOutDir: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true
        }
      },
      lib: {
        name,
        entry,
        fileName: name
      },
    },
    plugins: [
      nodePolyfills(),
      dts({
        insertTypesEntry: true,
        rollupTypes: true,
        exclude: ['node_modules', 'dist']
      }),
    ],
  }
});
