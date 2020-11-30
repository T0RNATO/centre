var medianvar = 0;
function median() {
  medianvar = document.getElementById("median").value.split(",").sort((a, b) => a - b);
  if (medianvar.length % 2 == 1) {
    document.getElementById("medianout").innerText = medianvar[(medianvar.length - 1) / 2];
  } else if (medianvar.length % 2 == 0) {
    document.getElementById("medianout").innerText = (Number(medianvar[Math.floor((medianvar.length - 1) / 2)]) + Number(medianvar[Math.ceil((medianvar.length - 1) / 2)])) / 2;
  }
}
function mode() {
  document.getElementById('modeout').innerText = mode2(document.getElementById('mode').value.split(','));
}
function mode2(arr){
    return arr.sort((c,d) =>
          arr.filter(v => v===c).length
        - arr.filter(v => v===d).length
    ).pop();
}
var meanvar = 0;
function mean() {
  meanvar = document.getElementById("mean").value.split(",");
  document.getElementById("meanout").innerText = meanvar.reduce(function(a, b) {
    return Number(a) + Number(b);
  }, 0) / meanvar.length;
}
