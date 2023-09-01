import React from "react";

const Inicio = () => {
  return (
    <>
      <div className="body">
        <header>
          <div className="holder">
            {/* <img src="./images/logo.png" width={100} alt="Transportes X" /> */}
            <h1>Cruceros To Ocean</h1>
          </div>
        </header>
        <main>
          <h2>Nuestros Servicios</h2>
          <div className="transporte">
            <img
              className="img"
              src="../images/cruceros.jpg"
              alt="Nuestros aviones"
              width="700px"
            />
            <div className="info">
              <h3>Servicio Internacional</h3>
              <p>
                Somos la tercera marca de cruceros más
                grande del mundo, así como líderes en Europa, América del Sur,
                la región del Golfo y Sudáfrica con más cuota de mercado y
                barcos que cualquier otra compañía de cruceros. También somos la
                marca de cruceros global de más rápido crecimiento con una
                fuerte presencia en los mercados del Caribe, América del Norte y
                el Lejano Oriente . Con sede en Ginebra, Suiza, formamos parte
                de MSC Group, el principal grupo de transporte y logística de
                propiedad privada con más de 300 años de tradición marítima.
                Contamos con más de 30.000 empleados a nivel global y vendemos
                vacaciones de crucero en varios países del mundo
              </p>
            </div>
          </div>
          <br />
          <div className="transporte2">
            <img
              className="img"
              src="../images/otros/crucero.jpg"
              alt="Crucero"
              width="700px"
              height="300px"
            />
            <div className="info">
              <h3>Servicio nacional</h3>
              <p>
                <strong>Cruceros</strong> desde Europa a Buenos Aires. Desde
                Buenos Aires a Europa o a Norte América. Un extraordinario viaje
                en barco como realizaron nuestros padres o abuelos. La
                oportunidad para disfrutar del barco y descansar... y descansar.
                Temporada de cruceros en el destino: De Diciembre a Marzo de
                cada año. Algunos puertos de salida: Buenos Aires, Rio de
                Janeiro / Santos y de los distintos puertos de Europa.
              </p>
            </div>
          </div>
          <br />
          <div className="transporte3 ">
            <img
              className="img"
              src="../images/otros/tren.jpg"
              alt="Interior del tren"
              width="700px"
            />
            <div className="info">
              <h3>Servicio Ferroviario</h3>
              <p>
                Lideramos el grupo de empresas <strong>Ferroviarias</strong> del
                Estado, aportando una visión estratégica en el cumplimiento de
                las inversiones. Articulamos con las unidades responsables del
                desarrollo y mantenimiento de la infraestructura ferroviaria,
                prestación de servicios de pasajeros y de servicios de cargas y
                logística del país.
              </p>
            </div>
          </div>
        </main>
        <footer>
          <p>Diseñado por Facundo - ©2023 </p>
        </footer>
      </div>
    </>
  );
};

export default Inicio;
