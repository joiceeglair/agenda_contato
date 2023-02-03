const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let contatos = '';

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaContato();
})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já existe`)
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);

        let contato = '<tr>';
        contato += `<td>${inputNomeContato.value}</td>`;
        contato += `<td>${inputTelefoneContato.value}</td>`;
        contato += '</tr>';

        contatos += contato;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaContato() {
    const corpoContato = document.querySelector('tbody');
    corpoContato.innerHTML = contatos;
}