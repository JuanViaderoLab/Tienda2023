import Swal from 'sweetalert2'
import { useState, useEffect } from "react"
import { registarProductoEnBd } from "../services/agregarProducto"

// Agregar Productos
export function Administrador() {

    const [nombre, setNombre] = useState("")
    const [foto, setFoto] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [precio, setPrecio] = useState("")
    const [descuento, setDescuento] = useState("")
    const [marca, setMarca] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaentrada, setFechaEntrada] = useState("")
    const [fechavencimiento, setFechaVencimiento] = useState("")

    function procesarFormulario(evento) {
        evento.preventDefault()
        let datosProducto = {
            "nombre":nombre,
            "foto":foto,
            "cantidad":cantidad,
            "precioUnitario":precio,
            "descuento":descuento,
            "marca":marca,
            "descripcion":descripcion,
            "fechaentrada":fechaentrada,
            "fechavencimiento":fechavencimiento,
        }
        console.log(datosProducto)
        registarProductoEnBd(datosProducto)
        .then(function(respuesta) {
            Swal.fire(
                'Se registro con exito el producto',
                'Todo ha sido Confirmado',
                'success'
              )
        })
        .catch(function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logro registrar el producto',
                footer: '<a href="">Soporte Técnico</a>'
              })
        })
    }


    return (
        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-7">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/vista-lateral-carne-frita-papas-fritas-salsa-tomate.jpg?alt=media&token=7fb44bea-6ffc-4fea-8923-980523e132a3" alt="foto" class="img-fluid" />
                    </div>

                    <div class="col-4">
                        <h2 class="text-center">Registro de Compra</h2>
                        <form class="my-6" onSubmit={procesarFormulario}>
                            <div class="row mt-4">

                                <div class="col-4">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Nombre"
                                            id="nombre"
                                            onChange={(evento) => {
                                                setNombre(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Foto"
                                            id="foto"
                                            onChange={(evento) => {
                                                setFoto(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="number"
                                            class="form-control"
                                            placeholder="Cantidad"
                                            id="cantidad"
                                            onChange={(evento) => {
                                                setCantidad(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-4 mt-2">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Precio"
                                            id="precio"
                                            onChange={(evento) => {
                                                setPrecio(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-4 mt-2">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Descuento"
                                            id="descuento"
                                            onChange={(evento) => {
                                                setDescuento(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-4 mt-2">
                                    <div class="input-group mb-2">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Marca"
                                            id="marca"
                                            onChange={(evento) => {
                                                setMarca(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-12 mt-2">
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <textarea
                                            class="form-control"
                                            aria-label="With textarea"
                                            rows="6"
                                            placeholder="Decripción"
                                            id="descripcion"
                                            onChange={(evento) => {
                                                setDescripcion(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-6 mt-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Fecha Entrada"
                                            id="fechaentrada"
                                            onChange={(evento) => {
                                                setFechaEntrada(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="col-6 mt-4">
                                    <div class="input-group mb-">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-basket-fill"></i>
                                        </span>

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Fecha Vencimiento"
                                            id="fechavencimiento"
                                            onChange={(evento) => {
                                                setFechaVencimiento(evento.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                            <button type="submit" class="btn btn-outline-success w-100">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}