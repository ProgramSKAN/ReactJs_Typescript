import {useState} from 'react'

const GuestList: React.FC=()=>{
  const [name,setName]=useState('');//infered as string
  // const [guests, setGuests] = useState([])//inferred as never, since it not mentioned type of array
  const [guests, setGuests] = useState<string[]>([])

  const onClick=()=>{
    setName('');
    setGuests([...guests,name]);
  }

  return <div>Guest List
    <ul>
      {guests.map(guest=><li key={guest}>{guest}</li>)}
    </ul>

    <input value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={onClick}>Add Guest</button>
  </div>
}

export default GuestList;