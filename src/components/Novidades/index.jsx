import "./novidades.scss";
import maquiagens from "../../assets/Novidades/maquiagens.png";

function Novidades() {
  return (
    <section className="novidades">
        <h2>Novidades para você</h2>
        <img src={maquiagens} alt="Banner mostrando algumas maquiagens" id="banner-maquiagens" />
    </section>
  );
}

export default Novidades;
