import React from 'react';

function HorizontalAccordionHeading(props) {
    return (
        <>
            <input type="radio" id={`horizontal_accordion_item_${props.id}`} name={`horizontal_accordion_item`} defaultChecked={props.id  == props.preExpanded ? 'true': ''} />
            <label htmlFor={`horizontal_accordion_item_${props.id}`}>
                <div>
                    {props.children}
                </div>
            </label>
        </>
    );
}

export default HorizontalAccordionHeading;