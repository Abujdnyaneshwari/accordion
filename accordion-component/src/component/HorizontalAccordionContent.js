import React from 'react';
import './HorizontalAccordion.module.scss'

function HorizontalAccordionContent(props) {
    return (
        <section>
            <div>
                {props.children}
            </div>
        </section>
    );
}

export default HorizontalAccordionContent;