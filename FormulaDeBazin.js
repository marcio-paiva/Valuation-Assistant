function calcular(){
    var dy = parseFloat(document.getElementById("dy").value);
    var d12 = parseFloat(document.getElementById("d12").value);

    document.getElementById('resultado').innerHTML = (d12 / (dy/100)).toFixed(4);
}