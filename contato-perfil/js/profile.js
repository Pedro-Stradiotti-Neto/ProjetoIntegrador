let choose = true;

document.getElementById("edit").addEventListener("click", (event) => {
    let propFieldset = document.querySelector("fieldset");
    let propEdit = document.getElementById("save");

    if (choose) {
        propFieldset.disabled = false;
        propEdit.disabled = false;
        choose = false;
    } else {
        propFieldset.disabled = true;
        propEdit.disabled = true;
        choose = true;
    }
});

document.getElementById("save").addEventListener("click", (event) => {
    let nome = document.getElementById('nomePerfil').value;
    let email = document.getElementById('emailPerfil').value;
    let telefone = document.getElementById('telPerfil').value;
    let sex = document.getElementById('sexPerfil').value;
    let dataNas = document.getElementById('dataPerfil').value;

});