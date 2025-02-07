console.log("main")


class Disco {
    constructor(Id,Nombre,Artista,Precio,Año){
        this.id = Id
        this.Nombre  = Nombre
        this.Artista = Artista
        this.Precio = Precio
        this.Año = Año
    }
}

const listaDiscos = []

function crearDisco(){
    let id = listaDiscos.length +1    
    let Nombre = document.getElementById("iNombre").value
    let Artista = document.getElementById("iArtista").value
    let Precio = document.getElementById("iPrecio").value
    let Año = document.getElementById("iAño").value
    var registro = new Disco (id,Nombre,Artista,Precio,Año)
    listaDiscos.push(registro)    

console.log(listaDiscos)


var tablaRegistros = document.getElementById("registroDiscos")

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
    

function resetBusqueda(){
    document.getElementById("bNombre").value = ""
    document.getElementById("bArtista").value = ""
    document.getElementById("bPrecio").value = ""
}
