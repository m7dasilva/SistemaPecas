var listadepecas = ["Filtro de Ar","Amortecedor","Motor"]

if (listadepecas.length < 10){
//"é possível cadastrar"
console.log("É possivel cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")

}
let peso = 50;

if(peso < 100){
    console.log("peça deve pesar no mínimo 100g")
} else{

    console.log("A peça possui peso adequado")
}
let nomePeca = ["Dico de Freio",]
if (nomePeca.length >3){
    console.log("Nome de peca esta adequado para cadastro!")
}else if (nomePeca.length==0){
    console.log ("Nome da peça não pode ser vazio")
} else {
    console.log("Nome deve ter mais de 3 caracteres,digite um nome adequado")
}