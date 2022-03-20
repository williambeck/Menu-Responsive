import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Menu = () => (
    <div>
        <nav className="navbar"> {/*referente a navegação*/}
            <div className="max-width"> {/*altura maxima do menu*/}
                <div className="logo">{/*referente a logo*/}
                    <a href="/">LOGO</a> {/*link para a pagina raiz*/}
                </div>
                <ul className="menu"> {/*lista do menu*/}
                    <li><a href="/" className="menu-btn">Home</a></li>
                    <li><a href="/projects" className="menu-btn">Projects</a></li>
                    <li><a href="/about" className="menu-btn">About Us</a></li>                    
                    <li><a href="/contatc" className="menu-btn">Contact</a></li>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-bars"></i>
                     {/* o Menu/icone esta subistitundo o menu */}
                </div>
            </div>
        </nav>
    </div>
);

export default Menu;