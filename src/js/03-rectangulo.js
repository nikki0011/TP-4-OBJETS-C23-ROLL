// * 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

const pantalla = document.getElementById('pantalla')
pantalla.innerHTML = `<p>Si deseea modificar propiedades de rectagunlo, ingrese primer valor para alto y segundo valor para ancho</p>`
const rectangulo={
    alto: 0,
    ancho:0,
    modificarAnchoAlto:function(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    },
    mostrarPropiedades: function(){
        pantalla.innerHTML = `<p class='text-light fs-4'>Propiedades del Rectángulo: </p><p class='text-secundary'>Alto: ${this.alto}</p><p class='text-secundary'>Ancho: ${this.ancho}</p>`
        pantalla.innerHTML += `<p class='mt-5>Si deseea modificar propiedades de rectagunlo, ingrese primer valor para alto y segundo valor para ancho</p>`
    },
    perimetro:function(){
        pantalla.innerHTML = `<span class='text-light fs-4 mb-4'>Perímetro del Rectángulo: </span><span class='text-secundary'>${(this.alto + this.ancho)*2}</span>`
        pantalla.innerHTML += `<p class='mt-5'>Si deseea modificar propiedades de rectagunlo, ingrese primer valor para alto y segundo valor para ancho</p>`
    },
    area:function(){
        pantalla.innerHTML = `<span class='text-light fs-4'>Area del Rectángulo: </span><span class='text-secundary'>${this.alto * this.ancho}</span>`
        pantalla.innerHTML += `<p class='mt-5'>Si deseea modificar propiedades de rectagunlo, ingrese primer valor para alto y segundo valor para ancho</p>`
    }
}

