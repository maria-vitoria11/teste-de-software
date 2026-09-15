type Smartphone = {
    marca: string;
    preco: number;
    anoDeFabricacao: number;
    armazenamento: number;
    modelo: string;
    cor: string;
};

const celular: Smartphone = {
    marca: "Samsung",
    preco: 4000,
    anoDeFabricacao: 2026,
    armazenamento: 256,
    modelo: "S26",
    cor: "Dourado",
};

function telefone(usuario: Smartphone): void {
    console.log(usuario.marca);
    console.log(usuario.preco);
    console.log(usuario.anoDeFabricacao);
    console.log(usuario.armazenamento);
    console.log(usuario.modelo);
    console.log(usuario.cor);
}    

console.log("Informações do celular: ");
telefone(celular);

if ( celular.preco <= 4000) {
    console.log("Posso comprar o celular!")}
    else {
        console.log("Não posso comprar o celular!")
    }