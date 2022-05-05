// button2
var button = document.querySelector(' .button2');
function hover(){
    button.style.color = " var(--primary-ad-color)";
    button.style.backgroundColor = "var(--white-ad-color)";
    button.style.boxShadow = "5px 5px 5px grey";
}

    button.addEventListener('mouseover',hover);
    button.addEventListener('mouseout',unhoverout);

function unhoverout(){
    button.style.backgroundColor = "";
    button.style.color = "var(--white-ad-color)";
    button.style.boxShadow = "0 0 0 0";

}

 // button1

var btn = document.querySelector(' .button1');
function myogi(){
    btn.style.backgroundColor = "var(--primary-ad-color";
    btn.style.color = " var(--white-ad-color)";
    btn.style.boxShadow = "5px 5px 5px grey";
    btn.style.fontwheith = "500"
}

    btn.addEventListener('mouseover',myogi);
    btn.addEventListener('mouseout',myoginout);

function myoginout(){
    btn.style.backgroundColor = "";
    btn.style.color = "var(--primary-ad-color)";
    btn.style.boxShadow = "0 0 0 0";
    btn.style.fontwheith = "100"
}



/* email du devien spiderma */
var input = document.querySelector('.form-button');
function mymail(){
    input.style.backgroundColor = "var(--primary-ad-color";
    input.style.color = " var(--white-ad-color)";
    input.style.boxShadow = "5px 5px 5px grey";
    input.style.fontwheith = "500"
}

    input.addEventListener('mouseover',mymail);
    input.addEventListener('mouseout',mymailout);

function mymailout(){
    input.style.backgroundColor = "";
    input.style.color = "var(--white-ad-color)";
    input.style.boxShadow = "0 0 0 0";
    input.style.fontwheith = "100"
}


/* */
var span = document.querySelector('.hover');
function myspan(){
    span.style.backgroundColor = "var(--primary-ad-color";
    span.style.color = " var(--white-ad-color)";


}

    span.addEventListener('mouseover',myspan);
    span.addEventListener('mouseout',myspanout);

function myspanout(){
    span.style.backgroundColor = "";
    span.style.color = "var(--white-ad-color)";
   
}

