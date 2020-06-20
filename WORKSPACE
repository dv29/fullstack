workspace(
    name = "fullstack",
    managed_directories = {
        "@npm": ["node_modules"],
        "@service2_deps": ["src/backend/service2/node_modules"],
        "@dashboard_deps": ["src/frontend/dashboard/node_modules"],
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

# golang
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "b9aa86ec08a292b97ec4591cf578e020b35f98e12173bbd4a921f84f583aebd9",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/rules_go/releases/download/v0.20.2/rules_go-v0.20.2.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.20.2/rules_go-v0.20.2.tar.gz",
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains()
# End  // golang

# C++
git_repository(
    name = "gtest",
    branch = "v1.10.x",
    remote = "https://github.com/google/googletest",
)
# End  // C++

# Protobuf
# http_archive(
#     name = "build_stack_rules_proto",
#     sha256 = "d456a22a6a8d577499440e8408fc64396486291b570963f7b157f775be11823e",
#     strip_prefix = "rules_proto-b2913e6340bcbffb46793045ecac928dcf1b34a5",
#     urls = ["https://github.com/stackb/rules_proto/archive/b2913e6340bcbffb46793045ecac928dcf1b34a5.tar.gz"],
# )

# load("@build_stack_rules_proto//cpp:deps.bzl", "cpp_grpc_compile", "cpp_proto_compile")

# cpp_proto_compile()

# cpp_grpc_compile()

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "rules_proto",
    sha256 = "602e7161d9195e50246177e7c55b2f39950a9cf7366f74ed5f22fd45750cd208",
    strip_prefix = "rules_proto-97d8af4dc474595af3900dd85cb3a29ad28cc313",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
        "https://github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
    ],
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

# End  // Protobuf

# GRPC
http_archive(
    name = "com_github_grpc_grpc",
    sha256 = "bda7b52bab00592c115d5c2757ca729b665ed39cdf048541bf8aab212464c5a0",
    strip_prefix = "grpc-7d89dbb311f049b43bda7bbf6f7d7bf1b4c24419",
    urls = [
        "https://github.com/grpc/grpc/archive/7d89dbb311f049b43bda7bbf6f7d7bf1b4c24419.tar.gz",
    ],
)

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")

grpc_deps()

load("@com_github_grpc_grpc//bazel:grpc_extra_deps.bzl", "grpc_extra_deps")

grpc_extra_deps()
# End  // GRPC

# Javascript
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "84abf7ac4234a70924628baa9a73a5a5cbad944c4358cf9abdb4aab29c9a5b77",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.7.0/rules_nodejs-1.7.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(package_json = [
    "//:package.json",
    "//src/backend/service2:package.json",
    "//src/frontend/dashboard:package.json",
])

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

yarn_install(
    name = "service2_deps",
    package_json = "//src/backend/service2:package.json",
    yarn_lock = "//src/backend/service2:yarn.lock",
)

yarn_install(
    name = "dashboard_deps",
    package_json = "//src/frontend/dashboard:package.json",
    yarn_lock = "//src/frontend/dashboard:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@npm_bazel_labs//:package.bzl", "npm_bazel_labs_dependencies")

npm_bazel_labs_dependencies()
# End  // Javascript
