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
        triggerElement: '#header3',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(3)', 'header')
    .addTo(controller)


new ScrollMagic.Scene({
        triggerElement: '#header4',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(4)', 'header')
    .addTo(controller)

new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: 561

    })
    .setClassToggle('#hidden_menu li:nth-child(5)', 'header')
    .addTo(controller)





// events on scrolling 
window.sr = ScrollReveal();
sr.reveal('footer', {
    duration: 1000,
    origin: 'bottom',
    distance: '60px'
});
sr.reveal('nav', {
    duration: 2000,
    origin: 'top',
    distance: '20px'
});

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

// overswer

// let sections = document.querySelectorAll('.sections')
// const bumble = document.querySelector('#bumble')

// const options = {
//     threshold: .9
// }
// let observer = new IntersectionObserver(navChek, options)

// function navChek(entries) {
//     entries.forEach(e => {
//         const entry = e.target.id
//         const activeA = document.querySelector(`[data-page=${entry}]`)
//         const gradient = entry.target.getAttribute('data-index')
//         //activeA.style.color = 'red'
//         console.log(activeA);

//     })
// }
// sections.forEach(section => {
//     observer.observe(section)
// })