
import Card from './card'
import Counter from './counter'
import Todolist from './todolist'

import Color from './Color'
function App() {
  const users = [
    {id:1 , nom:'kheira',age: 21, isLogged: true},
    { id: 2, nom: 'Bob', age: 30, isLogged: false },
    { id: 3, nom: 'Charlie', age: 35, isLogged: true },
  ]
  

  return (
    <>
    {/* <Counter /> */}
    <Todolist />


    {/* {users.map(user => (<Card key ={user.id} nom={user.nom} age={user.age} isLogged={user.isLogged}/>))} */}
      {/* <Card  nom='kheira' isLogged={true} age={21} />
      <Card  nom='lahcene' age={28} />
      <Card  nom='kheira' age={21} /> */}



    </>
  )
}

export default App
