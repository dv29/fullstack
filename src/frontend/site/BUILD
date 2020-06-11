load("@site_deps//http-server:index.bzl", "http_server")
load("@site_deps//sass:index.bzl", "sass")
load("@site_deps//webpack-cli:index.bzl", webpack = "webpack_cli")
load("@npm_bazel_typescript//:index.bzl", "ts_project")

sass(
    name = "styles",
    outs = ["styles.css"],
    args = [
        "$(execpath styles.scss)",
        "$(execpath styles.css)",
    ],
    data = ["styles.scss"],
)

ts_project(
    tsc = "@site_deps//typescript/bin:tsc",
    deps = [
        "@site_deps//:node_modules",
    ],
)

webpack(
    name = "bundle",
    outs = ["app.bundle.js"],
    args = [
        "$(execpath index.js)",
        "--config",
        "$(execpath webpack.config.js)",
        "-o",
        "$@",
    ],
    data = [
        "index.js",
        "name.js",
        "styles.css",
        "webpack.config.js",
        "@site_deps//:node_modules",
    ],
)

# Note, on Windows you need `--enable_runfiles`
http_server(
    name = "server",
    data = [
        "app.bundle.js",
        "index.html",
    ],
    templated_args = [
        ".",
        "-p 8888",
    ],
)
