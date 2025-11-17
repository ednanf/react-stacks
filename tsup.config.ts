import {defineConfig, type Options} from 'tsup';

const config: Options = {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    loader: {
        '.css': 'local-css',
    },
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig(config);
