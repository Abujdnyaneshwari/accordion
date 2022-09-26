import React from 'react';

function AccordionHeading(props) {
    console.log("props",props);

    return (
        <div>
            <input type="checkbox" id={`accordion_item_${props.id}`} name={`accordion_item_${props.id}`} />
            <label htmlFor={`accordion_item_${props.id}`}>
                <div>
                    {props.title}
                </div>
            </label>
        </div>
    );
}

export default AccordionHeading;