//html Variable
const contenaire = document.querySelector('.cont')
const btns = document.querySelectorAll('button')
const audio = document.querySelector('audio')
const prog = document.querySelector('#prog')
const titre = document.querySelector('.title')

//Js variable
let p = 1
const colors = ['red', 'pink', 'blue', 'purple', 'steelblue',
    'slateblue', 'aquamarine', 'blueviolet', 'cadetblue',
    'chartreuse', 'chocolate', 'crimson', 'cyan', 'darkmagenta',
    'fuchsia', 'goldenrod', 'indigo', 'orange'
]
const square_number = 1400

//foctionnality
for(let i = 0; i < square_number; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    contenaire.appendChild(square)
}

const squares = document.querySelectorAll('.square')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        p++
        if(p%2 == 0){
            btn.textContent = 'pause'
            audio.play()
            audio.addEventListener('play', () => {
                audio.onloadedmetadata = () => {
                prog.valueMax = 1000
                prog.value = audio.currentTime
                }
                setInterval(() => {
                    prog.value = audio.currentTime
                }, 500)

                rotateCircles()

                inter =setInterval(() => {
                    for(let i = 0; i < 50; i++){
                    setColor(squares[getRamdomNumb()])
                    }
                    setTimeout(() => {
                        squares.forEach(square => {
                        removeColor(square)
                    })
                    }, 2100)
                }, 2200)
            })
        }else{
            btn.textContent = 'play'
            audio.pause()
            audio.currentTime = 0
            clearInterval(inter)
        }
    })
})

//function
function setColor(element){
    const color = getRamdomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = 'black'
    element.style.boxShadow = `0px 0px 2px rgb(78, 63, 63)`
}

function getRamdomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
function getRamdomNumb(){
    return Math.floor(Math.random() * 1400)
}

function rotateCircles() {
    const circles = document.querySelectorAll('.img_span');
    let angles = new Array(circles.length).fill(0);

    function animate() {
        angles = angles.map((angle) => angle + 2); // Augmentez l'angle de rotation pour chaque cercle
        circles.forEach((circle, index) => {
            circle.style.transform = `rotate(${angles[index]}deg)`;
        });
        requestAnimationFrame(animate); // Appel récursif
    }

    animate(); // Démarrez l'animation
}

function stopRotate(){
    const circles = document.querySelector('.img_span');
    circles.style.transform = `rotate(0deg)`
}