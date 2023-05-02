import '../LoginPage/LoginPage.css'

function SignIn() {
    return (<div>
        <input className='loginpage_text' type='text'
               placeholder='Phone number, username or email'/>
        <input className='loginpage_text' type='password' placeholder='Password'/>
        <button className='login_button'>Log In</button>
    </div>)
}

export default SignIn;