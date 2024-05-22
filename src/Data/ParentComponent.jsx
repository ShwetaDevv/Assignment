// ParentComponent.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FetchData from './FetchData';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [data, setData] = useState([]);

    const handleDataChange = (newData) => {
        setData(newData);
    };

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/fetch-data">Fetch Data</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/fetch-data">
                    <FetchData onDataChange={handleDataChange} />
                </Route>
                <Route path="/child-component">
                    <ChildComponent data={data} />
                </Route>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

export default ParentComponent;
