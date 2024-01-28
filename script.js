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
  div.classList="skill"
  img.src="skills/"+skill;
  img.classList="skillimg";
  
  div.appendChild(img);
  document.getElementById('skill').appendChild(div)
});

const projects=[
  {
    name:"Shield",
    imgs:["sh1","sh2","sh3"],
    desc:"A WebPage which is helpful to create awarness for people during the time of covid",
    skill:["html.png","css.png","angular.png","JS.png","git.png","github.png"],
    link:"https://asprajna.github.io/SHIELD/"
  },
  {
    name:"Music Web",
    imgs:["mu1","mu2","mu3"],    
    desc:"A Simple WebPage for Music Lovers, To listen all kind of English Music easily",
    skill:["html.png","css.png","JS.png","git.png","github.png"],
    link:"https://asprajna.github.io/MUSIC/"
  },
  {
    name:"Hotel Menu",
    imgs:["hm1","hm2","hm3"],    
    desc:"Order from menu.A Bill will be generated based on Customer Order",
    skill:["html.png","css.png","JS.png","bootstrap.png","git.png","github.png"],
    link:"https://asprajna.github.io/FOOD/"
  },
  {
    name:"Exam Web",
    imgs:["ex1","ex2","ex3"],    
    desc:"A Complete Front-end, Back-end WebPage to take Quiz tests for Students",
    skill:["html.png","css.png","JS.png","git.png","mysql.png","php.png","xammp.png"],
    link:"https://asprajna.github.io/exam/"
  },
  {
    name:"Weather App",
    imgs:["wt1","wt2","wt3"],    
    desc:"App that gives the information of Weather of diffrent location through API. Hosted in S3",
    skill:["html.png","css.png","JS.png","aws.png"],
    link:"https://my1weatherapp.s3.amazonaws.com/index.html"
  },
  {
    name:"Netflix",
    imgs:["nf1","nf2","nf3"],    
    desc:"Buided Dashboard on Netflix Data using Tableau.Visualized on Different Factors",
    skill:["Tableau.png"],
    link:"https://public.tableau.com/app/profile/a.s.prajna/viz/Netflix-final/NETFLIX?publish=yes"
  }
]
projects.forEach(pro=>{
  const div=document.createElement('div');
  div.classList="prolist";
  const img=document.createElement('img');
  img.src="projectimages/"+pro.imgs[0]+".png";
  console.log(img.src);
  img.classList="proimg";
  const h4=document.createElement('h4');
  h4.innerHTML=pro.name;
  h4.classList='protitle'
  const a =document.createElement('a');
  a.href=pro.link;

  const p=document.createElement('p');
  p.innerHTML=pro.desc;
  p.classList='proexplain';
  const divimg=document.createElement('div')
  pro.skill.forEach(skill=>{
    const img=document.createElement('img') 
    img.src="skills/"+skill;
    img.classList="proskill"
    divimg.appendChild(img);
  })
  
  const hr=document.createElement('hr');
  hr.classList='hr';
  const i=document.createElement('i');
  i.classList="fa fa-paper-plane";
  const btn=document.createElement('button')
  btn.innerHTML="Visit";
  btn.classList="prolink";
  a.append(btn)
  btn.append(i);
  div.appendChild(img)
  div.appendChild(h4);
  div.appendChild(p);
  div.appendChild(divimg);
  div.appendChild(hr);
  div.appendChild(a)
  document.getElementById('pro').appendChild(div)
})
const pro=[
      ["sh1","sh2","sh3"],
      ["mu1","mu2","mu3"],
      ["hm1","hm2","hm3"],  
      ["ex1","ex2","ex3"],
      ["wt1","wt2","wt3"],
      ["nf1","nf2","nf3"]
]
let current=[0];
const imgchange=document.getElementsByClassName('proimg');
function changeimg(){
  for(let i=0;i<imgchange.length;i++)
  imgchange[i].src="projectimages/"+pro[i][current]+".png";
  current=(current+1)%3;
}
setInterval(changeimg,6000);


const repos=[
  {
    title:'UI-UX designs',
    link:'https://github.com/ASPRAJNA/UIUX-design.git'
  },
  {
    title:'Number System',
    link:'https://github.com/ASPRAJNA/Converter-of-Number-system'
  }
];
repos.forEach(repo=>{
const a=document.createElement('a');
a.classList='ag-courses-item_link';
const div2=document.createElement('div');
div2.classList='ag-courses-item_bg';
const div3=document.createElement('div');
div3.classList='ag-courses-item_title';
div3.innerHTML=repo.title;

const div4=document.createElement('div');
div4.classList='ag-courses-item_date-box';

const h6=document.createElement('h6');
h6.classList='ag-courses-item_date';
  h6.innerHTML=repo.link;
  a.appendChild(div2);
  a.appendChild(div3);
  div4.appendChild(h6);
  a.appendChild(div4);
  document.getElementById('ag-courses_item').appendChild(a);
});
