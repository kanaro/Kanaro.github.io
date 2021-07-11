const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usernamekey";
///string을 반복하게 될 때는 실수하지 않도록 변수로 지정하자.

function onLoginSubmit(userEvent) {
  userEvent.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginInput.value = "";
  paintGreetings(userName);
}

function deleteID(event) {
  const ID = localStorage.getItem(USERNAME_KEY);
  console.log(ID.type);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY, ID);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}!<br>`;
  const deleteIdButton = document.createElement("button");
  deleteIdButton.innerText = "Clear name";
  deleteIdButton.className = "button";
  deleteIdButton.addEventListener("click", deleteID);
  greeting.appendChild(deleteIdButton);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  ///여기 넣는 이유는 form이 없으면 의미없는 코드이므로.
} else {
  paintGreetings(savedUsername);
}
