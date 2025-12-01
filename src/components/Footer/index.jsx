import "./footer.scss";

function Footer() {
  return (
    <section className="footer">
      <article className="atendimento">
        <h3>Atendimento</h3>
        <ul>
            <li><a href="#" target="_blank">Fale Conosco</a></li>
            <li><a href="#" target="_blank">Perguntas Frequentes</a></li>
            <li><a href="#" target="_blank">Meus Pedidos</a></li>
            <li><a href="#" target="_blank">Nossas Lojas</a></li>
        </ul>
      </article>

      <article className="pagamento">
        <h3>Formas de pagamento</h3>
            <ol>
                <a href="#" target="_blank">
                    <li id="mastercard"></li>
                </a>
                <a href="#" target="_blank">
                    <li id="visa"></li>
                </a>
                <a href="#" target="_blank">
                    <li id="pix"></li>
                </a>
                <a href="#" target="_blank">
                    <li id="boleto"></li>
                </a>
            </ol>
      </article>

      <article className="redes-sociais">
        <h3>Siga-nos nas redes sociais</h3>
        <ol>
          <a href="#" target="_blank">
            <li id="instagram"></li>
          </a>
          <a href="#" target="_blank">
            <li id="facebook"></li>
          </a>
          <a href="#" target="_blank">
            <li id="youtube"></li>
          </a>
          <a href="#" target="_blank">
            <li id="twitter"></li>
          </a>
        </ol>
      </article>
    </section>
  );
}

export default Footer;
