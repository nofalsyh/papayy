function register() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({
    name: name.value,
    email: email.value,
    password: password.value
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Berhasil daftar");
}

function login() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u =>
    u.email == email.value && u.password == password.value
  );

  if (user) {
    localStorage.setItem("login", JSON.stringify(user));
    alert("Login berhasil");
    location.href = "index.html";
  } else {
    alert("Login gagal");
  }
}