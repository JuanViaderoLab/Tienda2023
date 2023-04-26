import './Home.css'
import { Menu } from '../Menu/Menu'
import { Acerca } from '../Acerca/Acerca'
import { Info } from '../Info/Info'
import { Servicios } from '../Servicios/Servicios'

export function Home() {
    return (
        <>
            <section>
                <div class="banner">
                    <h2>Momentos de mi vida</h2>
                    <p>Cada cosa que decido, hace parte de mi ser ...</p>
                    <a href="#">Leer Más</a>
                </div>
            </section>
            <Acerca></Acerca>
            <Info></Info>
            <Servicios></Servicios>
        </>
    )
}