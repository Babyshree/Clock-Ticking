const dayE1= document.getElementById("day")
const hourE1= document.getElementById("hour")
const minuteE1= document.getElementById("minute")
const secondE1= document.getElementById("second")

const currentYear=new Date().getFullYear();
const newyeartime=new Date(`January 1 ${currentYear+1} 00:00:00`);

/*const newyeartime=new Date("Jan 1, 2024 00: 00 :00").getTime()*/
updateCountdown()
function updateCountdown()
{
    const now=new Date().getTime();
    const gap=newyeartime-now;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d= Math.floor(gap/day);
    const h= Math.floor((gap%day)/hour);
    const m= Math.floor((gap%hour)/minute);
    const s= Math.floor((gap%minute)/second);
    
    dayE1.innerText=d;
    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
setTimeout(updateCountdown,1000)
}


