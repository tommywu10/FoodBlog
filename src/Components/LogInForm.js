import React from 'react'
import useSignInForm from '../CustomHooks'

export default function LogInForm(){

    const signIn = () => {
        alert(`${inputs.email} ${inputs.password}`)
    }
    const {inputs, handleInputChange, handleSubmit} = useSignInForm(signIn);

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for="email"> Email
                    <input 
                        type="text"
                        name="email"
                        onChange={handleInputChange}   
                        value={inputs.email}
                    />
                </label>
                <label for="password"> Password
                    <input 
                        type="password"
                        name="password"
                        onChange={handleInputChange}   
                        value={inputs.password}/>
                </label>
                <button>Log In</button>
            </form>
        </div>
    )
}