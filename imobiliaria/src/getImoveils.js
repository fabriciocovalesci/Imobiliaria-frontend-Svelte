


let URLimoveis = 'https://apimobiliaria.herokuapp.com/api/v1/immobile/'

function getImovel(){
    fetch(`${URLimoveis}`,{
    method: 'GET',
    headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
    },
  })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
    alert("CEP " + cep + " inválido !!")
    console.error('Error:', error)
    });
}


export default getImovel;