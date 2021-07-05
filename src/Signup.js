import React,{ useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import './Signup.css'
import { auth } from './Firebase'
import { useDispatch } from 'react-redux'


function Signup() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (event) =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push('/')
        })
        .catch(err => alert(err.message))
    }

    const register = (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            // it successfully created user
            if(auth){
                history.push("/")
            }
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="signup">
            <Link to='/home'>
                <img
                    className="signup__logo"
                    src='https://cdn.worldvectorlogo.com/logos/swiggy-1.svg' 
                />
            </Link>

            <div className='signup__container'>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='signup__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the SWIGGY FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='signup__registerButton'>Create your Swiggy Account</button>
            </div>
        </div>
    )
}

export default Signup
