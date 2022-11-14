var num1 = document.getElementById("input1");
var num2 = document.getElementById("input2");
var num3 = document.getElementById("input3");
var table = document.getElementById("table")

document.getElementById("btn").addEventListener("click", function () {
    var tr = document.createElement("tr")
    tr.innerHTML =  `<th> ${num1.value}</th>
                    <th>${num2.value}</th>
                    <th>${num3.value}</th>`
    table.appendChild(tr);
})
