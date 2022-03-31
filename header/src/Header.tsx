import React from 'react';

import "./index.scss";

const Header: React.FC = () => {
    const [loguedin, setLogedin] = React.useState(false);

    return (
        <div className="flex justify-between p-2">
            <div className="text-blue-500">
                <h1>HOME</h1>
            </div>
            <nav>
                {loguedin ? (
                <button className="btn btn-primary" onClick={() => setLogedin(!loguedin)}>
                    logIn
                </button>
                ) : (
                <button className="btn btn-primary" onClick={() => setLogedin(!loguedin)}>
                    salir
                </button>
                )}
            </nav>
        </div>
    );
}

export default Header;