import LOGO from "../assets/logo.png";

function Logo() {
    return ( 
        <div>
            <div className="d-flex justify-content-start">
            <div className="logo-holder">
                        <div
                            style={{
                            backgroundImage: `url(${LOGO})`
                        }}
                            className="logo-img"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#staticBackdrop"
                            aria-controls="staticBackdrop"
                            alt=""></div>
                    </div>

                    <h4
                        className="mt-1"
                        style={{
                        fontWeight: "bold"
                    }}>GROKX</h4>
            </div>
        </div>
     );
}

export default Logo;