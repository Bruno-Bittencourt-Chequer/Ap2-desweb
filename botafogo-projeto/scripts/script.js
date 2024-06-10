const containerGeral = document.getElementById('container-geral')

function gerarTelaLogin() {
    containerGeral.classList.add('container-central')
    const box = `
    <div class="box-login">
    <h3>CRAQUES DO BOTAFOGO</h3>
    <img  class="img-login"  src="assets/logo.png" alt="Imagem Não Encontrada">
    <span>Efetue o login com a senha: FOGAO</span>
    <input id="campo-login" type="password" class="campo-login" placeholder="Informe a Senha">
    <button onclick="fazerLogin()" class="btn-login">ENTRAR</button>
</div> 
    `
    containerGeral.innerHTML += box


}
function fazerLogin() {
    const input = document.getElementById('campo-login')
   if(input.value=='FOGAO'){
    alert('Senha Correta (Remover isso aqui, e trocar por redirecionamento)')
   }
   else{
    alert('Senha incorreta, Tente novamente')
   }
   input.value=''
}
function gerarTelaAtletas(){
    containerGeral.classList.remove('container-central')
}
//gerarTelaLogin()