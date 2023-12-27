import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Swap from './Swap';
import Stake from './Stake';
import Navigation from '../shared/nav';

function PagesLayout() {
    return (
        <div>
            <Router>
                <div className="container">
                    <Navigation/>
                    <div >
                        <Routes>
                            <Route exact path="/" element={< Home />}/>
                            <Route exact path="/swap" element={< Swap />}/>
                            <Route exact path="/stake" element={< Stake />}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default PagesLayout;