import './LoginPage.css'
import React from 'react'
import { useGlobalContext } from '../context'

export default function LoginPage() {
    const {logName, setLogName,  errorMessage, handleUsernameChange, signOut} = useGlobalContext()
  return (
    // <div>
    //      <h1>GitHub Login</h1>
    //   <form onSubmit={handleFormSubmit}>
    //     <label>
    //       Username:
    //       <input type="name" value={logName} onChange={(e)=>setLogName(e.target.value)} />
    //     </label>
    //     <br />
    //     {/* <label>
    //       Password:
    //       <input type="password" value={password} onChange={handlePasswordChange} />
    //     </label> */}
    //     {/* <br /> */}
    //     <button type="submit" onClick={()=> handleUsernameChange()} >Login</button>
    //       <br /> <br />
    //     <button onClick={() => signOut()}> Sign Out </button>
    //     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    //   </form>
    // </div>

    <div className='Loginpage-bg'>
         <div className="wrapper">
        <div className="login-box">
            <div className="login-header">

                <span> Login</span>
            </div>
            <form action="http://127.0.0.1:5500/project/booklist.html" get="" encType="multipart/form-data"
                >
                <div className="input-box">
                    <input type="text" id="user" value={logName} onChange={(e)=>setLogName(e.target.value)} className="input-field" required />

                    <label htmlFor="user" className="label">Username
                    </label>
                    <i className="bx bx-user icon"></i>
                </div>
                {/* <div className="input-box">
                    <input type="password" id="pass" className="input-field" autocomplete="off" />
                    <label for="pass" className="label">Password</label>
                    <i className="bx bx-lock-alt icon" id="show-password">
                    </i>
                </div> */}
                <div className="remember-forgot">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    {/* <div className="forgot">
                        <a href="#">Forgot password</a>
                    </div> */}
                </div>

                <div className="input-box">
                    <button type="submit" className="input-submit"  onClick={()=> handleUsernameChange()} >Login</button>
                </div>
                <div className="register">
                    <span>Don't have an account?
                        <a href="#">Register</a></span>
                </div>
            </form>
        </div>

    </div>

    
  {/* <!--Social Liks codings below--> */}
  {/* <a id="source-link" className="meta-link" href="https://t.me/codewith_muhilan" target="_blank">
    <i className="fas fa-link"></i>
    <span className="roboto-mono">Join my Telegram</span>
  </a> */}

  {/* <a id="yt-link" className="meta-link" href="https://www.youtube.com/@codewith_muhilan?sub_confirmation=1" target="_blank">
    <i className="fab fa-youtube"></i>
    <span>Subscribe my channel..❤</span>
  </a> */}
    </div>
      )
}
