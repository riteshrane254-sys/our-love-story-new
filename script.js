const password = "01032026";
let websiteUnlocked = false;

const loveTimeline = [

{
date:"08 September 2025",
title:"First Meet ❤️",
description:"The day our beautiful journey started."
},


{
date:"25 February 2026",
title:"First Selfie 📸",
description:"Our first picture together."
},


{
date:"25 February 2026",
title:"First Hug 🤗",
description:"A special moment I will always remember."
},


{
date:"01 March 2026",
title:"First Kiss 💋",
description:"A memory close to my heart."
},


{
date:"01 March 2026",
title:"Special Day 🌹",
description:"One of our most beautiful days."
},


{
date:"02 March 2007",
title:"Sanvi's Birthday 🎂❤️",
description:"A special day celebrating my favourite person."
},


{
date:"09 September 2026",
title:"First Anniversary 💍",
description:"One year of love and memories."
}


];
const loveMessage = `

My Love Sanvi ❤️

Happy First Anniversary ❤️

Thank you for coming into my life
and making every moment special.

One year of beautiful memories,
smiles, happiness and love.

Baby tu magele life k khub kid kid kela asa baby ❤️🥰

Baby tu mka etle support kle asa magle title tough timer handel kle asa baby tu. ❤️🤗

Ani baby tugle hejn khub mnlr khub changes zla baby. 💕✨

Studies hetuk b zla ani khub kid kid zla baby 📚❤️

Hw baby kena revision phase k pvlo n ashelo baby tugele hejn thy pvlo baby. 🥰

Ani baby marks kitle improve zla baby. All because of you my girl. ❤️😘💕

Baby hw tuka hurt b kelo asa ni baby really really sorry baby. 🥺❤️💋

Baby magle chuk kle baby mka ani tshe kena krna baby. 🥺💕

Ani baby hw tugele br t urtlo baby tugele kena trust break krcho n baby hw. ❤️🤞

Jasti meassage hod kr mn baby tugele badal snguk khub asa baby book kami pdtle baby. 🥹❤️

Baby tu beauty with brain asa baby. ❤️🧠✨

Baby tu mka etle arth krun ghele ni tuka palya klta baby hw kid vichr krta mn mukar hw kid krtlo mn. 🥰💕

Ani mka kidy zai baby magle baby ani mummy khush ulr puro baby mka ani kai nka baby mka. ❤️🥹💕

Your baby is always with youu. ❤️🫂🥰

Ani ho tugelo baby/lol lo ashe trass dite robtlo tuka te tuka lifetime asa. ❤️😘

Tu khush dvrtalo tugelo mood sma kartlo. 🥰❤️

Baby ata kshe asa paly baby tshe urtlo baby kai change zai nlo baby mummy promise baby. 🤞❤️💋

Ani baby ata kid b asa ni tugele hejn asa baby hw Sanvi asa mn Ritesh asa. ❤️💋🥰


love u so much baby...

Thank you so much sanvi for coming into my life.
you are my better half of my life..

I love you forever ❤️

- Ritesh

`;


