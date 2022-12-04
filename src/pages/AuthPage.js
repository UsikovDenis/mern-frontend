import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {

    const [form, setForm] = useState({
        email: "", password: ""
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }



    return (
        <div className="row">
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
                        <button className="btn yellow darken-4" style={{marginRight: 20}}>Войти</button>
                        <button className="btn grey lighten-1 black-text">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}