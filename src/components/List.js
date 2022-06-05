import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userDelete } from '../states/actions/userActions'

function List(props) {
    const dispatch = useDispatch()
    const { id, name, gender, email, status } = props.user
    const handleUserDelete = (e) => {
        if (window.confirm(`Are you sure you want to delete user ${name} `))
            dispatch(userDelete(id))
    }
    return (
        <>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{status}</td>
                    <td>
                        <Link to={`/edit-user/${id}`}>
                            <button className='btn btn-primary'>Edit</button>
                        </Link>
                        <button className='btn btn-danger' onClick={handleUserDelete}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default List