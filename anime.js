let animateText = anime({
    targets: 'div.center.text',
    translateY: [
        {value:150, duration:500},
        {value:0, duration:500}
    ],
    delay: 1000,
    rotate: 360,
    easing: 'linear',
    loop: true
}); 

let animateKonami = anime({
    targets: 'div.center.konami',
    translateY: [
        {value:150, duration:500},
        {value:0, duration:500}
    ],
    delay: 1000,
    rotate: -360,
    easing: 'linear',
    loop: true
}); 
