import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Login from './pages/login';

function App() {
  

  return (
    <>
      <div>gggggggggggggg</div>
      <BrowserRouter>
        <Switch>

          <Route  path="/" elementt={<Login/>} />
          <Route></Route>
          <Route></Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