function unlockWebsite(){

    // Prevent multiple successful unlocks
    if (websiteUnlocked) return;


let entered =
document.getElementById("passwordInput").value;



if(entered === password){
    websiteUnlocked = true;
// Start background music

let song =
document.getElementById("loveSong");
song.play().catch(() => {
    console.log("Music will start when the user interacts with the page.");
});


/* Hide password page */

document.getElementById("lockScreen")
.style.display="none";



/* Show door */

document.getElementById("doorScene")
.style.display="flex";



/* Open doors after 1 second */

setTimeout(()=>{

// Show magical light
document.querySelector(".magicLight").style.opacity = "1";

// Open doors
document.querySelector(".leftDoor").style.transform = "rotateY(-130deg)";
document.querySelector(".rightDoor").style.transform = "rotateY(130deg)";

// Hide handles
document.querySelector(".leftHandle").style.opacity = "0";
document.querySelector(".rightHandle").style.opacity = "0";

// Show text AFTER the doors begin opening
setTimeout(() => {

    const doorText = document.querySelector(".doorText");

    doorText.style.visibility = "visible";
    doorText.style.opacity = "1";

}, 1000);

},1000);


/* Show website after animation */


setTimeout(()=>{


document.getElementById("doorScene")
.style.display="none";


document.getElementById("mainPage").style.display = "block";

// Show only Love Letter
document.getElementById("storySection").style.display = "flex";
document.getElementById("timelineSection").style.display = "none";
document.getElementById("gallerySection").style.display = "none";
document.getElementById("proposalSection").style.display = "none";
document.getElementById("celebrationSection").style.display = "none";
document.getElementById("videoSection").style.display = "none";

// After 12 seconds show Timeline
setTimeout(() => {

    document.getElementById("storySection").style.display = "none";

    document.getElementById("timelineSection").style.display = "flex";

    startTimeline();

}, 12000);


},4000);



}

else{


document.getElementById("error")
.innerHTML =
"Wrong password 😢 Try again ❤️";


}


}
function createHeart(){


let heart=document.createElement("div");


heart.className="heartFloat";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


document.getElementById("hearts")
.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);


}



setInterval(createHeart,300);
function createSparkle(){


let sparkle =
document.createElement("div");


sparkle.className="sparkle";


sparkle.style.left =
Math.random()*100+"%";


sparkle.style.top =
Math.random()*100+"%";


document.getElementById("sparkles")
.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},3000);


}



setInterval(createSparkle,200);
document.getElementById("loveMessage")
.innerHTML =
loveMessage;
let currentMemory = 0;

const timelineSlider =
document.getElementById("timelineSlider");
function showMemory(){

    console.log("Current Memory:", currentMemory);
timelineSlider.innerHTML = `

<div class="timelineCard">

    <h2>${loveTimeline[currentMemory].title}</h2>

    <p class="memoryDate">
        ${loveTimeline[currentMemory].date}
    </p>

    <p class="memoryDescription">
        ${loveTimeline[currentMemory].description}
    </p>

</div>

`;

}
function startTimeline(){

currentMemory = 0;

showMemory();

const timelineInterval = setInterval(() => {

    currentMemory++;

    if(currentMemory >= loveTimeline.length){

        clearInterval(timelineInterval);

        document.getElementById("timelineSection").style.display = "none";

        document.getElementById("gallerySection").style.display = "flex";

        currentPhoto = 0;

        changePhoto();

        photoInterval = setInterval(changePhoto,3000);

        return;

    }

    showMemory();

},5000);

}


// PHOTO GALLERY DATA 📸


const photos = [

{
image:"images/photo1.jpg",
caption:"Our First Memory ❤️"
},

{
image:"images/photo2.jpg",
caption:"A Beautiful Moment 💕"
},

{
image:"images/photo3.jpg",
caption:"Forever Together ❤️"
},

{
image:"images/photo4.jpg",
caption:"My Favourite Smile 😍"
},

{
image:"images/photo5.jpg",
caption:"Beautiful Day 🌹"
},

{
image:"images/photo6.jpg",
caption:"Another Sweet Memory ❤️"
},

{
image:"images/photo7.jpg",
caption:"Always With You 💕"
},

{
image:"images/photo8.jpg",
caption:"Our Happiness ✨"
},

{
image:"images/photo9.jpg",
caption:"Special Moment ❤️"
},

{
image:"images/photo10.jpg",
caption:"Love Forever 💖"
},

{
image:"images/photo11.jpg",
caption:"Precious Memory 🌹"
},

{
image:"images/photo12.jpg",
caption:"My Favourite Person ❤️"
},

{
image:"images/photo13.jpg",
caption:"Together Forever 💕"
},

{
image:"images/photo14.jpg",
caption:"Beautiful Memories ✨"
},

{
image:"images/photo15.jpg",
caption:"Love Story ❤️"
},

{
image:"images/photo16.jpg",
caption:"Our Journey 🌹"
},

{
image:"images/photo17.jpg",
caption:"Special Smile 😊"
},

{
image:"images/photo18.jpg",
caption:"Forever Us ❤️"
},

{
image:"images/photo19.jpg",
caption:"One More Memory 💕"
},

{
image:"images/photo20.jpg",
caption:"Amazing Day ✨"
},

{
image:"images/photo21.jpg",
caption:"My Happiness ❤️"
},

{
image:"images/photo22.jpg",
caption:"Always Together 💖"
},

{
image:"images/photo23.jpg",
caption:"First Anniversary ❤️"
}

];
// AUTOMATIC PHOTO SLIDESHOW 📸


