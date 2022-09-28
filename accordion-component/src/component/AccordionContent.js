import React from 'react';
import './Accordion.module.scss';

function AccordionContent(props) {
    console.log("props", props.children);
    return (
        <section>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export default AccordionContent;