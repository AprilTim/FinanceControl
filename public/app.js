const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
  event.preventDefault();

   axios.post("/user", getData(form)).then((res, err) => {
     alert("Пользователь добавлен!")
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

btnGetUsers.addEventListener("click", getUsers );
