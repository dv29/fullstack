load("@dashboard_deps//http-server:index.bzl", "http_server")
load("@dashboard_deps//webpack-cli:index.bzl", webpack = "webpack_cli")
load("@npm_bazel_typescript//:index.bzl", "ts_config", "ts_devserver", "ts_library", "ts_project")
load("@npm_bazel_labs//:index.bzl", "ts_proto_library")
load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")

package(default_visibility = ["//src:__subpackages__"])

ts_library(
    name = "types",
    srcs = glob([
        "*.ts",
        "*.tsx",
    ]),
    node_modules = "@dashboard_deps//:node_modules",
    tsconfig = "//src/frontend/dashboard:tsconfig",
    visibility = ["//src:__subpackages__"],
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//src:__subpackages__"],
    deps = [":tsconfig.json"],
)

# ts_devserver(
#     name = "devserver",
#     additional_root_paths = ["public"],
#     # entry_module = "src/frontend/dashboard/src/index",
#     port = 8081,
#     scripts = [":webpack_bundle", "@npm_bazel_labs//grpc_web:bootstrap_scripts"],
#     static_files = [":public", "//src/frontend/dashboard/src:styles"],
#     # index_html = "public/index.html",
#     # visibility = ["//src:__subpackages__"],
#     # serving_path = "/public/",
#     deps = [
#         ":types",
#         "//src/frontend/dashboard/src:index",
#         "@dashboard_deps//@types",
#         "@dashboard_deps//grpc-web",
#         "@dashboard_deps//google-protobuf",
#         "@dashboard_deps//react",
#         "@dashboard_deps//react-dom",
#     ],
# )

# rollup_bundle(
#     name = "bundle",
#     config_file = "rollup.config.js",
#     # output_dir = True,
#     entry_point = "//src/frontend/dashboard/src:index.tsx",
#     rollup_bin = "@dashboard_deps//rollup/bin:rollup",
#     # args = ["--output.dir","public"] ,
#     format = "cjs",
#     deps = [
#         "//src/frontend/dashboard/src:index",
#         "@dashboard_deps//@types",
#         "@dashboard_deps//grpc-web",
#         "@dashboard_deps//:node_modules",
#         # "@dashboard_deps//react",
#         # "@dashboard_deps//react-dom",
#         "@dashboard_deps//rollup-plugin-commonjs",
#         "@dashboard_deps//rollup-plugin-node-resolve",
#     ],
# )

# ts_project(
#     srcs = glob([
#         "*.ts",
#         "src/**/*.tsx",
#     ]),
#     args = ["--traceResolution"],
#     tsc = "@dashboard_deps//typescript/bin:tsc",
#     tsconfig = ":tsconfig",
#     deps = [
#         "//src/protos:greeter_service_ts_grpc",
#         "//src/protos:person_ts_proto",
#         "@dashboard_deps//:node_modules",
#         "//src/frontend/dashboard/src:index",
#         "//src/frontend/dashboard/src:styles",
#     ],
# )

webpack(
    name = "webpack_bundle",
    outs = ["public/app.bundle.js"],
    args = [
        "$(execpath //src/frontend/dashboard/src:index)",
        "--config",
        "$(execpath webpack.config.js)",
        "-o",
        "$@",
    ],
    data = [
        "webpack.config.js",
        ":types",
        "//src/frontend/dashboard/src:index",
        "//src/frontend/dashboard/src:styles",
        "@dashboard_deps//:node_modules",
    ],
)

# Note, on Windows you need `--enable_runfiles`
http_server(
    name = "devserver",
    data = [
        "public/app.bundle.js",
        "public/index.html",
    ],
    templated_args = [
        "./src/frontend/dashboard/public",
        "-p 8888",
    ],
)
