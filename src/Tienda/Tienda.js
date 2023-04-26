import './Tienda.css';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { consultarProducto } from '../services/buscarProductos';

// Productos
export function Tienda() {

    const [productostienda, setProductosTienda] = useState("")
    const [estadocarga, setEstadoCarga] = useState(true)

    function cambiarFoto1(evento) {
        evento.preventDefault()
        // console.log(evento.target.classList)
        evento.target.classList.remove("sombra")
    }

    function cambiarFoto2(evento) {
        evento.preventDefault()
        // console.log(evento.target.classList)
        evento.target.classList.add("sombra")
    }

    let navegador = useNavigate()
    function pasarInfo(producto) {
        navegador('/compras', {
            state: { producto }
        })
    }

    useEffect(function () {
        consultarProducto()
            .then(function (respuesta) {
                console.log(respuesta)
                setEstadoCarga(false)
                setProductosTienda(respuesta)
            }, [])
    })

    if (estadocarga == true) {
        return (
            <>
                <h1>Estamos Cargando...</h1>
            </>
        )
    }else{
        return (
            <>
                <div class="row row-cols-1 row-cols-md-5 g-3 my-5">
                    
                    {
                       
                        productostienda.map(function (producto) {
                            return (
                                <div class="col zoom" onClick={function () { pasarInfo(producto) }}>
                                    <div class="card shadow h-100">
                                        <img src={producto.foto} alt="foto" class="img-fluid sombra" onMouseOver={cambiarFoto1} onMouseLeave={cambiarFoto2} />
                                        <h2 class="fw-bold text-center">{producto.nombre}</h2>
                                        <p class="fw-bold text-center">{producto.descripcion}</p>
                                        <h3 class="text-success text-center">${producto.precioUnitario} COP</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }


    // let productos = [
    //     { nombre: "Tomate", precio: 2800, descrpcion: "Tomate del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/mesa-vista-superior-llena-deliciosa-composicion-alimentos.jpg?alt=media&token=6fcae70b-de2a-46dd-ab88-3649871b6762" },
    //     { nombre: "Salsa", precio: 1800, descrpcion: "Salsa del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/surtido-verduras-plato-ceramica.jpg?alt=media&token=28538dae-f453-4e49-a7cd-4297cd8f890c" },
    //     { nombre: "Tomate", precio: 3800, descrpcion: "Tomate del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/mesa-vista-superior-llena-deliciosa-composicion-alimentos.jpg?alt=media&token=6fcae70b-de2a-46dd-ab88-3649871b6762" },
    //     { nombre: "Salsa", precio: 4800, descrpcion: "Salsa del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/surtido-verduras-plato-ceramica.jpg?alt=media&token=28538dae-f453-4e49-a7cd-4297cd8f890c" },
    //     { nombre: "Tomate", precio: 5800, descrpcion: "Tomate del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/mesa-vista-superior-llena-deliciosa-composicion-alimentos.jpg?alt=media&token=6fcae70b-de2a-46dd-ab88-3649871b6762" },
    //     { nombre: "Salsa", precio: 6800, descrpcion: "Salsa del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/surtido-verduras-plato-ceramica.jpg?alt=media&token=28538dae-f453-4e49-a7cd-4297cd8f890c" },
    //     { nombre: "Tomate", precio: 7800, descrpcion: "Tomate del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/mesa-vista-superior-llena-deliciosa-composicion-alimentos.jpg?alt=media&token=6fcae70b-de2a-46dd-ab88-3649871b6762" },
    //     { nombre: "Salsa", precio: 8800, descrpcion: "Salsa del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/surtido-verduras-plato-ceramica.jpg?alt=media&token=28538dae-f453-4e49-a7cd-4297cd8f890c" },
    //     { nombre: "Tomate", precio: 9800, descrpcion: "Tomate del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/mesa-vista-superior-llena-deliciosa-composicion-alimentos.jpg?alt=media&token=6fcae70b-de2a-46dd-ab88-3649871b6762" },
    //     { nombre: "Salsa", precio: 1800, descrpcion: "Salsa del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/surtido-verduras-plato-ceramica.jpg?alt=media&token=28538dae-f453-4e49-a7cd-4297cd8f890c" },
    //     { nombre: "Tomate", precio: 3800, descrpcion: "Tomate del Campo", foto: "https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/mesa-vista-superior-llena-deliciosa-composicion-alimentos.jpg?alt=media&token=6fcae70b-de2a-46dd-ab88-3649871b6762" },

    // ]

    // return (
    //     <>
    //         <div class="row row-cols-1 row-cols-md-5 g-3 my-5">
    //             {
    //                 productos.map(function (producto) {
    //                     return (
    //                         <div class="col zoom" onClick={function () { pasarInfo(producto) }}>
    //                             <div class="card shadow h-100">
    //                                 <img src={producto.foto} alt="foto" class="img-fluid sombra" onMouseOver={cambiarFoto1} onMouseLeave={cambiarFoto2} />
    //                                 <h2 class="fw-bold text-center">{producto.nombre}</h2>
    //                                 <p class="fw-bold text-center">{producto.descrpcion}</p>
    //                                 <h3 class="text-success text-center">${producto.precio}</h3>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </>
    // )
}