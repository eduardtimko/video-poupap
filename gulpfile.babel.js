"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./app/pages/**/*.html",
            ],
            dist: "./dist/",
            watch: [
                "./app/blocks/**/*.html",
                "./app/pages/**/*.html"
            ]
        },
        styles: {
            src: "./app/styles/app.scss",
            dist: "./dist/assets/styles/",
            watch: [
                "./app/blocks/**/*.scss",
                "./app/styles/**/*.scss"
            ]
        },
        scripts: {
            src: "./app/scripts/app.js",
            dist: "./dist/assets/scripts/",
            watch: [
                "./app/blocks/**/*.js",
                "./app/scripts/**/*.js"
            ]
        },
        images: {
            src: [
                "./app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./app/images/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/assets/images/",
            watch: "./app/images/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        sprites: {
            src: "./app/images/svg/*.svg",
            dist: "./dist/images/sprites/",
            watch: "./app/images/svg/*.svg"
        },
        fonts: {
            src: [
                "./app/resources/fonts/**/*",
                "./app/resources/fonts/*"
            ],
            dist: "./dist/fonts/",
            watch: "./app/resources/fonts/**/*"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "styles:lint", "scripts:lint",
    gulp.parallel(["views", "styles", "scripts", "images", "fonts"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean", "styles:lint", "scripts:lint",
    gulp.parallel(["views", "styles", "scripts", "images", "fonts"])); 
    //"favicons"

export default development;
