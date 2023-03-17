import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/img/fb.png" alt="imagens facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/img/tw.png" alt="imagens twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/img/ig.png" alt="imagens instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/img/logo.png" alt="logo" />
        </section>
        <section>
            <p className='assi'>
                Desenvolvido por Deivid.
            </p>
        </section>
    </footer>)
}

export default Rodape