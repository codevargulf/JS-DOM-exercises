// 1. Znajdź elementy o klasie .first-attempt - dodaj im klasę active

var elements1 = document.querySelectorAll(".first-attempt");
elements1.forEach( function (el) {el.classList.add("active")} );

// 2. Znajdź elementy z atrybutem data-border i dodaj im atrybut data-el-active.

var elements2 = document.querySelectorAll("[data-border]");
// elements2.forEach( function(el) {el.setAttribute("data-el-active",true)} );
for (el of elements2) {el.dataset.elActive = true};

// 3. Znajdź elementy z klasą hack. Dodaj im atrybut title ustawiony na wartość "hacking". 

var elements3 = document.querySelectorAll(".hack");
elements3.forEach( function (el) {el.setAttribute("title","hacking")} );

// 4. Znajdź elementy o klasie hijack. Usuń im atrybut title

var elements4 = document.querySelectorAll(".hijack");
elements4.forEach( function(el) { el.removeAttribute("title")});

// 5. Znajdź elementy które mają 2 klasy równocześnie: st1 i st2. 
//Dodaj im style: color: red, i font-size na 15px

var elements5 = document.querySelectorAll(".st1.st2");
elements5.forEach(function(el){ 
    el.style.color = "red"; 
    el.style.fontSize = "15px" 
});

// 6. Znajdź elementy które mają klasę .del ale nie mają klasy .hijack. 
//Dodaj im atrybut data-hack-active, usuń atrybut data-hack-inactive

var elements6 = document.querySelectorAll(".del:not(.hijack)");
elements6.forEach( function (el) {
    el.dataset.hackActive = true;
    el.removeAttribute("data-hack-inactive");
})

// 7. Znajdź elementy o klase .last-attempt i pokaż w ich wnętrzu spany

var elements7 = document.querySelectorAll(".last-attempt");
elements7.forEach( function(el) { el.style.display = "none" } );