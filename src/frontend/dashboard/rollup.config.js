const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');

module.exports = {
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.ENVOY_GRPC_PORT': process.env.ENVOY_GRPC_PORT,
    }),
  ],
};
