const btn = document.querySelector('#check')
btn.addEventListener ("click", validate)
function validate() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    const emailRegExp = /\w{4}\@gmail.com/
    const passwordRegExp = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,16}$/;

    if (!emailRegExp.test(email)) {
      alert("Пожалуйста, введите действительный адрес электронной почты");
      return;
    }

    if (!passwordRegExp.test(password)) {
      alert("Пароль должен содержать как минимум одну заглавную букву и одну цифру");
      return;
    }

    if (password !== repeatPassword) {
      alert("Пароли не совпадают");
      return;
    }

    alert("УСПЕШНЫЙ ВХОД!!!");
  }
