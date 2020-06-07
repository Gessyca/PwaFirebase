import React, { useEffect } from 'react';
import LoginContainer from './components/LoginContainer';
import inicializarFirebase from './firebase'

function App() {

  useEffect(() => { inicializarFirebase() })

  return (
    <div id="container" className="inner-container">
      <LoginContainer />
    </div>
  )
}

export default App;
