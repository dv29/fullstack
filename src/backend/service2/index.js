const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const GREETER_SERVICE_PROTO_PATH = path
  .join(__dirname, '../../protos/greeter_service.proto')
  .toString();

const packageDefinition = protoLoader.loadSync(GREETER_SERVICE_PROTO_PATH, {
  defaults: true,
  includeDirs: [path.join(__dirname, '../../..').toString()],
});

const GreeterService = grpc.loadPackageDefinition(packageDefinition)
  .greeterservice;

function main() {
  const client = new GreeterService.Greeter(
    `service1:${process.env.SERVICE_1_PORT}`,
    grpc.credentials.createInsecure(),
  );
  let user;
  if (process.argv.length >= 3) {
    [, , user] = process.argv;
  } else {
    user = 'world';
  }

  client.sayHello({ name: user }, (err, response) => {
    if (err) {
      console.log(require('util').inspect({ err }, { depth: null, colors: true }));
      console.error('Server Down');
    }
    if (response) {
      console.log('Greeting:', response.message);
    }
  });
}

main();
