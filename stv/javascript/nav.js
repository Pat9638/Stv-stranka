/* Nav bar */
const navbar = document.getElementById("nav");
const ego = document.getElementById("ego-nav");
const btn = document.getElementById("delete-btn");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    //const navHeight = navbar.getBoundingClientRect().height;
    
    if(scrollHeight > 730) {
        navbar.classList.remove("linky")
        navbar.classList.add("fixed-nav")
        ego.classList.add("ego-nav")
        btn.classList.add("delete-btn")
        //console.log(navbar)
    } else {
        navbar.classList.remove("fixed-nav")
        navbar.classList.add("linky")
        ego.classList.remove("ego-nav")
        btn.classList.remove("delete-btn")
    }
    // setup back to top link

    if (scrollHeight > 730) {
        //console.log("hello")
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-list")
    }
})
/*

const scrollLinks = document.querySelectorAll("scroll-link");
scrollLinks.forEach((link) =>{
    link.addEventListener("click", (e) => {
        e.preventDefault()
       
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.offsetTop - navHeight

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        });
        //close
        linksContainer.style.height = 0;
    })
})*/


/* SPECIAL OFFER== 10% CHRISTMAS SPECIAL OFFER {pay to win} */
const closee = document.querySelector(".hide-offer");
const damePrec = document.querySelector(".turlo");
const scrolle = document.querySelector(".hide-ok");

closee.addEventListener("click", function () { 
    damePrec.style.display ="none";
    scrolle.style.overflow ="auto";
});

window.addEventListener('scroll',(event) => {
    console.log(scrollY);
});