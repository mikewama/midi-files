import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext'

const Cockpit = (props: any) => {

    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.tsx] useEffect');
        // Http request...
        // setTimeout(() => {
        //   alert('Saved data to cloud!');
        // }, 1000);
        // toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.tsx] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.tsx] 2nd useEffect');
        return () => {
            console.log('[Cockpit.tsx] cleanup work in 2nd useEffect');
        };
    });

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