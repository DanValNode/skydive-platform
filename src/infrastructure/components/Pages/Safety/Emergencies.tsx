import React from 'react'
import Footer from '../../Layout/Footer'
import MainBannerSection from '../../Controls/MainBannerSection'
import MiddleContainer from '../../Controls/MiddleContainer'
import data from '../../../utils/emergencies-db.json'

type MainProps = {
    title: string
}

const info = data.emergencies.map(x => {
  return {
    image: x.mainImage,
    text: x.title,
    subtext: x.text,
    id: x.identifier,
    type: x.type
  }
})

const Emergencies: React.FC<MainProps> = ({ title }) => {
  return (
        <div className="main">
            <MainBannerSection
                title="Emergencias en Paracaidismo"
                description="Aquí encontraras toda la información acerca de las emergencias que se pueden producir durante la practica del deporte"
                image="assets/images/emergencies/emergency-page-bg.jpg"
            />
            <hr className="divider-w" />
            <MiddleContainer items={info.filter(x => x.type === 'plane')}
                             title="Emergencias en el avión"
                             description="Por debajo de 1000ft no se debe abandonar el avión y se debe tomar posición de impacto, si se abandona la nave de 1000ft a 3000ft se debe abrir la reserva directamente, si es por encima de 3000ft se debe abrir el principal <br /> <br/> Siempre la mejor solución es la prevención, cuida y protege tus anillas y pines, ten cuidado al salir en las salidas y conoce las caracteristicas de la aeronave de la cual vas a saltar"
                             subtitle="En el avión los procedimientos en caso de emergencia dependen de la altura que lleve."
            />
            <hr className="divider-d" />
            <MiddleContainer items={info.filter(x => x.type === 'high-speed')}
                             title="Emergencias de alta velocidad"
                             subtitle="Se les llama así porque todavia llevamos una alta tasa de velocidad en caída libre"
                             description="En este tipo de malfunciones no se cuenta con mucho tiempo, en la mayoría de los casos la solución es realizar el procedimiento de emergencia, en caso de ver una posible solución intentarlo máximo 2 veces, no más de 2 seg adicionales y si no funciona inmediatamente realizar el procedimiento de emergencia"
            />
            <hr className="divider-d" />
            <MiddleContainer items={info.filter(x => x.type === 'low-speed')}
                             title="Emergencias de baja velocidad"
                             subtitle="Se les llama así porque llevamos una baja tasa de velocidad en caida libre, tenemos algo de sustentación (minimo 5 celdas del paracaidas encendidas)"
                             description=""
            />
            <hr className="divider-d" />
            <section className="module">
                <div className="container">
                    <h4>Datos adicionales</h4>
                    <p><b>La altura de decisión son 2500ft</b> <br /> <b style={{ color: 'red' }}>Nunca liberes por debajo de 1000ft, abre el reserva sin liberar</b> </p>
                </div>
            </section>
            <Footer/>
        </div>
  )
}

export default Emergencies
