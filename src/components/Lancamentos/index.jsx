import { useState } from "react";
import azul from "../../assets/Lancamentos/batom-azul.png";
import vermelho from "../../assets/Lancamentos/batom-vermelho.png";
import marrom from "../../assets/Lancamentos/batom-marrom.png";
import base from "../../assets/Lancamentos/batom-base.png";

function Lancamentos() {
  // Funcionalidade do React que armazena estados.
  //   [estado atual, atualiza o estado]
  const [cor, setCor] = useState(azul);

  return (
    <>
      <h2>Lançamentos</h2>
      <img src={cor} alt="Modelo usando os batons de demonstração" />

      <button onClick={() => setCor(azul)}>Azul</button>
      <button onClick={() => setCor(vermelho)}>vermelho</button>
      <button onClick={() => setCor(marrom)}>Marrom</button>
      <button onClick={() => setCor(base)}>Base</button>
    </>
  );
}

export default Lancamentos;
