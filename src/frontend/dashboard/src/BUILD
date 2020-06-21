load("@npm_bazel_typescript//:index.bzl", "ts_library")
# load("@dashboard_deps//@bazel/typescript:index.bzl", "ts_library")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")

package(default_visibility = ["//src:__subpackages__"])

sass_binary(
    name = "styles",
    src = "styles.scss",
)

ts_library(
    name = "index",
    srcs = glob([
        "index.tsx",
    ]),
    node_modules = "@dashboard_deps//:node_modules",
    # compiler = "@dashboard_deps//typescript/bin:tsc",
    tsconfig = "//src/frontend/dashboard:tsconfig",
    visibility = ["//src:__subpackages__"],
    deps = [
        "//src/frontend/dashboard:types",
        "//src/protos:greeter_service_ts_grpc",
        "//src/protos:person_ts_proto",
        "@dashboard_deps//@types",
        "@dashboard_deps//google-protobuf",
        "@dashboard_deps//grpc-web",
        "@dashboard_deps//react",
        "@dashboard_deps//react-dom",
    ],
)
