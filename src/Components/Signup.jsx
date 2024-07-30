import React from 'react';
import { useForm } from 'react-hook-form';
import GoogleIcon from '../assets/google.svg';
import FacebookIcon from '../assets/facebook.svg';
import caratlaneLogo from '../assets/clogo.jpeg';
import whatsappIcon from '../assets/whatsapp-icon.svg';
import './Signup.css';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="signup-container">
            <div className="signup-header">
            <img src={caratlaneLogo} alt="CaratLane" className="logo" />
                <h2>Signup with CaratLane</h2>
                <p>Unlock Best prices and become an insider for our exclusive launches & offers. Complete your profile and get ₹250 worth of xCLusive Points.</p>
            </div>
            <div className="social-login">
                <button className="social-btn google-btn">
                    <img src={GoogleIcon} alt="Google" />
                </button>
                <button className="social-btn facebook-btn">
                    <img src={FacebookIcon} alt="Facebook" />
                </button>
            </div>
            <p className="divider">Or continue with</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-row'>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <div className="phone-input">
                        <select {...register('countryCode')} className="country-code">
                            <option value="+91">IN +91</option>
                        </select>
                        <input type="text" {...register('mobile', { required: true })} placeholder="Mobile Number" />
                    </div>
                    {errors.mobile && <span className="error">This field is required</span>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" {...register('email', { required: true })} placeholder="Enter Email" />
                    {errors.email && <span className="error">This field is required</span>}
                </div>
            </div>
            <div className='form-row'>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" {...register('firstName', { required: true })} placeholder="First Name" />
                    {errors.firstName && <span className="error">This field is required</span>}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" {...register('lastName', { required: true })} placeholder="Last Name" />
                    {errors.lastName && <span className="error">This field is required</span>}
                </div>
            </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div className="gender-options">
                        <label>
                            <input type="radio" value="Male" {...register('gender', { required: true })} />
                            Male
                        </label>
                        <label>
                            <input type="radio" value="Female" {...register('gender', { required: true })} />
                            Female
                        </label>
                        <label>
                            <input type="radio" value="Other" {...register('gender', { required: true })} />
                            Other
                        </label>
                    </div>
                    {errors.gender && <span className="error">This field is required</span>}
                </div>
                <div className="form-group whatsapp">
                <label>
                    <input type="checkbox" {...register('whatsapp')} />
                    <h3>Opt for Whatsapp Support</h3>
                    <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                </label>
                </div>
                <button type="submit" className="submit-btn">SIGN ME UP</button>
            </form>
        </div>
    );
};

export default Signup;
