function noLayout() {
    document.getElementById('allCards').classList.value='';
}

function verticalLayout() {
    noLayout(); 
    document.getElementById('allCards').classList.add('vertical');
}

function horizontalLayout() {
    noLayout();
    document.getElementById('allCards').classList.add('horizontal');
}

function gridLayout() {
    noLayout();
    document.getElementById('allCards').classList.add('grid');
}



function showTools() {
    blankAll();
    document.getElementById('tools').innerHTML = /*HTML*/`
        <div class="innerCard">
            De to viktigste verktøyene vi skal bruke er disse: <br>
            <ul>
                <li> 
                        Koderedigeringsprogrammet 
                        <a href="https://code.visualstudio.com/"> 
                            Visual Studio Code 
                        </a>
                    </li>
                    Vi skal bruke noen <i>extensions</i>:<br>
                    <ul>
                        <li> JavaScript-booster</li>
                        <li> es6-string-html </li>
                        <li> live-server </li>
                        <li> live-share </li>
                    </ul>
                </li>
                <li> 
                    Nettleseren 
                    <a href="https://www.google.com/chrome/?brand=FHFK&ds_kid=43700078760035379&gad_source=1&gclid=Cj0KCQiAqL28BhCrARIsACYJvkfNTI-NnigsT5vrwAvtctfwT5lD4yHh4jL-YmvQPMOSEhn7M5x2SK0aAtdKEALw_wcB&gclsrc=aw.ds"> 
                        Google Chrome 
                    </a>
                </li>
            </ul>
        </div>
    `;
}

function showHTML() {
    blankAll();
    document.getElementById('html').innerHTML = /*HTML*/ `
        <div class="innerCard">
            Vi bruker HTML til å definere et dokument. <br>
            <ul>
                <li> Tagger for grunnleggende oppsett av en HTML-fil </li>
                <li> Tagger for grunnleggende formatering av tekst </li>
                <li> <tt> < div > </tt> </li>
                <li> <tt> < input type="text" > </tt> </li>
                <li> <tt> < button > </tt> </li>
                <li> <a href="https://www.w3schools.com/html/default.asp">W3Schools HTML Tutorial </a></li>
                <li> <a href="https://www.w3schools.com/tags/"> W3Schools HTML Reference </a> </li>
            </ul>
        </div>
    `;
}

function showCSS() {
    blankAll();
    document.getElementById('css').innerHTML = /*HTML*/ `
    <div class="innerCard">
        Vi bruker CSS til å <i> style </i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li> <tt> background-color </tt> </li>
            <li> <tt> color </tt> </li>
            <li> <tt> padding </tt> </li>
            <li> <tt> margin </tt> </li>
            <li> <tt> border </tt> </li>
            <li> <tt> text-align </tt> </li>
            <li> <tt> font-size </tt> </li>
            <li> Flexbox </li>
            <li> Grid </li>
            <li> 
                <a href="https://www.w3schools.com/css/default.asp"> 
                    W3Schools CSS Tutorial 
                </a>
            </li>
            <li>
                <a href ="https://www.w3schools.com/cssref/index.php"> 
                    W3Schools CSS Reference 
                </a>
            </li>
        </ul>
    </div>    
    `;
}

function showJS() {
    blankAll();
    document.getElementById('js').innerHTML = /*HTML*/ `
        <div class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. 
            Vi skal lære grunnleggende programmering ved å manipulere HTML- og 
            CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li> Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på Moodle. </li>
                <li> <a href ="https://www.w3schools.com/jsref/default.asp"> W3Schools JavaScript Reference </a> </li>
            </ul>
        </div>
    `;
}

function showCardGame(){
    blankAll();
    document.getElementById('cardGame').innerHTML= /*HTML*/ `
        <div id="head"></div>
        <div id="body"></div>
        <div id="legs"></div>
    `;
    selectHead1();
    selectBody1();
    selectLegs1();
}

function blankAll() {
    document.getElementById('tools').innerHTML =``;
    document.getElementById('html').innerHTML=``;
    document.getElementById('css').innerHTML=``;
    document.getElementById('js').innerHTML=``;
    document.getElementById('cardGame').innerHTML=``;
}

/*----------------------------------- CARD GAME --------------------------------------*/

// HEAD
function selectHead1(){
    document.getElementById('head').innerHTML= /*HTML*/`
        <button onclick="selectHead4()"> ◀ </button>
        <img src="img/head1.png">
        <button onclick="selectHead2()"> ▶ </button>
    `;
}

function selectHead2(){
    document.getElementById('head').innerHTML= /*HTML*/`
        <button onclick="selectHead1()"> ◀ </button>
        <img src="img/head2.png">
        <button onclick="selectHead3()"> ▶ </button>
    `;
}

function selectHead3(){
    document.getElementById('head').innerHTML= /*HTML*/`
        <button onclick="selectHead2()"> ◀ </button>
        <img src="img/head3.png">
        <button onclick="selectHead4()"> ▶ </button>
    `;
}

function selectHead4(){
    document.getElementById('head').innerHTML= /*HTML*/`
        <button onclick="selectHead3()"> ◀ </button>
        <img src="img/head4.png">
        <button onclick="selectHead1()"> ▶ </button>
    `;
}



// BODY 
function selectBody1(){
    document.getElementById('body').innerHTML= /*HTML*/`
        <button onclick="selectBody4()"> ◀ </button>
        <img src="img/body1.png">
        <button onclick="selectBody2()"> ▶ </button> 
    `;
}

function selectBody2(){
    document.getElementById('body').innerHTML= /*HTML*/`
        <button onclick="selectBody1()"> ◀ </button>
        <img src="img/body2.png">
        <button onclick="selectBody3()"> ▶ </button>
    `;
}

function selectBody3(){
    document.getElementById('body').innerHTML= /*HTML*/`
        <button onclick="selectBody2()"> ◀ </button>
        <img src="img/body3.png">
        <button onclick="selectBody4()"> ▶ </button>
    `;
}

function selectBody4(){
    document.getElementById('body').innerHTML= /*HTML*/`
        <button onclick="selectBody3()"> ◀ </button>
        <img src="img/body4.png">
        <button onclick="selectBody1()"> ▶ </button>
    `;
}



// LEGS
function selectLegs1(){
    document.getElementById('legs').innerHTML= /*HTML*/`
        <button onclick="selectLegs4()"> ◀ </button>
        <img src="img/legs1.png">
        <button onclick="selectLegs2()"> ▶ </button>
    `;
}

function selectLegs2(){
    document.getElementById('legs').innerHTML= /*HTML*/`
        <button onclick="selectLegs1()"> ◀ </button>
        <img src="img/legs2.png">
        <button onclick="selectLegs3()"> ▶ </button>
    `;
}

function selectLegs3(){
    document.getElementById('legs').innerHTML= /*HTML*/`
        <button onclick="selectLegs2()"> ◀ </button>
        <img src="img/legs3.png">
        <button onclick="selectLegs4()"> ▶ </button>
    `;
}

function selectLegs4(){
    document.getElementById('legs').innerHTML= /*HTML*/`
        <button onclick="selectLegs3()"> ◀ </button>
        <img src="img/legs4.png">
        <button onclick="selectLegs1()"> ▶ </button>
    `;
}