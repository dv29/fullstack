load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//src:__subpackages__"])

ts_library(
    name = "app",
    srcs = glob([
        "*.tsx",
    ]),
    node_modules = "@dashboard_deps//:node_modules",
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
