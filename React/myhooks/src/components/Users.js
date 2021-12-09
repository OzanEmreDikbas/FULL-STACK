import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Users = () => {
  const [users, setUsers] = useState([])
  // const getUsers = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((json) => setUsers(json))
  //     .catch((err) => console.log(err))
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err))
  // }
  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => console.log(err))
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])
  console.log(users)
  return (
    <div className="users">
      <h2>Users</h2>
      {/* <button onClick={getUsers}>Get Users</button> */}
      <div className="users-cards">
        {users.map((user) => (
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Users