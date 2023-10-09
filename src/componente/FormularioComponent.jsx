import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useEffect } from 'react'
import { useRef } from 'react'

export const FormularioComponent = () => {

    const focusRef = useRef()
    console.log(focusRef)

    const initialForm = {
        userName: ' ',//userName = [name]Username
        email: '',
        password: ''
    }

    
    const {formState,userName,email,password,onInputChange} = useForm(initialForm)//recuepera el formulario ya creado con el useForm y initialForm es lo que le da forma
    //y el formState es el OBJETO ENTERO
    // const {userName,email,password} = formState //desetructura 

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(`User: ${userName} Email: ${email} password ${password}`) //lo pintamos desestructurado
        console.log(formState) // lo pintamos por pantalla el objeto
    }

useEffect(() => {
  focusRef.current.focus() //manera de hacer focus a una label nada mas arrancar

  
}, [])



    return (//html formulario
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    ref={focusRef} 
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input
                    type="email"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your username"
                    value= {userName}
                    onChange={onInputChange}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value= {password}
                    onChange={onInputChange}
                />
            </div>
          
            <button  onClick={onSubmit}type="submit" className="btn btn-primary">Submit</button>
        </form>


    )
}
