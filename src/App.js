import { Routes, Route } from 'react-router-dom';

import Navigation from '../src/routes/navigation/navigation.component';
import Home from '../src/routes/home/home.component';
import EndGame from '../src/components/end-game/end-game.components';
import SignUp from '../src/routes/sign-up/sign-up.component';
import SignIn from '../src/routes/sign-in/sign-in.component';
import { RequireAuth } from '../src/hoc/requireAuth';
import { RequireLevel } from '../src/hoc/requireLevel';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='home' element={
            <RequireAuth>
              <RequireLevel>
                <Home />
              </RequireLevel>
            </RequireAuth>
          }/>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='end' element={<EndGame />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



