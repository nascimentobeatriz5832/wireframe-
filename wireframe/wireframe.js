function calcular(){
 var nome = document.getElementById("nome").value;
 var tempo= document.getElementById("tempo").value;
 var mensalidade = parseInt(document.getElementById("mensalidade").value);
 var resposta  = mensalidade * tempo 
 var texto = `Olá ${nome} ser voçe economizar ${mensalidade} reias por ${tempo} meses voçe tera  ${resposta} reais ` 
 document.getElementById ("resultado").innerHTML = texto 
 document.getElementById("bibigirldreamer").style.display="block"
 document.getElementById("container").style.display="none"
 }
 function volta(){
    document.getElementById("bibigirldreamer").style.display="none"
    document.getElementById("container").style.display="block"

 }