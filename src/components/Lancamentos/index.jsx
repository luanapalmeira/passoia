import { useRef, useState } from "react";
import "./lancamentos.scss";
import azul from "../../assets/Lancamentos/batom-azul.png";
import vermelho from "../../assets/Lancamentos/batom-vermelho.png";
import marrom from "../../assets/Lancamentos/batom-marrom.png";
import base from "../../assets/Lancamentos/batom-base.png";
import rosa from "../../assets/Lancamentos/batom-rosa.png";
import vermelhoRosado from "../../assets/Lancamentos/batom-vermelho-rosado.png";
import lilas from "../../assets/Lancamentos/batom-lilas.png";
import marromEscuro from "../../assets/Lancamentos/batom-marrom-escuro.png";
import estrelas from "../../assets/Lancamentos/cinco-estrelas.png";
import kitGloss from "../../assets/Lancamentos/kit-gloss.png";
import kitBatomLiquido from "../../assets/Lancamentos/kit-batom-liquido.png";
import kitBatomBala from "../../assets/Lancamentos/kit-batom-em-bala.png";
import setaEsquerda from "../../assets/Lancamentos/seta-esquerda.png";
import setaDireita from "../../assets/Lancamentos/seta-direita.png"

function Lancamentos() {
  // Funcionalidade do React que armazena estados.
  //   [estado atual, atualiza o estado]
  const [cor, setCor] = useState(azul);

  // Referência do carrossel
  const carouselRef = useRef(null);

  const scrollLeft = () => {
  carouselRef.current.scrollBy({
    left: -260,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  carouselRef.current.scrollBy({
    left: 260,
    behavior: "smooth",
  });
};

  return (
    <section className="lancamentos">
      <h2>Aproveite os lançamentos</h2>
      <div className="imagens-kits">
        <img src={kitGloss} alt="Foto de 2 glosses" />
        <img src={kitBatomLiquido} alt="Foto de 3 batons líquidos" />
        <img src={kitBatomBala} alt="Foto de 3 batons em bala" />
      </div>

      <img src={cor} alt="Modelo usando os batons de demonstração" />

      <article className="box-testagem">
        <img src={estrelas} alt="Estrelas de avaliação" />
        <h4>Matte Premium</h4>
        <p className="subtitulo">Cores disponíveis</p>

        <div className="carrossel-container">
          <button className="nav-btn" onClick={scrollLeft}> <img src={setaEsquerda} alt="ícone de seta para a esquerda" /> </button>

          <div className="carrossel" ref={carouselRef}>
            <button id="azul" onClick={() => setCor(azul)}>Azul</button>
            <button id="vermelho" onClick={() => setCor(vermelho)}>vermelho</button>
            <button id="marrom" onClick={() => setCor(marrom)}>Marrom</button>
            <button id="base" onClick={() => setCor(base)}>base</button>
            <button id="rosa" onClick={() => setCor(rosa)}>rosa</button>
            <button id="vermelhoR" onClick={() => setCor(vermelhoRosado)}>vermelhor</button>
            <button id="lilas" onClick={() => setCor(lilas)}>lilás</button>
            <button id="marromE" onClick={() => setCor(marromEscuro)}>marromE</button>
          </div>

          <button className="nav-btn" onClick={scrollRight}> <img src={setaDireita} alt="ícone de seta para a direita" /> </button>
        </div>

        <p className="subtitulo-2">Descrição</p>
        <p className="descricao">
          O Batom Matte possui uma fórmula inovadora desenvolvida para entregar
          o máximo de cor na primeira aplicação com um deslize suave e macio.
          Tem acabamento matte aveludado e manteiga de manga que ajuda a
          hidratar e a proteger os lábios contra ressecamento. Ajuda na
          hidratação dos lábios, textura fina e macia que não pesa nos lábios.
        </p>
      </article>
    </section>
  );
}

export default Lancamentos;
