// // App.js
// import React, { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = (userData) => {
//     setUser(userData);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     // Clear user session information, e.g., localStorage.removeItem('user');
//   };

//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup" component={Signup} />
//         <Route path="/login" component={Login} />
//         <Route path="/dashboard" component={Dashboard} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

