export default function Footer() {
    return(
        <footer style={footerStyle}>
            <p>$copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados</p>
        </footer>
    );
}

const footerStyle = {
    background: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '1em 0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
}