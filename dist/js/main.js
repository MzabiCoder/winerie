// setTimeout(() => {
//     document.querySelector('#overlay').style.opacity = '0'
// }, 3000)

//AOS library effect on scroll 





// Scroll Magic

let controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement: '#header2 .content',

    })
    .setClassToggle('#header2 .content', 'show')
    .addTo(controller)

new ScrollMagic.Scene({
        triggerElement: '#header3 .content',

    })
    .setClassToggle('#header3 .content', 'show')
    .addTo(controller)

new ScrollMagic.Scene({
        triggerElement: '#header3 .content',

    })
    .setClassToggle('#header3 .content', 'show')
    .addTo(controller)

new ScrollMagic.Scene({
        triggerElement: '#winemaking .content',

    })
    .setClassToggle('#winemaking .content', 'show')
    .addTo(controller)






new ScrollMagic.Scene({
        triggerElement: '#header1',
        duration: 561,
        triggerHook: "onLeave"


    })
    .setClassToggle('#hidden_menu li:nth-child(1)', 'header')

new ScrollMagic.Scene({
        triggerElement: '#header2',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(2)', 'header')
    .addTo(controller)

new ScrollMagic.Scene({
        triggerElement: '#idea',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(3)', 'header')
    .addTo(controller)


new ScrollMagic.Scene({
        triggerElement: '#header3',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(4)', 'header')
    .addTo(controller)


new ScrollMagic.Scene({
        triggerElement: '#header4',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(5)', 'header')
    .addTo(controller)


new ScrollMagic.Scene({
        triggerElement: '#winemaking',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(6)', 'header')
    .addTo(controller)


new ScrollMagic.Scene({
        triggerElement: '#header5',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(7)', 'header')
    .addTo(controller)

new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(8)', 'header')
    .addTo(controller)
















new ScrollMagic.Scene({
        triggerElement: '#header2'


    })
    .setClassToggle('#hidden_menu', 'visible')
    .addTo(controller)










// events on scrolling 
window.sr = ScrollReveal();
sr.reveal('footer .logo , footer .footer_wrapper', {
    duration: 1000,
    origin: 'bottom',
    distance: '60px'
});
// sr.reveal('nav', {
//     duration: 2000,
//     origin: 'top',
//     distance: '20px'
// });

sr.reveal('#mendoza h1', {
    duration: 2500,
    origin: 'bottom',
    distance: '20px'
});
sr.reveal('#mosel h1', {
    duration: 2500,
    origin: 'bottom',
    distance: '20px'
});
sr.reveal('#prirati h1', {
    duration: 2500,
    origin: 'bottom',
    distance: '20px'
});
sr.reveal('.mendoza3_left .image', {
    duration: 3000,
    origin: 'right',
    distance: '100px'
});
sr.reveal('.mendoza3_right', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
sr.reveal('#prirati_grid .image-container', {
    duration: 4500,
    origin: 'bottom',
    distance: '20px'
});

sr.reveal('#apply p,#apply h1,#apply h2', {
    duration: 2500,
    origin: 'bottom',
    distance: '40px'
});
sr.reveal('#events_gallery .event img', {
    duration: 2000,
    origin: 'bottom',
    distance: '40px'
});
// sr.reveal('#nav #title,#nav .list-menu,#hidden_menu li a ', {
//     duration: 1500,
//     origin: 'bottom',
//     distance: '20px'
// });


sr.reveal('#press .press_container .image', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
sr.reveal('#press .press_container .content', {
    duration: 3000,
    origin: 'right',
    distance: '100px'
});

sr.reveal('#press_list .wrapper', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#login .container,#membership .container', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
});


sr.reveal('#login .form,#membership .form', {
    duration: 3000,
    origin: 'right',
    distance: '100px'
});

const btn = document.querySelector('#ham')
const general = document.querySelector('#general')
const ul = document.querySelector('#general ul')
let showMenu = false;
btn.addEventListener('click', () => {

    if (!showMenu) {

        general.classList.add('show-general')
        ul.classList.add('show-general')
        btn.classList.add('close')
        showMenu = true
    } else {
        general.classList.remove('show-general')
        btn.classList.remove('close')
        ul.classList.remove('show-general')
        showMenu = false
    }



})