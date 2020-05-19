import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext'

const Cockpit = (props: any) => {

    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    return (
        <div>
            Cockpit
            <header className="">
                <p>
                    React App - Midi Files
                    <button onClick={authContext.login} >Log in </button>
                </p>
            </header>
        </div>
    );
};

export default Cockpit;