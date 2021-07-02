import Homepage from './pages/homepage/Homepage';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import './css/App.css'


const ShoePage = () => {
  return(
    <div>
      <h1>I am the Shoes page</h1>
    </div>
  )
}

const Mens = () => {
  return(
    <div>
      <h1>I am the Mens page</h1>
    </div>
  )
}

const Womens = () => {
  return(
    <div>
      <h1>I am the womens page</h1>
    </div>
  )
}

const NutJob = (props) => {
  console.log(props);
  return (
    <div>
      <h1>iM THE NUTJOB</h1>
    </div>
  )
}
const Topic = (props) => {
  console.log(props);
  return (
    <div>
      <h1>iM THE topics</h1>
      

      <button onClick={() => props.history.push('/')}>Take me Home Couuntry Road</button>
      <br />
      <Link to = {`${props.match.path}/13`}>Take me to Article 13</Link>
      <Link to = {`${props.match.path}/14`}>Take me to Article 14</Link>
      <Link to = {`${props.match.path}/15`}>Take me to Article 15</Link>
      <Link to = {`${props.match.path}/16`}>Take me to Article 16</Link>
    </div>
  )
}
const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>iM THE topics page with topic id {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
return (
<Router>
  <div>
      <Route exact path='/' component={ Homepage } />
      <Route exact path='/nutjob' component={ NutJob } />
      <Route exact path='/blog/sadasda/topic' component={ Topic } />
      <Route path='/blog/sadasda/topic/:topicId' component={ TopicDetail } />
      <Route path='/mens' component={ Mens } />
      <Route path='/womens' component={ Womens } />

    {/*
    <Homepage /> */}
  </div>
</Router>

);
}

export default App;