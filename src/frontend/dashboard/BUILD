load("@dashboard_deps//http-server:index.bzl", "http_server")
load("@dashboard_deps//sass:index.bzl", "sass")
load("@dashboard_deps//webpack-cli:index.bzl", webpack = "webpack_cli")
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
    deps = [
        "@dashboard_deps//@types",
        "@dashboard_deps//csstype",
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
        "styles.css",
        "name.js",
        "webpack.config.js",
        "@dashboard_deps//:node_modules",
    ],
)

# Note, on Windows you need `--enable_runfiles`
http_server(
    name = "server",
    data = [
        "app.bundle.js",
        "index.html",
    ],
    templated_args = [".", "-p 8888"],
)
