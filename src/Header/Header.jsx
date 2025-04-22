import Logo from './Logo'

function Header() {
    return(
        <div className="header flex justify-center">
            <div className="logo">
                <Logo/>
            </div>
        </div>
    )
}

export default Header