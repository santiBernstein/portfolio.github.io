// menu show //
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav--toggle','nav-menu');

// active and remove menu //
const navLink = document.querySelectorAll('.nav--link')

function linkAction (){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll reveal animation //

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// sr home //
sr.reveal('.home--title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home--img',{delay: 400})
sr.reveal('.home--social-icon',{interval: 200})

//sr about //
sr.reveal('.about--img',{})
sr.reveal('.about--subtitle',{delay: 200})
sr.reveal('.about--text',{delay: 400})

//sr skills//
sr.reveal('.skills--subtitle',{})
sr.reveal('.skills--text',{delay: 200})
sr.reveal('.skills--data',{interval: 200})
sr.reveal('.skills--img',{delay: 400})

//work//
sr.reveal('.work--img',{interval: 200})

//contact//
sr.reveal('.contact--data',{interval: 200})


// work mix buttons

let mixer = mixitup(".work--container",  {
    selectors: {
        target: '.work--img'
    },
    animation: {
        duration: 450,
    }
});


// dark mode toggle
const toggleSwitch = document.querySelector('input[type=checkbox]');
const toggleIcon = document.getElementById('toggle-icon');

//light mode styles
function lightMode (){
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('bxs-moon');
    toggleIcon.children[1].classList.add('bxs-sun');
}

//dark mode styles
function darkMode (){
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('bxs-sun');
    toggleIcon.children[1].classList.add('bxs-moon');
}

//switch theme dynamically
function switchTheme(event){
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();          
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);