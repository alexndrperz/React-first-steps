
const Header = ({user}) => {
  return (
    <header className="header">
        <h1>Lista de tareas de {user}</h1>
    </header>
  )
}

Header.defaultProps = {
  'user':'el invitado'
}

// const JSStyles = {
//   color:'red',
//   backgroundColor:'black'
// }
export default Header
