import {Child, ChildAsFC} from './child';

const Parent=()=>{
  return <>
  <Child color='green' onClick={()=>console.log('clicked Child')}/>

  <ChildAsFC  color='green' onClick={()=>console.log('clicked ChildAsFC')}>text from parent childAsFC</ChildAsFC>
  </>
}

export default Parent;