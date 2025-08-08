function LoginForm() {
  return (
    <form className="login-form">
      <h2>Sign In</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        required
      />

      <button type="submit">Log In</button>

      <p className="register-link">
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </form>
  );
}

export default LoginForm;