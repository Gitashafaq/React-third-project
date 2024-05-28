import './Nav.css';
function Nav() {

    return (
        <>
            <div className="Container-Fulls nav">
                <div className="Container">
                    {/* <!-- Menue section --> */}
                    <div className="nav-left">
                        <img src={require('../images/Logo.png')} alt="Logo" />
                        <span id="bar" onclick="showmenu()"><i className="fa-solid fa-bars" ></i></span>
                    </div>
                    <div className="nav-center" >
                        <ul id="menu">
                            <li><a href="#"> Home</a></li>
                            <li><a href="#"> Meta Tabs</a></li>
                            <li><a href="#"> Single Formats</a></li>
                            <li><a href="#"> Pages</a></li>
                            <li><a href="#"> Create Post</a></li>

                        </ul>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li><i className="fa-regular fa-sun"></i></li>
                            <li><i className="fa-solid fa-magnifying-glass"></i></li>
                            <li id="cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>0</span>
                            </li>
                            <li><a href="">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- End menue section  --> */}

        </>
    );
}

export default Nav;