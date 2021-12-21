interface ChildProps{
  color:string;
  onClick:()=>void;
}

// export const Child=(props:ChildProps)=>{
export const Child=({color,onClick}:ChildProps)=>{ //typescript doesn't know that this is react component.so can't access properties
  return <div>Hi there! {color}
  <button onClick={onClick}>Click me Child</button>
  </div>
}// in parent it is used like <Child color='green' onClick={()=>console.log('clicked')}/> and not
// <Child color='green' onClick={()=>console.log('clicked')}>sfsdfsd</Child> because chileren prop is not there in interface
//React.FC<> has it by default



//OR
// export const ChildFC: React.FunctionComponent<ChildProps>=({color})=>{ //or
export const ChildAsFC: React.FC<ChildProps>=({color,onClick,children})=>{
  return <div>{color}
  <button onClick={onClick}>Click me ChildAsFC</button>
  {children}
  </div>
}
// ChildFC.displayName; //can access propTypes,displayName,defaultProps,contextTypes