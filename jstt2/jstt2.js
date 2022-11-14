let input1 = document.getElementById('text1')
let input2 = document.getElementById('text2')
let input3 = document.getElementById('text3')
let buton = document.querySelector('btn')
let ul = document.getElementById('ule')
document.getElementById('btn').addEventListener('click', function () {
    let li = document.createElement('li')

    li.innerHTML = input1.value

    ul.appendChild(li)


})
document.getElementById('btn').addEventListener('click', function () {
    let li = document.createElement('li')

    li.innerHTML = input2.value

    ul.appendChild(li)


})

document.getElementById('btn').addEventListener('click', function () {
    let li = document.createElement('li')

    li.innerHTML = input3.value

    ul.appendChild(li)

})
