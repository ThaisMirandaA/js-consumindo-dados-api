// let cep = fetch('https://viacep.com.br/ws/01001000/json/').then(response => response.json()).then(r => {
//     if (r.erro) {
//         throw Error('CEP inexistente. Digite o CEP novamente');
//     } else {
//         console.log(r);
//     }
// }).catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluído.'));


async function buscaCep(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = ""; 
    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCepConvertido = await consultaCep.json();
          if (consultaCepConvertido.erro) {
            throw Error('CEP inexistente. Digite o CEP novamente.');
        } 
        console.log(consultaCepConvertido);
        let rua = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let estado = document.getElementById('estado'); 

        rua.value = consultaCepConvertido.logradouro; 
        bairro.value = consultaCepConvertido.bairro;
        cidade.value = consultaCepConvertido.localidade;
        estado.value = consultaCepConvertido.uf; 

        return consultaCepConvertido; 

    } catch (erro){ 
        mensagemErro.innerHTML = "CEP inválido. Por favor, confirme e digite novamente."
        console.log(erro)};
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaCep(cep.value)); 


