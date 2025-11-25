import "./looks.scss";
import imgLabios from "../../assets/Looks/lábios.png";
import imgOlhos from "../../assets/Looks/olhos.png";
import imgRosto from "../../assets/Looks/rosto.png";
import imgTendencia from "../../assets/Looks/tendência.png";

function Looks() {
  return (
    <section className="looks">
      <h2>Looks e dicas de maquiagem</h2>
      <section className="box-imagens">
        <img src={imgLabios} alt="Modelo passando lip oil na boca" />

        <img src={imgOlhos} alt="Foto de um olho maquiado" />

        <img src={imgRosto} alt="Modelo se maquiando" />

        <img src={imgTendencia} alt="Modelo segurando uma paleta de sombras e com um lápis na boca" />
      </section>
    </section>
  );
}

export default Looks;
