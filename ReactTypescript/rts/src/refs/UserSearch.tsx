import {useState,useRef,useEffect} from 'react';

const users=[
  {name:'sarah',age:20},
  {name:'alex',age:20},
  {name:'michel',age:20}
]

const UserSearch:React.FC=()=>{
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name:string,age:number} | undefined>();
  const inputRef=useRef<HTMLInputElement|null>(null);//ref

  useEffect(() => {
    if(!inputRef.current){//do this check must, since inputRef could be null error
      return;
    }
    inputRef.current.focus();
  }, [])

  const onClick=()=>{
    const foundUser=users.find(user=>{
      return user.name===name;
    })
    console.log(foundUser);
    setUser(foundUser);
  }

  return <div>User search (sarah,alex,michel)

    <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={onClick}>Find user</button>
    <div>
      {user && user?.name}
    </div>
  </div>
}

export default UserSearch;