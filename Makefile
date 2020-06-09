RM = rm -rf
BAZEL = bazel
GPP = g++
VALGRIND = valgrind
BUILDIFIER = buildifier
BUILD_FILES = $(shell find ./src \
							-path '*/node_modules/*' -prune -type f ! -iname '.*' \
							-or \
							-type f \( -iname BUILD -or -iname BUILD.bazel \) )
PROTO_OUT_DIR = "./src/protos/out/"

build:
	$(BAZEL) build //...

format:
	$(BUILDIFIER) $(BUILD_FILES)
	$(BUILDIFIER) WORKSPACE

clean:
	$(BAZEL) clean --expunge
	${RM} bazel-* dist

purge: clean
	${RM} .build/ `find . -type d -name node_modules` `find . -type f -name yarn-error.log`

build-test:
	rm -rf ./a.out
	$(GPP) -g -Wall -pthread $(FP) -lgtest -lgtest_main -lpthread

ctest: build-test
	./a.out

leak-check: build-test
	$(VALGRIND) ./a.out

test:
	$(BAZEL) test //...

testfp:
	$(BAZEL) test //$(FP)

protos:
	$(BAZEL) build //src/protos/...

protos-m:
	rm -rf $(PROTO_OUT_DIR)
	mkdir -p $(PROTO_OUT_DIR)
	protoc --cpp_out=$(PROTO_OUT_DIR) ./src/protos/*.proto
	mv $(PROTO_OUT_DIR)/src/protos/* $(PROTO_OUT_DIR)
	rm -rf $(PROTO_OUT_DIR)/src

