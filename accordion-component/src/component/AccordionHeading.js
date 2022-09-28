import React from 'react';

function AccordionHeading(props) {
    console.log("Prp",props);
    return (
        <>
            <input type="checkbox" id={`accordion_item_${props.id}`} name={`accordion_item`} />
            <label htmlFor={`accordion_item_${props.id}`}>
                <div>
                    {props.children}
                </div>
            </label>
        </>
    );
}

export default AccordionHeading;