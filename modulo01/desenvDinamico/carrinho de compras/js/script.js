var varTotal = [0,0];
var produto = [50.00,100.00];
var qnt = [0,0];


function adicionarItem (item) {
  var quantidade = document.getElementById('qunatidade' + item);
  var total = document.getElementById('total' + item);
  quantidade.innerHTML=qnt[item] +=1;
  total[item]=Number.parseFloat(produto[item] )* qnt[item];
  total.innerHTML=total[item].toFixed(2);
  var totaldacompra = document.getElementById(valorTotalCompra);
  totaldacompra.innerHTML=total[item].toFixed(2) + total[item].toFixed(2);

}

function removeItem (item) {
  var quantidade = document.getElementById('qunatidade' + item);
  var total = document.getElementById('total' + item);

  if(qnt[item] > 0) {
    quantidade.innerHTML=qnt[item] -=1;
  }else{
    alert('OPÇÃO INVÁLIDA')
  }
  total[item]=Number.parseFloat(produto[item] )* qnt[item];
  total.innerHTML=total[item].toFixed(2);
  
  var totaldacompra = document.getElementById(valorTotalCompra);
  totaldacompra.innerHTML=total[item].toFixed(2) + total[item].toFixed(2);
}


