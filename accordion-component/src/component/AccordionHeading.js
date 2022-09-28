import React from 'react';

function AccordionHeading(props) {
    console.log("props",props);
    return (
        <>
            <input type={props.allowMultiSelect ? 'checkbox' : 'radio'} id={`accordion_item_${props.id}`} name={`accordion_item`} defaultChecked={props.id  == props.preExpanded ? 'true': ''}/>
            <label htmlFor={`accordion_item_${props.id}`}>
                <div>
                    {props.children}
                </div>
            </label>
        </>
    );
}

export default AccordionHeading;