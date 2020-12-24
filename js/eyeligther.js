function parallaxifyMountains() {
    window.onscroll = (ev) => {
        const mtnBack = document.querySelector('.back.mountain');
        const mtnFront = document.querySelector('.front.mountain');
        const sizeFromButton = getSiteHeight() - (window.scrollY + window.innerHeight);
        if(sizeFromButton < 350) {
            mtnBack.style.filter = `blur(${5 - sizeFromButton / 60}px)`;
            mtnBack.style.bottom = `${(-sizeFromButton) / 8}px`;
            mtnFront.style.bottom = `${(-sizeFromButton) / 2}px`;
        }
    }
}

function getSiteHeight() {
    const body = document.body,
        html = document.documentElement;
    return Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );   
}


function starify(number = 20) {
    for (let i=0 ; i< number ; i++) {
        const star = document.createElement('img');
        const size = (Math.random() * 20 + 3) + 'px';
        star.setAttribute('src', './assets/star.svg');
        star.setAttribute('class', 'star');
        star.style.position = 'absolute';
        star.style.top = Math.random() * 300 + 'px';
        star.style.right = Math.random() * 80 + '%';
        star.style.width = size;
        star.style.height = size;
        document.querySelector('#contact').append(star);
    }
}
function cloudify(number = 3) {
    const positions = [
        {x: '-1vw', y: '25%' },
        {x: '30vw', y: '30%' },
        {x: '15vw', y: '40%' },
        {x: '5vw', y: '50%' },
        {x: '25vw', y: '60%' },
    ]
    for (let i=0 ; i< number ; i++) {
        const cloud = document.createElement('img');
        // const size = (Math.random() * 250 + 100) + 'px';
        const size = (Math.random() * 10 + 10) + 'vw';
        const delay = (Math.random() * -2) + 's';
        const duration = (Math.random() * 3 + 1) + 's';
        cloud.setAttribute('src', './assets/cloud.svg');
        cloud.setAttribute('class', 'cloud secondary-content');
        cloud.style.animationDelay = delay;
        cloud.style.animationDuration = duration;
        cloud.style.position = 'absolute';
        const positionIndex = Math.floor(Math.random() * positions.length)
        cloud.style.left = positions[positionIndex].x;
        cloud.style.top = positions[positionIndex].y;
        positions.splice(positionIndex, 1)
        cloud.style.width = size;
        document.querySelector('#contact').append(cloud);
    }
}