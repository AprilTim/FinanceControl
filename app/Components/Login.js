import React from 'react';

const Login = ({state, setState}) => {

    const addUser = (event) => {
        event.preventDefault();
        axios.post("/user", getData("add-user")).then((res, err) => {
            alert("Пользователь добавлен!")
        })
    }

    const login = (event) => {
        event.preventDefault();
        axios.post("/login", getData("login")).then((res, err) => {
            alert("Вы вошли!")
            if (res.data) {
                setState({...state, user: res.data})
            }
        })
    }

    const getData = (attribute) => {
        const form = document.querySelector(`[data-submit=${attribute}]`);

        const data = {};
        const formArray = [...form];

        formArray.forEach(item => {
            if (item.name) {
                data[item.name] = item.value;
            }
        })
        return data
    }
    console.log(state)
    return (
        <div>
            <div>{state.user?.login}</div>

            <form onSubmit={addUser} data-submit={"add-user"}>
                <input name={"login"} placeholder={"login"}/>
                <input name={"password"} placeholder={"password"}/>
                <button>Регистрация</button>
            </form>

            <form onSubmit={login} data-submit={"login"}>
                <input name={"login"} placeholder={"login"}/>
                <input name={"password"} placeholder={"password"}/>
                <button>Войти</button>
            </form>


            <button className={"btn-get-users"}>Все пользователи</button>
        </div>
    );
};

export default Login;