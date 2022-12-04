import React, {useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";


export const AuthPage = () => {
	const message = useMessage()
	const {loading, request, error, clearError} = useHttp()
	const [form, setForm] = useState({
		email: "", password: ""
	})

	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])

	const changeHandler = event => {
		setForm({...form, [event.target.name]: event.target.value})
	}

	const registerHandler = async () => {
		try {
			const data = await request("/api/auth/register", "POST", {...form})
			message(data.message)
			console.log("data", data)
		} catch (e) {}
	}

	const loginHandler = async () => {
		try {
			const data = await request("/api/auth/login", "POST", {...form})
			message(data.message)
			console.log("data", data.message)
		} catch (e) {}
	}

	return (<div className="row">
		<h1 className="center-align">Авторизация</h1>
		<div className="col s6 offset-s3">
			<div className="card blue darken-1">
				<div className="card-content white-text">
					<span className="card-title center-align">Авторизация</span>
					<div>

						<div className="input-field">
							<input
								className="yellow-input"
								placeholder="Введите email"
								id="email"
								type="text"
								name="email"
								onChange={changeHandler}
							/>
							<label htmlFor="email">Email</label>
						</div>

						<div className="input-field">
							<input
								className="yellow-input"
								placeholder="Введите пароль"
								id="password"
								type="password"
								name="password"
								onChange={changeHandler}
							/>
							<label htmlFor="email">Пароль</label>
						</div>

					</div>
				</div>
				<div className="card-action">
					<button
						className="btn yellow darken-4"
						style={{marginRight: 20}}
						onClick={loginHandler}
						disabled={loading}
					>
						Войти
					</button>
					<button
						className="btn grey lighten-1 black-text"
						onClick={registerHandler}
						disabled={loading}
					>
						Регистрация
					</button>
				</div>
			</div>
		</div>
	</div>)
}