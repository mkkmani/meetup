import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import NotFound from './components/NotFound'
import Context from './context/Context'
import './App.css'

class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE', // Set the default topic
    isRegistered: false,
    showErr: false,
  }

  onEnterName = name => {
    this.setState({name})
  }

  onSelectTopic = topic => {
    this.setState({topic})
  }

  onClickRegisterNow = () => {
    const {name} = this.state
    if (name === '') {
      this.setState({showErr: true})
    } else {
      this.setState({isRegistered: true})
    }
  }

  render() {
    const {name, topic, isRegistered, showErr} = this.state

    return (
      <Context.Provider
        value={{
          name,
          topic,
          isRegistered,
          showErr,
          onClickRegisterNow: this.onClickRegisterNow,
          onEnterName: this.onEnterName,
          onSelectTopic: this.onSelectTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
