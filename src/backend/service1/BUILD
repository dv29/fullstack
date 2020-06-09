load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_proto_library")
load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")

cc_binary(
    name = "service1",
    srcs = ["service1.cc"],
    defines = ["BAZEL_BUILD"],
    # visibility = ["//src:__subpackages__"],
    deps = [
        "//src/protos:greeter_service_cc_grpc",
        "//src/protos:greeter_service_cc_proto",
        "//src/protos:person_cc_proto",
        "@com_github_grpc_grpc//:grpc++",
        "@com_github_grpc_grpc//:grpc++_reflection",
    ],
)
