import React from 'react';

const Login = () => {

    const forms = document.querySelectorAll('form');

    let user = {};

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formType = form.getAttribute('data-submit');

            switch (formType) {
                case "add-user":
                    axios.post("/user", getData(form)).then((res, err) => {
                        alert("Пользователь добавлен!")
                    })
                    return;
                case "login":
                    axios.post("/login", getData(form)).then((res, err) => {
                        alert("Вы вошли!")
                        if (res.data) {
                            user = res.data;
                        }
                    })
                    return;
                case "add-cost":
                    axios.post("/expense", {...getData(form), id: user.id}).then((res, err) => {
                        alert("Расход добавлен!")
                    })
                    return;
                default:
                    return
            }
        })
    })

    const getData = (form) => {
        const data = {};
        const formArray = [...form];

        formArray.forEach(item => {
            if (item.name) {
                data[item.name] = item.value;
            }
        })

        return data
    }


    const btnGetUsers = document.querySelector(".btn-get-users");

    const getUsers = () => {
        axios.get("/users").then((res, err) => {
            console.log(res.data, err)
        })
    }

    btnGetUsers.addEventListener("click", getUsers);

    return (
        <div>
            <form data-submit={"add-user"}>
                <input placeholder={"name"}/>
                <input placeholder={"password"}/>
                <button>Регистрация</button>
            </form>

            <form data-submit={"add-user"}>
                <input placeholder={"name"}/>
                <input placeholder={"password"}/>
                <button>Регистрация</button>
            </form>


            <button className={"btn-get-users"}>Все пользователи</button>
        </div>
    );
};

export default Login;