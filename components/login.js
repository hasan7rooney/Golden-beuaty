const login = () => {
  return (
    <>
      <div class="login-box">
        <h1>Login</h1>
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
          <button class="btn" > login </button>
        </label>
      </div>
    </>
  );
};

export default login;
