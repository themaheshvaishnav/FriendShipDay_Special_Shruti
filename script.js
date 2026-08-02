const pages=document.querySelectorAll(".page");

let current=0;

function showPage(index){

pages.forEach((page,i)=>{
page.classList.toggle("active",i===index);
});

updateProgress();

if(index===6){
startTypewriter();
}
}

function nextPage(){
if(current<pages.length-1){
current++;
showPage(current);
}
}

function prevPage(){
if(current>0){
current--;
showPage(current);
}
}

function updateProgress(){

const percent=((current+1)/pages.length)*100;

document.querySelector(".progress").style.width=
percent+"%";
}

for(let i=0;i<50;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);
}

let started=false;

function startTypewriter(){

if(started) return;

started=true;

const text=
`Happy Friendship Day Shruti 🤍

Sach bolu toh mujhe friendship day messages likhna nahi aata.
Isliye normal message bhejne ki jagah poori website bana di. 😭

Aur honestly, ye hamari friendship ko kaafi accurately represent karta hai...
Normal kaam ko unnecessarily complicated banana. 😂

DIY Mall wali first photo se lekar aaj tak,
kaafi memories bani.

Kuch planned thi,
aur zyada tar randomly ho gayi.
Lekin wahi random moments baad me best memories ban gaye.

Thank you for listening to my bakchodi,
thank you for the random conversations,
aur thank you for being part of so many good memories.

Aur haan...
Agar future me kabhi ye website dubara dekho,
toh yaad rakhna ki ek time pe hum dono itne free the ki Friendship Day ke liye website banayi gayi thi. 😆

Stay happy.
Stay crazy.

Aur anime dekhna kam mat karna. 😭

Happy Friendship Day Shruti 🌸

— Mahii`;

const el=document.getElementById("letter");

let i=0;

const timer=setInterval(()=>{

el.textContent+=text[i] || "";

i++;

if(i>=text.length){
clearInterval(timer);
}

},25);

}
