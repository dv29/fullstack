load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

nodejs_binary(
    name = "service2",
    data = [
        "//src/protos:protos_js",
        "@service2_deps//grpc",
        "@service2_deps//@grpc/proto-loader",
    ],
    entry_point = ":index.js",
)
