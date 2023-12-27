import BAR from "../assets/bars.png";
import NavigationLinks from "../components/navigation/links";
import Logo from "./logo";

function Navigation() {
    return (
        <div>
            <div className="d-flex justify-content-between my-2">

                <div className="d-flex justify-content-start">

                    <div className="icon-holder me-5">
                        <div
                            style={{
                            backgroundImage: `url(${BAR})`
                        }}
                            className="icon-img"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#staticBackdrop"
                            aria-controls="staticBackdrop"
                            alt=""></div>
                    </div>

                    <Logo />
                </div>

                <div>
                    <w3m-button/>
                </div>
            </div>

            <div
             style={{width:"20%"}}
                className="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <Logo />
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <NavigationLinks />
                </div>
            </div>
        </div>
    );
}

export default Navigation;