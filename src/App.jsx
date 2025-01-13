import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Landing from './components/pages/Landing';

function App () {
  const [users, setusers] = useState ([
    {
      username: 'muthu',
      password: 'muthu123',
    },
    {
      username: 'yashu',
      password: 'yashu123',
    },
  ]);

  console.log ('users', users);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setusers={setusers} />}
          />
          <Route
            path="/signup"
            element={<Signup users={users} setusers={setusers} />}
          />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
