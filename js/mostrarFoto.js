// Mostrar fotos en galeria

const galeriaFotos = document.getElementById('galeria')

const mostrarFotos = (array) =>{
    galeriaFotos.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <div class="card mb-4">

                        <img src= ${producto.img} class="img-fluid" style="height: 600px; width: 400px " alt = "">
                        <h3>${producto.nombre}</h3>
                        
                    </div>
                                    
                    `
                    galeriaFotos.appendChild(div)    
                            


                        
                       
        
        
    });
    
}
mostrarFotos(fotos)
