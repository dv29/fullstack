import * as React from "react";
import * as ReactDOM from "react-dom";
import * as grpcWeb from 'grpc-web';
import * as styles from "./styles.css";
import { Person } from "../../../protos/person_pb";
import { GreeterPromiseClient } from "../../../protos/greeter_service_grpc_web_pb";

const el: HTMLDivElement = document.createElement('div');
el.innerText = "hello world";
el.id = 'root';
document.body.appendChild(el);

console.log('asdfsd');
// const greeterClient = new GreeterPromiseClient('http://localhost:8080', null, null);

// console.log(greeterClient);

// ReactDOM.render(
//   // <h1 className={styles.h1}>Hello, world!!</h1>,
//   <h1>Hello, world!!</h1>,
//   document.getElementById("root")
// );
