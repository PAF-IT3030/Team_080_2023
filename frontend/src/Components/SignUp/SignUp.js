import './SignUp.css'

function SignUp() {
    return (
        <div>
            <input className='loginpage_text' type='text' placeholder='Mobile Number or Email'/>
            <input className='loginpage_text' type='text' placeholder='Full Name'/>
            <input className='loginpage_text' type='text' placeholder='Username'/>
            <input className='loginpage_text' type='password' placeholder='Password'/>
            <button className='login_button'>Sign Up</button>
        </div>
    )
}

export default SignUp;