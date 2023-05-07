import {useState} from "react"
import './LoginPage.css'
import Grid from '@mui/material/Grid'
import foodies_image from '../../images/Foodie.svg';
import foodies_logo from '../../images/foodies.png';
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'
import SignIn from "../SignIN/SignIn";
import SignUp from "../SignUp/SignUp";

function LoginPage() {

    let [isLogin, setIsLogin] = useState(true);


    const changeLogin = () => {
        setIsLogin(
            isLogin ? isLogin = false : isLogin = true
        )
    }

    return (<div>
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className='loginpage_main'>
                    <div>
                        <img src={foodies_image} height="500" width='500px'/>
                    </div>
                    <div>
                        <div className='loginpage_rightcomponent'>
                            <img src={foodies_logo} className='loginpage-logo'/>
                            <div className='loginpage_signin'>

                                {isLogin ? <SignIn/> : <SignUp/>}

                                <div className='login_ordiv'>
                                    <div className='login_devider'></div>
                                    <div className='login_or'>OR</div>
                                    <div className='login_devider'></div>
                                </div>

                                <div className='login_fb'>
                                    <img src={fb} width='15px'/> Login with Facebook
                                </div>
                                <div className='login_forgot'>Forgot password?</div>
                            </div>
                        </div>

                        <div className='loginpage_signupoption'>

                            {isLogin ? <div className='loginpage_sigin'>Don't have an account?
                                <span onClick={changeLogin}
                                      style={{
                                          fontWeight: 'bold', color: '#0395F6'
                                      }}> Sign up</span>
                            </div> : <div className='loginpage_signup'>Have an account?
                                <span onClick={changeLogin}
                                      style={{
                                          fontWeight: 'bold', color: '#0395F6'
                                      }}> Sign in</span>
                            </div>}

                        </div>

                        <div className='loginPage_downloadSection'>
                            <div>Get the app</div>
                            <div className='loginpage_option'>
                                <img className='loginpage_dwidmg' src={appstore} width='136px'/>
                                <img className='loginpage_dwidmg' src={playstore} width='136px'/>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    </div>)
}

export default LoginPage;