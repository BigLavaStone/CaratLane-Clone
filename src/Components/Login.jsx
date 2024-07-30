import React from 'react';
import { useForm } from 'react-hook-form';
import GoogleIcon from '../assets/google.svg';
import FacebookIcon from '../assets/facebook.svg';
import caratlaneLogo from '../assets/clogo.jpeg';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // Handle login logic here, e.g., sending data to a server
        } catch (error) {
            console.error(error);
        }
    };

    let userCred;

    async function getUserDet(){
        let userDet= await fetch["localhost:8080/userDet"];
        userCred= userDet.data;
    }
    
    getUserDet()

    return (
        <div className="login-container">
            <div className="login-header">
                <img src={caratlaneLogo} alt="CaratLane" className="logo" />
                <h2>Login to CaratLane</h2>
                <p>Access your account and start exploring our exclusive collections and offers.</p>
            </div>
            <div className="social-login">
                <button className="social-btn google-btn" onClick={() => console.log('Google login button clicked')}>
                    <img src={GoogleIcon} alt="Google" />
                    Sign in with Google
                </button>
                <button className="social-btn facebook-btn" onClick={() => console.log('Facebook login button clicked')}>
                    <img src={FacebookIcon} alt="Facebook" />
                    Sign in with Facebook
                </button>
            </div>
            <p className="divider">Or use your email to log in</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>
                <div className="form-footer">
                    <button type="submit" className="submit-btn">LOG IN</button>
                    <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
                </div>
            </form>
            <p className="signup-link">
                Don't have an account? <a href="/signup">Sign up here</a>
            </p>
        </div>
    );
};

export default Login;