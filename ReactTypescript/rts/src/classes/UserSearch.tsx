import { Component } from "react";

interface User{
  name:string;
  age:number;
}

interface UserSearchProps{
users:User[]
}

interface UserSearchState{
  name:string;
  user:User|undefined
}

class Usersearch1 extends Component<UserSearchProps>{
  state:UserSearchState={
    name:'',
    user:undefined
  }

  onClick=()=>{
    const foundUser=this.props.users.find(user=>{
      return user.name===this.state.name;
    })
    console.log(foundUser);
    this.setState({user:foundUser});
  }

  render() {
      //this.props.users
    // this.state.name

    const {name,user}=this.state;
    return(
      <div>User search (sarah,alex,michel)

      <input value={name} onChange={e=>this.setState({name:e.target.value})}/>
      <button onClick={this.onClick}>Find user</button>
      <div>
        {user && user?.name}
      </div>
    </div>
    )
  }
}

export default Usersearch1;