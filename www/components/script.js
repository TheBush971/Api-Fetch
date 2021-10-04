window.onload = function(){
  const buscar = document.querySelector("#buscar");

  const cep = document.querySelector("#cep");

  const opcoes = {
    method: 'GET',
    mede: 'cors',
    cache: 'default'
  }
  buscar.addEventListener("click", function(){
   fetch(`http://viacep.com.br/ws/${ cep.value }/json/`, opcoes) //a fetch exige que eu passe uma url, e também que traga parâmetros para esta busca //colocando 'cep.value' para capturar qualquer cep
      .then(response => {response.json() //passando a url, e essas opções... "então" é o que vai acontecer    
      .then(data => {                   //ao enviar os dados, o servidor irá retornar através desta "response"
        // alert("CEP: " +data['cep']+ "\r\nLogradouro: " +data['logradouro']);  //mostrar o cep através do alert
        document.querySelector("#estado").value = data['uf'];
        document.querySelector("#cidade").value = data['localidade'];
        document.querySelector("#bairro").value = data['bairro'];
        document.querySelector("#rua").value = data['logradouro'];
        })
      })      
  });

}

