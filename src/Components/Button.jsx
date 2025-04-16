const Button = ({callback,color,children}) => {
  return (
    <button onClick={callback} style={{backgroundColor: color, marginTop:12}}>{children}</button>
  )
}

export default Button