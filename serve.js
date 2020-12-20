/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
    server: "web/",
    files: ["web/*.html", "web/css/*.css"],
    open: false,
});
