import { Link } from "react-router-dom";

function NavigationLink({icon, name, route}) {
    return (
        <div>
            <Link to={route}>
                <div className="d-flex justify-content-start my-3">
                    <div className="icon-holder me-3">
                        <div
                            style={{
                            backgroundImage: `url(${icon})`
                        }}
                            className="icon-img"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#staticBackdrop"
                            aria-controls="staticBackdrop"
                            alt=""></div>
                    </div>

                    <div>{name}</div>
                </div>
            </Link>
        </div>
    );
}

export default NavigationLink;