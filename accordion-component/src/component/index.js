import React from 'react';
import Data from './Data';
import AccordionItem from'./AccordionItem';
import AccordionHeading from './AccordionHeading';
import AccordionContent from './AccordionContent';


function Accordion() {
    return (
        <div>
            <ul>
                {Data.map((item, idx) => {
                     return (
                        <li key={idx}>
                            <AccordionItem {...item} />
                        </li>
                     )
                })}
            </ul>
        </div>
    );
}

export default Accordion;