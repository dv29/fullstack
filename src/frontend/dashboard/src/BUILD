load("@dashboard_deps//sass:index.bzl", "sass")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//src:__subpackages__"])

sass(
    name = "styles",
    outs = ["styles.css"],
    args = [
        "$(execpath styles.scss)",
        "$(execpath styles.css)",
    ],
    data = ["styles.scss"],
)

ts_library(
    name = "index",
    srcs = [
        "index.tsx",
    ],
    node_modules = "@dashboard_deps//:node_modules",
    # compiler = "@dashboard_deps//@bazel/typescript/internal/tsc_wrapped:tsc_wrapped --traceResolution",
    tsconfig = "//src/frontend/dashboard:tsconfig",
    visibility = ["//src:__subpackages__"],
    # args = ["--traceResolution"],
    # data = [":styles"],
    deps = [
        "@dashboard_deps//react",
        "@dashboard_deps//@types",
        "@dashboard_deps//grpc-web",
        "//src/protos:greeter_service_ts_grpc",
        "//src/protos:person_ts_proto",
    ],
)
