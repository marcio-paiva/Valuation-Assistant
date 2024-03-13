function calcular(){
    var vpa = parseFloat(document.getElementById("vpa").value);
    var lpa = parseFloat(document.getElementById("lpa").value);

    document.getElementById('resultado').innerHTML = Math.sqrt((22,5 * vpa * lpa)).toFixed(4);
}