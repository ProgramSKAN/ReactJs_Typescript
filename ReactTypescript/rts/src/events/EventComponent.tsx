import React from 'react'

 const EventComponent:React.FC=()=> {

// const onChange=(e)=>{ //error e any. since type inference is only applied inside JSX when you define callback function inline
const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(event.target.value)
  }

  const onDragStart=(event:React.DragEvent<HTMLDivElement>)=>{//copy event type name by hovering on element
    console.log('drag start',event)
  }

 

  return (
    <div>
      {/* <input onChange={e=>console.log(e)}/> */}
      <input onChange={onChange}/>
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  )
}

export default EventComponent;
