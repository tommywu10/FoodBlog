import React from 'react'
import useSignInForm from '../CustomHooks'

export default function LogInForm(){

    const signIn = () => {
        alert(`${inputs.email} ${inputs.password}`)
    }
    const {inputs, handleInputChange, handleSubmit} = useSignInForm(signIn);

    
    return(
        <div>
            <form onSubmit={handleSubmit} className="log-in-form-container">
                <input 
                    type="text"
                    name="email"
                    onChange={handleInputChange}   
                    value={inputs.email}
                    placeholder="Email"
                />
                <input 
                    type="password"
                    name="password"
                    onChange={handleInputChange}   
                    value={inputs.password}
                    placeholder="Password"/>
                
                <button>Log In</button>
            </form>
        </div>
    )
}