load("@dashboard_deps//sass:index.bzl", "sass")
load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")

package(default_visibility = ["//src:__subpackages__"])

sass_binary(
    name = "styles",
    src = "styles.scss",
)

# sass(
#     name = "styles",
#     outs = ["styles.css"],
#     args = [
#         "$(execpath styles.scss)",
#         "$(execpath styles.css)",
#     ],
#     data = ["styles.scss"],
# )

ts_library(
    name = "index",
    srcs = glob([
        "index.tsx",
    ]),
    node_modules = "@dashboard_deps//:node_modules",
    # compiler = "@dashboard_deps//@bazel/typescript/internal/tsc_wrapped:tsc_wrapped --traceResolution",
    tsconfig = "//src/frontend/dashboard:tsconfig",
    visibility = ["//src:__subpackages__"],
    # args = ["--traceResolution"],
    # data = [":styles"],
    deps = [
        "//src/protos:greeter_service_ts_grpc",
        "//src/protos:person_ts_proto",
        "//src/frontend/dashboard:types",
        "@dashboard_deps//@types",
        "@dashboard_deps//grpc-web",
        "@dashboard_deps//react",
    ],
)
