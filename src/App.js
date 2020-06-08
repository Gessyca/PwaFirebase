import React, { useEffect, useState } from 'react';
import LoginContainer from './components/LoginContainer';
import { inicializarFirebase } from './firebase'

function App() {

  const [firebaseInstance, setFirebaseInstance] = useState(null)
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  useEffect(() => {
    const firebaseInstanceNova = inicializarFirebase()
    setFirebaseInstance(firebaseInstanceNova)
    setUsuarioLogado(firebaseInstanceNova.auth().currentUser)
  }, [firebaseInstance])

  return (
    <>
      {
        firebaseInstance &&
        <div id="container" className="inner-container">
          <LoginContainer firebaseInstance={firebaseInstance} setUsuarioLogado={setUsuarioLogado} />
        </div>
      }
    </>
  )
}

export default App;
