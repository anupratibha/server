//toggle icon nav bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && < offset + height) {
            //active navbar links
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active')
            });
        }
    });
    // sticky header
    let header = document.querySelection('header');

    header.classlist.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}