import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userEdit, userGet } from '../states/actions/userActions'

function EditUser() {
    const navigate = useNavigate()
    const { id } = useParams()
    const user_id = id
    const dispatch = useDispatch()

    const { user, loading, error } = useSelector(state => state.userInfo)
    const [inputForm, setinputForm] = useState({
        name: "",
        email: "",
        gender: "",
        status: ""
    })

    const inputChg = (e) => {
        setinputForm({
            ...inputForm, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        dispatch(userEdit(user_id, inputForm))
        navigate('/home')
    }
    useEffect(() => {
        dispatch(userGet(user_id))
    }, [])
    useEffect(() => {
        if (user) {
            setinputForm({
                name: user.name,
                email: user.email,
                gender: user.gender,
                status: user.status
            })
        }
    }, [user])

    return (
        <>
            {loading ? <div className='container d-flex justify-content-center'><h4>loading...</h4></div> :
                <div className='container d-flex justify-content-center bg-light  my-3 '>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="f_name">Name</label>
                            <input value={inputForm.name} onChange={inputChg} type="text" className="form-control" id="name" name="name" placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input value={inputForm.email} onChange={inputChg} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input value="male" checked={user.gender === "male" && "checked"} onChange={inputChg} type="radio" id="male" name="gender" className="custom-control-input" />
                            <label className="custom-control-label mx-3" htmlFor="male">Male</label>
                            <input value="female" checked={user.gender === "female" && "checked"} onChange={inputChg} type="radio" id="female" name="gender" className="custom-control-input" />
                            <label className="custom-control-label mx-3" htmlFor="female">Female</label>
                        </div>
                        <button type="submit" className="btn btn-primary my-2">Edit user</button>
                    </form>
                </div>
            }
        </>
    )
}
export default EditUser