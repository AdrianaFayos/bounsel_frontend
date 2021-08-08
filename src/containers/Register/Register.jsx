import React, {useState} from 'react';
import './Register.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = (props) => {

    let history = useHistory();

    // Hook
    const [datosUser,setDatosUser] = useState(
        {
        name:'',
        lastname:'',
        email:'',
        password:'',
        password2: '',
    });

    const [errors, setErrors] = useState({
        eName: '',
        eLastname: '',
        eEmail: '',
        ePhone: '',
        ePassword: '',
        ePassword2: '',
    });

    // Handler
    const updateFormulario = (e) => {
        setDatosUser({...datosUser, [e.target.name]: e.target.value})
    }

    const applyRegister = async () => {

        try {

            let body = {
                name: datosUser.name,
                lastname: datosUser.lastname,
                email : datosUser.email,
                password : datosUser.password,
            }

            if(datosUser.password === datosUser.password2){
                await axios.post('http://localhost:3006/users', body);
                history.push('/login')
            } else {
                setErrors({...errors, eValidate: 'Register could not be completed., please try again.'});
            }

        } catch {
             setErrors({...errors, eValidate: 'Register could not be completed., please try again.'});
        }

    }

    const checkError = (arg) => {
        switch (arg){
            case 'name':
                if ((datosUser.name.length < 2)||(! /^[a-z ,.'-]+$/i.test(datosUser.name))||(datosUser.firstname.length > 20)){
                    setErrors({...errors, eName: 'Please enter a valid name'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;

            case 'lastname':
                if ((datosUser.lastname.length < 2)||(! /^[a-z ,.'-]+$/i.test(datosUser.lastname))||(datosUser.lastname.length > 20)){
                    setErrors({...errors, eLastname: 'Please enter a valid lastname'});
                }else{
                    setErrors({...errors, eLastname: ''});
                }
            break;

            case 'email':
                if (! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(datosUser.email)){
                    setErrors({...errors, eEmail: 'Please enter a valid email'});
                }else{
                    setErrors({...errors, eEmail: ''});
                }
                
            break;

            case 'password':
                if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(datosUser.password)){
                // if (datosUser.password.length < 8){
                    // setErrors({...errors, ePassword: 'At least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters'});
                    setErrors({...errors, ePassword: 'Password must have at least 8 characters'});
                }else{
                    setErrors({...errors, ePassword: ''});
                }
            break;

            case 'password2':
                if (datosUser.password !== datosUser.password2){
                    setErrors({...errors, ePassword2: 'Password should be the same'});
                }else{
                    setErrors({...errors, ePassword2: ''});
                }
            break; 

            default:
                break;
        }
    }

    return (
        <div className="registerContainer">

            <div className="registerBox"> 
            
            <h1>WELCOME TO BOUNSEL</h1>


                <div className="box">
                    <input className="input" placeholder="Name" name="name" type="text" onChange={updateFormulario} onBlur={()=>checkError("name")} />
                    <div className="errorsText1">{errors.eName}</div>
                </div>

                <div className="box">
                    <input className="input" placeholder="Lastname" name="lastname" type="text" onChange={updateFormulario} onBlur={()=>checkError("lastname")} />
                    <div className="errorsText1">{errors.eLastname}</div>
                </div>
            
                <div className="box">
                    <input className="input" placeholder="Email" name="email" type="text" onChange={updateFormulario} onBlur={()=>checkError("email")} />     
                    <div className="errorsText1">{errors.eEmail}</div>
                </div>
                <div className="box">
                    <input placeholder="Password" className="input" name="password" type="password" onChange={updateFormulario} onBlur={()=>checkError("password")}/>
                    {/* <div className="errorsText1">{errors.ePassword}</div> */}
                </div>

                <div className="box">
                    <input placeholder="Confirm Password" className="input" name="password2" type="password" onChange={updateFormulario} onBlur={()=>checkError("password2")}/>
                    <div className="errorsText1">{errors.ePassword2}</div>
                </div>

                <div className="button" onClick={()=>applyRegister()}>SEND</div>
                <div className="errorsText1">{errors.eValidate}</div>
            </div>
        </div>
    )
}

export default Register;