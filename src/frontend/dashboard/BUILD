load("@dashboard_deps//http-server:index.bzl", "http_server")
load("@dashboard_deps//sass:index.bzl", "sass")
load("@dashboard_deps//webpack-cli:index.bzl", webpack = "webpack_cli")
load("@npm_bazel_typescript//:index.bzl", "ts_project")

sass(
    name = "styles",
    outs = ["src/styles.css"],
    args = [
        "$(execpath //src/frontend/dashboard:src/styles.scss)",
        "$(execpath //src/frontend/dashboard:src/styles.css)",
    ],
    data = ["//src/frontend/dashboard:src/styles.scss"],
)

ts_project(
    srcs = glob([
        "src/**/*.tsx",
    ]),
    tsc = "@dashboard_deps//typescript/bin:tsc",
    deps = [
        "@dashboard_deps//:node_modules",
    ],
)

# webpack(
#     name = "bundle",
#     outs = ["app.bundle.js"],
#     args = [
#         "$(execpath //src/frontend/dashboard/src:index.js)",
#         "--config",
#         "$(execpath webpack.config.js)",
#         "-o",
#         "$@",
#     ],
#     data = [
#         "//src/frontend/dashboard/src:index.js",
#         "//src/frontend/dashboard/src:styles.css",
#         "webpack.config.js",
#         "@dashboard_deps//:node_modules",
#     ],
# )

# Note, on Windows you need `--enable_runfiles`
# http_server(
#     name = "server",
#     data = [
#         "src/app.bundle.js",
#         "src/index.html",
#     ],
#     templated_args = [
#         ".",
#         "-p 8888",
#     ],
# )
