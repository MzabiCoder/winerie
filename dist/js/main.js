setTimeout(() => {
    document.querySelector('#overlay').style.opacity = '0'
}, 3000)

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
        triggerElement: '#image-container',
    })
    .setClassToggle('#image-container', 'opac')
    .addTo(controller)



new ScrollMagic.Scene({
        triggerElement: '.mendoza3_left img',

    })
    .setClassToggle('.mendoza3_left img', 'opacity')
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