import React from 'react';
import './Accordion.module.scss';

function AccordionContent(props) {
    console.log("props",props);
    return (
        <div className='accordionContent'>
             {props}
        </div>
    );
}

export default AccordionContent;