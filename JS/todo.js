const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  ///li의 text 뿐만 아니라 id도 얻을 수 있다. console.log(li.id);로 확인 가능. 그런데! 여기서 나오는 id는 string이다. array의 id는 number(Date.now)다.
  li.remove();
  ///html만 삭제하고 데이터베이스에서는 삭제하지 않는다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  ///데이터베이스에서도 삭제한다. 정확하게는 데이터베이스에서 없애고자 하는 요소를 제외하고 새로 toDos array를 선언한다.
  ///parseInt는 원래 string인 li.id를 number로 바꿔준다.
  saveToDos();
  ///새롭게 선언된 toDos를 데이터베이스에 저장한다.
}

function paintToDo(newToDo) {
  const myLi = document.createElement("li");
  myLi.id = newToDo.id;
  ///들어온 newToDo(line:x의 newToDoObj와 동일)의 id를 html요소의 id로넣는다.
  const mySpan = document.createElement("span");
  mySpan.innerHTML = `${newToDo.text}&nbsp`;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Done!";
  deleteButton.className = "button";
  console.dir(deleteButton);
  deleteButton.addEventListener("click", deleteToDo);
  myLi.appendChild(mySpan);
  myLi.appendChild(deleteButton);
  toDoList.appendChild(myLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  ///사용자가 입력한 값을 가지고 있는 상수
  toDoInput.value = "";
  ///입력 후 입력창을 비워주는 역할
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };
  ///입력한 값에 id를 부여한 object 생성.
  ///이 id는 특정한 object를 찾아낼 수 있게 만든다.
  toDos.push(newToDoObj);
  ///text(newToDo)와 id를 함께 저장한다.
  paintToDo(newToDoObj);
  ///text가 아니라 object를 준다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
  //paintToDo({text:"blabla", id:12031429847}); ===>바로 위 코드에서 일어나고 있는 일.
}

//function sexyFilter(anyname){return item !== 3};
//[1,2,3,4].filter(sexyFilter); === sexyFilter(1); sexyFilter(2); sexyFilter(3); sexyFilter(4); ===> forEach와 작동하는 방식이 같다.
//[1,2,3,4].filter(item => item !== 3); 위 두줄과 동일한 코드. @@@@@@@@ wow.
/// true값은 array에서 유지, false값은 array에서 제외. sexyFilter 함수가 어떤 값(true/false)을 반환하는가에 따라서 array에서 유지하느냐 마느냐가 결정된다.
///위 코드들을 콘솔에서 실험해볼 수 있다.
