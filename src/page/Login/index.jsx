import './login.css'

function Login() {

  return (
    <div className="wrapper">
      <div className="section-login">
        <form action="">
          <div className='bg-img'>
            <a href="/"><img src="src/assets/images/logo.png" alt="imgLogo" />
            </a>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="btn-forgot">
            <div className="remember-forgot">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a className="btn-forgot" href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn-login">Login</button>
          <div className="sign-up">

            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login