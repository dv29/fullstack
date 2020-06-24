import React, { useState, useEffect } from 'react';

import { Person } from 'fullstack/src/protos/person_pb';
import { GreeterPromiseClient } from 'fullstack/src/protos/greeter_service_grpc_web_pb';
import { Greetings } from 'fullstack/src/protos/greeter_service_pb';

const greeterClient = new GreeterPromiseClient('http://localhost:8001', null, null);
const person = new Person();
person.setName('world');
person.setId(24123);

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    greeterClient.sayHello(person).then((greeterRes: Greetings) => {
      setText(greeterRes.getMessage());
    });
  }, []);

  return (
    <div>
      <header>
        {text}
      </header>
    </div>
  );
}

export default App;
