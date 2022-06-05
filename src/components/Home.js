import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../states/actions/userActions'
import List from './List'

function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    const { loading, error, users } = useSelector(state => state.userList)
    return (
        <>
            {loading ? <div className='container d-flex justify-content-center'><h4>loading...</h4></div> :
                <div className='container d-flex justify-content-center bg-warning my-3'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {users.map((user) =>
                            <List key={user.id} user={user}></List>
                        )}
                    </table>
                </div>
            }
        </>
    )
}

export default Home