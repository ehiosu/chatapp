import { useRef } from 'react';
import React from 'react';
import {signup}  from '../firebase/init';
// import { Auth as auth } from '@firebase/auth'
function Login()
 {
    const emailref = useRef();
    const passwordref = useRef();



async function createaccount(){
try{
    await signup(emailref.current.value,passwordref.current.value)
}catch{
    alert("error")
}
}



    return (
        <div>
            <div className="row">
                <div className="col-lg-4 card mx-auto mt-5 shadow">
                    <div className="form-group px-5 py-5">
                        <h2 className="lead text-center fs-2">Create Account</h2>
                        <form className="form-group ">
                          <div className="row row-cols-1 my-4">
                                <input type="email" className="form-control" placeholder="abc@xyz.com" ref={emailref}></input>
                          </div>
                           <div className="row row-cols-1 my-4 ">
                                <input type="password" placeholder="Password" className="form-control"aria-describedby="passwordHelpBlock"ref={passwordref} ></input>
                                <div id="passwordHelpBlock" class="form-text">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </div>
                          </div>
                           <div className="row row-cols-1 my-4 ">
                                <input type="password" placeholder="Password" className="form-control"aria-describedby="passwordHelpBlock2" ></input>
                                <div id="passwordHelpBlock2" class="form-text text-start">
                                   Confirm Password.
                                </div>
                          </div>
                          
                            <div class="d-grid gap-2 row row-cols-1">
                                <button class="btn btn-light" type="button" onClick={createaccount}>Login</button>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    )
}


// function signin(){
//     firebase.auth().create
// }

export default Login
