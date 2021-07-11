const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    ///새로운 Date object 생성.
    ///Date는 호출 당시의 연도,월,일,시,분,초,밀리초....에 대한 정보를 준다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
};

getClock();
setInterval(getClock, 1000);
///===시작하자마자 호출 후 1초마다 호출

//"1".padStart(2, "0");
//"1".padEnd(2, "0");
///string을 문자2개로 채운다.
