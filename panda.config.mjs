import {defineConfig} from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: false,
    presets:[],
    // Where to look for your css declarations
    include: ["./libs/**/*.css.ts", "./apps/**/*.css.ts"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: {
                    deepPurple: { value: "#33037c"}
                }
            },
        },
    },

    // The output directory for your css system
    outdir:"./libs/theme/src/lib/styled-system",

    logLevel:"debug",
    importMap: {
        css: "@panda-nx/theme",
        patterns: "@panda-nx/theme",
    }
});
