const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

let btn=document.getElementById('btn')
let btnn=document.getElementById('btnn')

btn.addEventListener('click',function(){
    window.location.href='http://127.0.0.1:5500/Last%20of%20us%20main%20page/assignment.html'
})
btnn.addEventListener('click',function(){
    window.location.href='http://127.0.0.1:5500/Last%20of%20us%20main%20page/assignment.html'
})