import './sign-in.scss';
import React from 'react';
const SignIn = () => {
    return (
        <div>
<div className='date'>
18:00:00 22/12/2022
</div>
            <form className="signin">
                <title>Welcome back</title>
                <p className="signin-title">Welcome back! Please enter your details</p>
                <div className="input-container">
                    <div className='title'> Email</div>
                    <input type="email" placeholder="Enter your email" />
                    <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <div className="input-container">
                <div className='title'> Password</div>
                    <input type="password" placeholder="*******" />
                    <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <div className='forget-container'>
                    <div class="checkbox-container">
                        <label class="checkbox">
                            <input type="checkbox" id="checkbox" />
                        </label>
                        <label for="checkbox" class="checkbox-text">Remember for 30 Days</label>

                    </div>
                    <a className="forget" href=" ">Forget password ?</a>


                </div>
                <button type="submit" className="submit">
                    Sign in
                </button>

                {/* <p className="signin-link">
                    No account?
                    <a href=" ">Sign up</a>
                </p> */}
            </form>

        </div>
    )


}
export default SignIn;
