import LoginForm from "../components/LoginForm";
import "../styles/login.css";

function Login() {
    return (
    <div className="login-page">
        <div className="login-left">
            <h1>Fortuna</h1>
            <p>Your smart banking starts here.</p>
        </div>
        <div className="login-right">
            <LoginForm />
        </div>
    </div>
    )
}

export default Login;