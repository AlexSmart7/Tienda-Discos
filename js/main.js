console.log("main")


    document.querySelector(".hamb").addEventListener("click", function() {
        document.querySelector(".menu").classList.toggle("active");
    });

const discosTable = document.getElementById('tableDiscos') //Listado de Discos
const inputSearch = document.getElementById('search') //Buscador
const rows = document.getElementsByTagName('tr')
const buttonRegistro = document.getElementById("registroDisco") // Registar Disco
buttonRegistro.addEventListener("click", registroDisco )

inputSearch.addEventListener('keyup', (e) => {
    let query = e.target.value
    let search = new RegExp(query, "i")
    for (let i = 0; i < rows.length; i++){
        let valor = rows[i]
        if(search.test(valor.innerText)) {
            valor.classList.remove('ocultar')
        } else {
            valor.classList.add('ocultar')
        }
    }
})

const listaDiscos = []

class Disco {
    
    constructor(ID,Name,Art,Price,Year){
        this.ID= ID
        this.Name  = Name
        this.Art = Art
        this.Price = Price
        this.Year = Year
    }
}

listaDiscos.push(new Disco(1,"Abbey Road","Beatles",1500,"1969"))
listaDiscos.push(new Disco(2,"Unpluggeth New York","Nirvana",2000,"2002"))
listaDiscos.push(new Disco(3,"Californication","Red Hot Chilli Peapers",1200,"1999"))
listaDiscos.push(new Disco(4,"Black","Pear Jam",1000,"1997"))
listaDiscos.push(new Disco(5,"Metallica","Metallica",1300,"1998"))
renderTable()


function registroDisco(){

    let UUID = listaDiscos[listaDiscos.length -1].ID +1  
    let nameDisco = document.getElementById("inputName").value
    let artDisco = document.getElementById("inputArt").value
    let priceDisco = document.getElementById("inputPrice").value
    let yearDisco = document.getElementById("inputYear").value
    const disco = new Disco (UUID,nameDisco,artDisco,priceDisco,yearDisco)
    listaDiscos.push(disco)    

swal({
    title: "Success",
    text: "Registrado",
    timer: 2000,
    icon: "success",
});
renderTable();
clearInputs();

}

function clearInputs(){
        document.getElementById("inputName").value = ""
        document.getElementById("inputArt").value = ""
        document.getElementById("inputPrice").value = ""
        document.getElementById("inputYear").value = ""
}

function confirmDelete(IDdisco){
    let msg = "Seguro de Eliminar?"
    swal(msg,{
        icon: "warning",
        buttons: {
            NO: {
                text: "NO",
                value: "NO",
            },
            SI: {
                text: "SI",
                value: "SI",
            },
        },
    }).then(function(value){
        switch (value) {
            case "SI":
                DeleteItem(IDdisco)
                break;
            case "NO":
                break;
        }
    })
}

function DeleteItem(ID){
    for(let i = 0 ; i < listaDiscos.length ; i++){
        if (listaDiscos[i].ID == ID){
            listaDiscos.splice(i,1);
            swal ({
                title: "Success",
                text: "Eliminado",
                timer: 3000,
                icon: "success",
            });
            renderTable()
        }
    }
}

function renderTable(){
    const bodyTable = document.getElementById('discosList')
    bodyTable.innerHTML = "";
    let = rowBody = ""
    for(let i = 0 ; i < listaDiscos.length ; i++){
        rowBody += `<tr><td>${listaDiscos[i].ID}</td>
                        <td>${listaDiscos[i].Name}</td>
                        <td>${listaDiscos[i].Art}</td>
                        <td>${listaDiscos[i].Price}</td>
                        <td>${listaDiscos[i].Year}</td>
                        <td><button type="button" class="btn btn-sm btn-light"
                        onclick="confirmDelete('${listaDiscos[i].ID}')"><i class="fa
                        fa-trash-o fa-2x text-danger" aria-hidden="true"></i></button>
                        </td></tr>`
    }
    document.getElementById("discosList").innerHTML = rowBody
}
/*var tablaRegistros = document.getElementById("registroDiscos")

for(let i= listaDiscos.length-1; i<listaDiscos.length; i++){


    var cuerpoTabla = document.getElementById("bodyTable")
    var renglon = document.createElement("tr")
    var columnId = document.createElement("td")
    var columnNombre = document.createElement("td")
    var columnArtista = document.createElement("td")
    var columnPrecio = document.createElement("td")
    var columnAño = document.createElement("td")

    var textoId = document.createTextNode(listaDiscos[i].id)
    columnId.appendChild(textoId)
    var textoNombre = document.createTextNode(listaDiscos[i].Nombre)
    columnNombre.appendChild(textoNombre)
    var textoArtista = document.createTextNode(listaDiscos[i].Artista)
    columnArtista.appendChild(textoArtista)
    var textoPrecio = document.createTextNode(listaDiscos[i].Precio)
    columnPrecio.appendChild(textoPrecio)
    var textoAño = document.createTextNode(listaDiscos[i].Año)
    columnAño.appendChild(textoAño)

    renglon.appendChild(columnId)
    renglon.appendChild(columnNombre)
    renglon.appendChild(columnArtista)
    renglon.appendChild(columnPrecio)
    renglon.appendChild(columnAño)
   // console.log(renglon)

    cuerpoTabla.appendChild(renglon)
    tablaRegistros.appendChild(cuerpoTabla)
}

    document.getElementById("iNombre").value = ""
    document.getElementById("iArtista").value = ""
    document.getElementById("iPrecio").value = ""
    document.getElementById("iAño").value = ""
    
}

//crearDisco("Abbey Road","Beatles",1500,"1969")
//crearDisco("Unpluggeth New York","Nirvana",2000,"2002")
//crearDisco("Californication","Red Hot Chilli Peapers",1200,"1999")
//crearDisco("Black","Pear Jam",1000,"1997")
//crearDisco("Metallica","Metallica",1300,"1998")
*/

function buscarNombre(){

let elementNombre = document.getElementById("bNombre").value

for(let i = 0; i<listaDiscos.length; i++){

    let tempName = listaDiscos[i].Nombre
    
    if(elementNombre == tempName){
        var busqRegistro = listaDiscos[i]

    document.getElementById("bNombre").value = busqRegistro.Nombre
    document.getElementById("bArtista").value = busqRegistro.Artista
    document.getElementById("bPrecio").value = busqRegistro.Precio
    
    }

}

let valA = document.getElementById("bPrecio").value


if(valA == ""){
        alert ("No se encontro el Disco con nombre " + elementNombre  )
}
    
}

function buscarArtista(){

    let elementArtista = document.getElementById("bArtista").value
    
    for(let i = 0; i<listaDiscos.length; i++){
    
        let tempName = listaDiscos[i].Artista
            
        if(elementArtista == tempName){
            var busqRegistro = listaDiscos[i]
    
        document.getElementById("bNombre").value = busqRegistro.Nombre
        document.getElementById("bArtista").value = busqRegistro.Artista
        document.getElementById("bPrecio").value = busqRegistro.Precio
        
        }
    
    }
    
    let valB = document.getElementById("bPrecio").value
        
    if(valB == ""){
            alert ("No se encontro el Artista " + elementArtista )
    }
        
    }
    


