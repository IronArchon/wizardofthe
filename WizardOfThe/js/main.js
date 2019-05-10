function ClickMe() {
    alert ("Hello, world!");
}

function openNav(x) {
    document.getElementById("sidenav").style.width = "250px";
    x.classList.toggle("change");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

// function navtoggle() {
//     switch (document.getElementById("sidenav").style.width) {
//         case "250px":
//         closeNav();
//         break;
//         case "0":
//         openNav();
//         break;
//         default:
//         openNav();
//     }
//   } //commented for posterity: RIP, you were still direct-calling closeNav() and it was a silly idea anyways