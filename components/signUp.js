import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SignUp = () => {
    return (
      <>
        <div class="login-box">
          <h1>Sign Up</h1>
          <div class="textbox">
            <i class="fas fa-user"></i>
            <label>
              <input type="text" name="name"   placeholder="username"/> 
            </label>
          </div>
          <div class="textbox">
            <i class="fas fa-lock"></i>
            <label>
              <input type="password"  placeholder="password" />
            </label>
          </div>
  
          <label>
            {/* <input type="button" class="btn" value="Sign in" /> */}
            <button class="btn" > Activate Lasers </button>
          </label>
        </div>
      </>
    );
  };
  
  export default login;
  