let currentPhoto = 0;


function changePhoto(){


document.getElementById("memoryImage")
.src =
photos[currentPhoto].image;



document.getElementById("photoCaption")
.innerHTML =
photos[currentPhoto].caption;

currentPhoto++;

if(currentPhoto >= photos.length){

    clearInterval(photoInterval);

    setTimeout(() => {

    document.getElementById("gallerySection").style.display = "none";

    document.getElementById("proposalSection").style.display = "flex";

    initializeProposal();

}, 2000);

return;

}

}
let photoInterval;

function initializeProposal(){

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

function moveNoButton() {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

    yesBtn.onclick = () => {

        document.getElementById("proposalSection").style.display = "none";

        document.getElementById("celebrationSection").style.display = "flex";
        setTimeout(() => {
            document.getElementById("celebrationSection").style.display = "none";
            document.getElementById("videoSection").style.display = "flex";
            document.getElementById("finalVideo").play();

}, 5000);

    };

}
let journeyStarted = false;

function startJourney(){

    // Prevent multiple clicks
    if (journeyStarted) return;

    journeyStarted = true;

    const introScreen = document.getElementById("introScreen");
    const lockScreen = document.getElementById("lockScreen");

    introScreen.style.pointerEvents = "none";
    introScreen.style.opacity = "0";

    setTimeout(() => {

    // Completely hide welcome page
    introScreen.style.display = "none";

   // Wait a tiny moment, then show lock page
setTimeout(() => {

    lockScreen.classList.remove("showLock");
    
    lockScreen.style.display = "flex";

    setTimeout(() => {
        lockScreen.classList.add("showLock");
    }, 50);

}, 100);

}, 2500);
}
// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loadingScreen");
    const introScreen = document.getElementById("introScreen");
    const lockScreen = document.getElementById("lockScreen");

if (lockScreen) {
    lockScreen.style.display = "none";
}
    // Keep every other screen hidden until the loader finishes.
    document.body.classList.add("is-loading");

    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add("loadingComplete");
        }

        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.style.display = "none";
            }

            document.body.classList.remove("is-loading");

            
    if (introScreen) {
    introScreen.style.display = "flex";
    introScreen.style.visibility = "visible";
    introScreen.style.opacity = "0";

    setTimeout(() => {
        introScreen.style.opacity = "1";
    }, 100);
}
        }, 800);
    }, 2500);
});

const tapRingBox = document.getElementById("tapRingBox");
const tapToOpen = document.querySelector(".tapToOpen");

if (tapRingBox) {
    tapRingBox.addEventListener("click", () => {
        tapRingBox.classList.add("open");

        if (tapToOpen) {
            tapToOpen.style.display = "none";
        }
    });
}
function createLoadingHeart() {

    const loadingScreen = document.getElementById("loadingScreen");

    if (!loadingScreen) return;

    // Create heart
    const heart = document.createElement("div");

    heart.className = "loadingHeart";
    heart.innerHTML = "♥";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "%";

    // Always start below the loading screen
    heart.style.bottom = "-50px";

    // Random size
    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";

    // Random animation speed
    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    // Random delay
    heart.style.animationDelay =
        (Math.random() * 0.5) + "s";

    loadingScreen.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 8500);
}

// Create lots of hearts
const loadingHeartInterval =
    setInterval(createLoadingHeart, 250);
