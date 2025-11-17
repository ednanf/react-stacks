import {defineConfig, type Options} from 'tsup';

const config: Options = {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    loader: {
        '.css': 'css',
    },
    injectStyle: true,
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig(config);
