let nomes = document.querySelector('.nomes');
let bntsuperior2= document.querySelector('.bnt-2')
let bntsuperior1= document.querySelector('.bnt-1')
let container= document.querySelector('.container')
let =bntinferior= document.querySelector('.bnt')
let h2=document.querySelector('.pg')

let click1=bntsuperior2.addEventListener('click',(e)=>{
  h2.innerHTML='Bem-vindo de volta!'
  bntsuperior2.style.backgroundColor = '#1ab088';
  bntsuperior2.style.color = 'white';
  bntsuperior1.style.backgroundColor = '#435359';
  bntsuperior1.style.color = '#25343d';
  nomes.style.display='none'
  container.style.height='400px'
  bntinferior.style.margin='-100px 0 0 0'

})


let click2=bntsuperior1.addEventListener('click',(e)=>{
  h2.innerHTML='Faça seu cadastro'
  bntsuperior2.style.backgroundColor = ' #435359' ;
  bntsuperior2.style.color = '#25343d';
  bntsuperior1.style.backgroundColor = '#1ab088';
  bntsuperior1.style.color = 'white';
  nomes.style.display='flex'
  container.style.height='480px'
  bntinferior.style.margin='-40px 0 0 0'

})


