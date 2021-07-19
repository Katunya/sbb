import React, { useState } from 'react';
import './index.css';

interface IAccordion {
    title:string,
    children: any
}

export default ({title, children}: IAccordion) => {
    const [opened, toggleState] = useState(true);

    function handleClick() {
        toggleState(!opened)
    }
    console.log(children)
    return (
        <div className={`Accordion ${ opened ? 'Accordion_opened' : ''}`}>
            <div className="Accordion-Title" onClick={handleClick}>{title}</div>
            <div className="Accordion-Body">{children}</div>
        </div>
    );
}
