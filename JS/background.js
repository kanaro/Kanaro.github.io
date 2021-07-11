const images = [
    "img/99785.jpg",
    "img/99791.jpg",
    "img/99815.png",
    "img/99825.jpg",
    "img/160352.png",
    "img/178343.jpg",
    "img/203513.png",
  ];
  
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  //랜덤 이미지 선택
  const body = document.querySelector("body");
  const bgImg = document.createElement("img");
  
  bgImg.src = `${chosenImage}`;
  
  body.style.background = `url(${bgImg.src})`;
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  console.log(body);
  