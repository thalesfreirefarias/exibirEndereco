let endereco = {
 rua : 'Roger',
cidade : 'Guedes',
cep: 2012
};

function exibirEndereco(endereco){
  for (let chave in endereco)
    console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);