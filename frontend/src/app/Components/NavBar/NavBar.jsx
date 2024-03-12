import './NavBar.css'

export default function NavBar(){
    return(
        <nav className='navBar'>
            <img src="./imagens/logoAprenser.png" alt="logo aprenser" />

            <ul>
                <li><a href="#">cursos</a></li>
                <li><a href="#">nossa escola</a></li>
                <li><a href="#">contatos</a></li>
            </ul>
        </nav>
    )
}