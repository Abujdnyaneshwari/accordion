import React from 'react';
import './Accordion.module.scss';

function AccordionContent(props) {
    console.log("props",props.children);
    return (
        <div className='accordionContent'>
             {props.children}
        </div>
    );
}

export default AccordionContent;