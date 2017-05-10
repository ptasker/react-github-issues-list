import React from 'react';

const Header = (props) => {
    return (
        <header className="myheader">

            <h3>{props.title}</h3>
        </header>
    );
};

export default Header;