import HOME from "../../assets/home.png";
import SWAP from "../../assets/swap.png";
import STAKE from "../../assets/stake.png";
import NavigationLink from "./link";

function NavigationLinks() {
    return ( 
        <div className="d-flex flex-column">
            <div><NavigationLink icon={HOME} name={`Home`} route={""} /></div>
            <div><NavigationLink icon={SWAP} name={`Swap`} route={"swap"}/></div>
            <div><NavigationLink icon={STAKE} name={`Stake`} route={"stake"}/></div>
        </div>
     );
}

export default NavigationLinks;