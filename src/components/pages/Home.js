import React , {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Home = () => {
    const [ users, setUsers] = useState([]);

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser = async () => {
        const result = await axios.get("http://127.0.0.1:8000/users");
        setUsers(result.data.reverse())

    }
    const deleteUser = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/users/${id}`);
        loadUser();
    }
    console.log(users)
    return (
        <div className='container' >
            { users.length!==0 ? <div className="py-4">
                <h1>This is the home page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark ">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => {
                            return(<tr>
                                <th scope="row">{index + 1 }</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/user/${user.id}`} className="btn btn-primary mx-2" >View</Link>
                                    <Link to={`/user/edit/${user.id}`} className="btn btn-outline-primary mx-2" >Edit</Link>
                                    <button  onClick={() => { deleteUser(user.id) }} className="btn btn-danger mx-2" >Delete</button>
                                </td>
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div> : <h1 className='container py-5'>No users available!!!</h1>}
        </div>
    )
}

export default Home
