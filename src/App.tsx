import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Details from './pages/Details'
import ModelProvider from './context/providers/ModelProvider'
import NavProvider from './context/providers/NavProvider'
import DestinationsProvider from './context/providers/DestinationsProviders'
import SharedProvider from './context/providers/SharedProvider'
import Nav from './components/Nav'
import Toggle from './components/Toggle'

function App() {
  return (
    <div className="App">
      <Router>
        <ModelProvider>
          <NavProvider>
            <DestinationsProvider>
              <SharedProvider>
                <Toggle />
                <Nav />
                <HelmetProvider>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/details/:id" exact component={Details} />
                    <Route component={NotFound} />
                  </Switch>
                </HelmetProvider>
              </SharedProvider>
            </DestinationsProvider>
          </NavProvider>
        </ModelProvider>
      </Router>
    </div>
  );
}

export default App;
