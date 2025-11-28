import "./footer.scss";
import instagram from "../../assets/Footer/instagram.png";
import facebook from "../../assets/Footer/facebook.png";
import youtube from "../../assets/Footer/youtube.png";
import twitter from "../../assets/Footer/twitter.png";

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
        <h3>FORMAS DE PAGAMENTO</h3>
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
        <div className="box-icones2">
          <img src={instagram} alt="Logo do Instagram" />
          <img src={facebook} alt="Logo do Facebook" />
          <img src={youtube} alt="Logo do Youtube" />
          <img src={twitter} alt="Logo do Twitter" />
        </div>
      </article>
    </section>
  );
}

export default Footer;
