import { useEffect, useState } from 'react'
import User from './User'
import './UserList.css'

const RegularUser = ({ item }) => (
    <div className="user" style={{border: "2px solid gray"}}>
        <div className="username">{item.username}</div>
        <div className="fullname">{item.fullName}</div>
    </div>
);

const PowerUser = ({ item }) => (
    <div className="user" style={{border: "3px solid gold"}}>
        <div className="username" style={{fontWeight: "bold"}}>{item.username}</div>
        <div className="fullname">{item.fullName}</div>
    </div>
);

const SERVER = 'http://localhost:8080'

function UserList (props) {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    console.warn(data)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className='user-list'>
      <h2>Power Users</h2>
      {
        users.filter(u => u.type === "power-user").map(e => <PowerUser key={e.id} item={e} />)
      }
    </div>
    <div className='user-list'>
      <h2>Regular Users</h2>
      {
        users.filter(u => u.type === "regular-user").map(e => <RegularUser key={e.id} item={e} />)
      }
    </div>
    </div>
  )
}

export default UserList
