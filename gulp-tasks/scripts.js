"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';
import gulpif from "gulp-if";
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import yargs from "yargs";

const jsFiles = [
	'app/blocks/**/*.js',
	'app/scripts/common/**/*.js',
	'app/scripts/app.js',
];
const argv = yargs.argv,
    production = !!argv.production;
const keepDebug = true;
const uglifyParams = {mangle: false, compress: {hoist_funs: true, hoist_vars: false, drop_debugger: !keepDebug}};


gulp.task("scripts", () => {
    return gulp.src(jsFiles)
		.pipe(gulpif(!production, sourcemaps.init({loadMaps: true})))
		.pipe(concat('scripts.js'))
        .pipe(babel())
		.pipe(gulpif(production, uglify(uglifyParams)))
		.pipe(gulpif(!production, sourcemaps.write('.')))
		.pipe(gulp.dest(paths.scripts.dist))
        .pipe(debug({
            "title": "JS files"
        }))
        .pipe(browsersync.stream());
});

gulp.task('scripts:lint', () => {
	return	gulp.src(jsFiles)
			.pipe(eslint({ configFile: '.eslintrc'}))
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
});