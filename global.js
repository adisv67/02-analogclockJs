const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hour-hand");

function getDate(){
    const newDate = new Date;
     const sec = newDate.getSeconds();
     const secDeg = ((sec/60)*360)+90;
     secHand.style.transform = `rotate(${secDeg}deg)`;

     const min = newDate.getMinutes();
     const minDeg = ((min/60)*360)+90;
     minHand.style.transform = `rotate(${minDeg}deg)`;

     const hr = newDate.getHours();
     const hrDeg = ((hr/12)*360)+90;
     hrHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(getDate, 1000);
