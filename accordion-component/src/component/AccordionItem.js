import React from 'react';
import './HorizontalAccordion.module.scss';

function AccordionItem(props) {
    return (
        <div>
         <input type="checkbox" id={`accordion_item_${props.id}`} name={`accordion_item_${props.id}`}/>
         <label htmlFor={`accordion_item_${props.id}`}>
             <div>
                 {props.title}
             </div>
         </label>
         <section>
             <div>
                 {props.content}
             </div>
         </section>
      </div>
    );
}

export default AccordionItem;   