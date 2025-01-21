function noLayout() {

}

function verticalLayout() {
    
}

function horizontalLayout() {
    
}

function gridLayout() {
    
}



function showTools() {
    blankAll();
    document.getElementById('tools').innerHTML = /*HTML*/`
    
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
    `;
}

function showHTML() {
    blankAll();
    document.getElementById('html').innerHTML = /*HTML*/ `
    
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

    `;
}

function showCSS() {
    blankAll();
    document.getElementById('css').innerHTML = /*HTML*/ `
    
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
    `;
}

function showJS() {
    blankAll();
    document.getElementById('js').innerHTML = /*HTML*/ `

    Det viktigste vi skal lære er programmeringsspråket JavaScript. 
    Vi skal lære grunnleggende programmering ved å manipulere HTML- og 
    CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li> Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på Moodle. </li>
        <li> <a href ="https://www.w3schools.com/jsref/default.asp"> W3Schools JavaScript Reference </a> </li>
    </ul>
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

function selectHead1(){
    document.getElementById('head').innerHTML= /*HTML*/`
        <button> ◀ </button>
        <img src="img/head1.png">
        <button> ▶ </button>
    `;
}

function selectBody1(){
    document.getElementById('body').innerHTML= /*HTML*/`
        <button> ◀ </button>
        <img src="img/body1.png">
        <button> ▶ </button> 
    `;
}

function selectLegs1(){
    document.getElementById('legs').innerHTML= /*HTML*/`
        <button> ◀ </button>
        <img src="img/legs1.png">
        <button> ▶ </button>
    `;
}