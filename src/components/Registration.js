import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../states/actions/userActions'

function Registration() {
    const dispatch = useDispatch()
    const [inputForm, setinputForm] = useState({
        name: "",
        email: "",
        gender: "",
        status: "active"
    })
    const inputChg = (e) => {
        setinputForm({
            ...inputForm, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(inputForm))
    }

    return (
        <>
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
                        <input value="male" onChange={inputChg} type="radio" id="male" name="gender" className="custom-control-input" />
                        <label className="custom-control-label mx-3" htmlFor="male">Male</label>
                        <input value="female" onChange={inputChg} type="radio" id="female" name="gender" className="custom-control-input" />
                        <label className="custom-control-label mx-3" htmlFor="female">Female</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Add user</button>
                </form>
            </div>
        </>
    )
}

export default Registration