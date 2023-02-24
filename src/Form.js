import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import './scss/form.scss';

const Form = () => {

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [password, setPassword] = useState('');
	const [check, setCheck] = useState(true);
	
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [numberDirty, setNumberDirty] = useState(false);
	const [nameDirty, setNameDirty] = useState(false);
	
	
	const [emailError, setEmailError] = useState('Invalid email');
	const [passwordError, setPasswordError] = useState('Invalid password');
	const [numberError, setNumberError] = useState('Invalid number');
	const [nameError, setNameError] = useState('Invalid name');
	const [checkError, setCheckError] = useState(true);
	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (emailError || passwordError || nameError || numberError || checkError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError, nameError, numberError, checkError])


	const emailHandler = (e) => {
		setEmail(e.target.value)
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Invalid email')
			
		} else {
			setEmailError('')
		}
		
	}

	const numberHandler = (e) => {
		setNumber(e.target.value)
		const reg = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
		if (!reg.test(e.target.value)) {
			setNumberError('Invalid number')
			
		} else {
			setNumberError('')
			if (e.target.value.length !== 17) {
				setNumberError('Check your number')
			}
		}

	}

	const nameHandler = (e) => {
		const nameCheck = /^[a-z,.'-]+$/i;
		setName(e.target.value)
		if (!nameCheck.test(String(e.target.value))){
			setNameError('Invalid name')
		} else {
			setNameError('')
			if (e.target.value.length < 4 || e.target.value.length > 10) {
				setNameError('Name must contain a minimum of 4 and a maximum of 10 characters')
			}
		}
	}

	const passwordHandler = (e) => {
		const passCheck = /^[a-z,0-9.'-]+$/i;
		setPassword(e.target.value)
		if (!passCheck.test(String(e.target.value))) {
			setPasswordError('Invalid password')
		} else {
			setPasswordError('')
			if (e.target.value.length < 3 || e.target.value.length > 9) {
				setPasswordError('Password must contain a minimum of 3 and a maximum of 9 characters')
			}
		}
	}

	const checkHandler = (e) => {
		setCheck(!check)
		if (check === true) {
			setCheckError(false)
		} else {
			setCheckError(true)
		}
		
	}

	const blurHandler = (e) => {
		switch (e.target.type) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
			case 'text':
				setNameDirty(true)
				break
			case 'tel':
				setNumberDirty(true)
				break
		}
	}


	return (
		<section className="form-container">
			<h1 className='popup-title'>Sign in</h1>
			<form action="" className='form'>
				
				<input value={name} type="text" placeholder='Name' maxLength={14} onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)} />
				{(nameDirty && nameError) && <div className='name-error'>{ nameError }</div>}
				<input value={password} type="password" placeholder='Password' maxLength={14} onBlur={e => blurHandler(e)} onChange={e => passwordHandler(e)} />
				{(passwordDirty && passwordError) && <div className="password-error">{ passwordError }</div>}
				<ReactInputMask mask="+9 (999) 999 9999" maskChar={null} value={number} type="tel" placeholder='Number' onBlur={e => blurHandler(e)} onChange={e => numberHandler(e)} />
				{(numberDirty && numberError) && <div className="number-error">{ numberError }</div>}
				<input value={email} type="email" placeholder='Email' maxLength={37} onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} />
				{(emailDirty && emailError) && <div className="email-error">{emailError}</div>}
				<label className="container" > I agree with the site policy
					<input type="checkbox" value={check} onClick={e => checkHandler(e)} className='checkbox' />
					<span className="true-checkbox"></span>
				</label>
				<button disabled={!formValid} type="submit">send</button>
			</form>
		</section>
	);
}

export default Form;