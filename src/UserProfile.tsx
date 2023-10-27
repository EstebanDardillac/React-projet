import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import UserProfile from './ProfilePage';

function App() {
  return (
    <Router>
        <Route path="/user/:id" Component={UserProfile} />
    </Router>
  );
}

export default App;
