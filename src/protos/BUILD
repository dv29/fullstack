load("@rules_cc//cc:defs.bzl", "cc_proto_library")
load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")
load("@rules_proto//proto:defs.bzl", "proto_library")
load("@npm_bazel_labs//:index.bzl", "ts_proto_library")

filegroup(
    name = "protos_js",
    srcs = glob(["*.proto"]),
    visibility = ["//src:__subpackages__"],
)

# Person
proto_library(
    name = "person_proto",
    srcs = ["person.proto"],
    visibility = ["//src:__subpackages__"],
)

cc_proto_library(
    name = "person_cc_proto",
    visibility = ["//src:__subpackages__"],
    deps = [":person_proto"],
)

ts_proto_library(
    name = "person_ts_proto",
    proto = ":person_proto",
    visibility = ["//src:__subpackages__"],
)
# End  // Person

# Greeter Service
proto_library(
    name = "greeter_service_proto",
    srcs = ["greeter_service.proto"],
    visibility = ["//src:__subpackages__"],
    deps = [":person_proto"],
)

cc_proto_library(
    name = "greeter_service_cc_proto",
    visibility = ["//src:__subpackages__"],
    deps = [":greeter_service_proto"],
)

cc_grpc_library(
    name = "greeter_service_cc_grpc",
    srcs = [":greeter_service_proto"],
    grpc_only = True,
    visibility = ["//src:__subpackages__"],
    deps = [
        ":greeter_service_cc_proto",
        ":person_cc_proto",
    ],
)

ts_proto_library(
    name = "greeter_service_ts_grpc",
    proto = ":greeter_service_proto",
    visibility = ["//src:__subpackages__"],
)
# End  // Greeter Service
