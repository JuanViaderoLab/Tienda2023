import { useLocation } from "react-router-dom"

export function Ampliar() {

    let location = useLocation()
    let producto = location.state.producto
    console.log(producto)

    return (
        <>
            <br></br>
            <div class="container my-5">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <img src={producto.foto} class="img-fluid w-75" alt="foto" />
                    </div>
                    <div class="col-12 col-md-5 border p-3 rounded shadow text-center">
                        <h2 class="fw-bold">{producto.nombre}</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>

                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Mas Vendido</span>
                        <br></br>
                        <br></br>
                        <h3>${producto.precioUnitario} COP</h3>
                        <span class="badge text-bg-primary mt-3">Oferta</span>
                        <br></br>
                        <p class="text-muted mt-3">Hasta 48 Cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/visa.png?alt=media&token=9295c774-3111-49eb-901c-9d380ab1287b" class="img-fluid me-3" alt="icono" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/paypal.png?alt=media&token=8ed4052c-c865-4526-a0ba-25c740a76965" class="img-fluid me-3" alt="icono" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendacomida-6d3a8.appspot.com/o/american-express.png?alt=media&token=766f05ca-7b6b-49b3-af4f-51eb50c6d8b9" class="img-fluid" alt="icono" />
                        <br></br>
                        <i class="bi bi-truck display-4 my-5"></i>
                        <p>Entregas en Medellín y Valle Aburrá</p>
                        <br></br>
                        <form>
                            <label class="form-label">Cantidad:</label>
                            <input class="form-control" type="number" value={producto.cantidad}></input>
                            <button type="submit" class="btn btn-warning mt-2 w-100">
                                <i class="bi bi-cart4"></i> Añadir
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}