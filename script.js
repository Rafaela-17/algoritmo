document.querySelectorAll('.btm-proximo');
avanca.forEach(buttin =>{
button.addEventListener('click',function(){
const atual =document.querySelector('.ativo')
const proximoPasso = 'passo-' + this.getAtribut('data-proxima');

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo')
})
})
