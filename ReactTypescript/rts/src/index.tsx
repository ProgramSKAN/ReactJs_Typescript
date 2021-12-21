import ReactDOM from 'react-dom'
import EventComponent from './events/EventComponent'
import Parent from './props/parent'
import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'
import UserSearch1  from './classes/UserSearch'
import UserSearch2  from './refs/UserSearch'

const App=()=>{
  return (
    <div>
      <h1>Props</h1>
      <Parent/>
      <hr />
      <h1>state</h1>
      <GuestList/>
      <p>----------------</p>
      <UserSearch/>
      <hr />
      <h1>events & refs</h1>
      <EventComponent/>

      <hr />
      <h1>classes</h1>
      <UserSearch1 users={[{name:'jack',age:20}]}/>
      <hr />
      <h1>ref</h1>
      <UserSearch2/>
    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector('#root'))