const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Engineer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

skillimg=["aws.png","bootstrap.png","css.png","Django.png","docker.png","flask.png","gcp.png","git.png","github.png"
          ,"html.png","java.png","JS.png"  ,"mongo.png","mysql.png","php.png","python.png","powerBI.png","Tableau.png"]
function shuffle(a){
  for(let i=a.length-1;i>0;i--)
  {
    const j =Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
}
shuffle(skillimg)
skillimg.forEach(skill => {
  const div =document.createElement('div');
  const img=document.createElement('img')
  const span=document.createElement('span')
  div.classList="skill"
  img.src="/skills/"+skill;
  img.classList="skillimg";
  
  div.appendChild(img);
  document.getElementById('skill').appendChild(div)
});