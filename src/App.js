import React, { useEffect, useState } from 'react';
import LoginContainer from './components/LoginContainer';
import { inicializarFirebase } from './firebase'

function App() {

  const [firebaseInstance, setFirebaseInstance] = useState(null)

  useEffect(() => {
    setFirebaseInstance(inicializarFirebase())
  }, [])

  return (
    <div id="container" className="inner-container">
      {
        firebaseInstance &&
        <LoginContainer firebaseInstance={firebaseInstance}/>
      }
    </div>
  )
}

export default App;
