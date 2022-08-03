import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AddResource from './components/AddResource'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/add-resource" component={AddResource} />
  </Switch>
)

export default App
