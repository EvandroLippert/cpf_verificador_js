var campo_cpf = document.getElementById("id_cpf")
campo_cpf.addEventListener('keyup', function(campo_cpf) {
    cpf = String(campo_cpf.target.value);
    let verificador = 0;
    verificador = cpf.search('-')
    if (cpf.search('-') > -1 || cpf.search('.') > -1){
        cpf = cpf.replaceAll('.', '');
        cpf = cpf.replaceAll('-', '');
    }
    let tamanho = cpf.length;
    let cpf_cortado = cpf.substring(0, tamanho-2);
    if(cpf.length < 11){
        if (document.getElementById('cpf_valido')){
            (document.getElementById('cpf_valido')).remove()
        } else if (document.getElementById('cpf_invalido')){
            (document.getElementById('cpf_invalido')).remove()
        }
    }
    if (cpf.length == 11){
        while (cpf_cortado.length < 11){
            var soma = 0;
            var j = cpf_cortado.length + 1;
            for (var i = 0; i < cpf_cortado.length; i++){
                soma = soma + Number(cpf_cortado[i]);
                j = j - 1;
            }

            var resultado = 11 - (soma % 11)
            if (resultado > 9){
                cpf_cortado = cpf_cortado + '0';
            } else {
              cpf_cortado = cpf_cortado + String(resultado);
            } }

        if (cpf == '00000000000' || cpf != cpf_cortado){
            if (!document.getElementById('cpf_invalido')){
                if (document.getElementById('cpf_valido')){
                    document.getElementById('cpf_valido').remove();
                }
                invalid_cpf = document.createElement('div');
                invalid_cpf.className = "text-danger";
                invalid_cpf.id = 'cpf_invalido';
                small = document.createElement('SMALL');
                text = document.createTextNode("CPF Inválido");
                small.append(text);
                invalid_cpf.appendChild(small);
                document.getElementById("div_id_cpf").appendChild(invalid_cpf);
                console.log('cpf_cortado: ', cpf_cortado);
            }
        } else{
            if (!document.getElementById('cpf_invalido')){
             if (!document.getElementById('cpf_valido')){
                if (document.getElementById('cpf_invalido')){
                    document.getElementById('cpf_invalido').remove();
                }
                invalid_cpf = document.createElement('div');
                invalid_cpf.className = "text-success";
                invalid_cpf.id = 'cpf_valido';
                small = document.createElement('SMALL');
                text = document.createTextNode("CPF Válido");
                small.append(text);
                invalid_cpf.appendChild(small);
                document.getElementById("div_id_cpf").appendChild(invalid_cpf);
                console.log('cpf_cortado: ', cpf_cortado);
            }
        }
    }
}
}); 