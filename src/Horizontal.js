import React from 'react';


export function HorizontalAccordion(props){
    return(
        <>
        </>
    )
}


export function HorizontalAccordionItem(props){
    return(
        <>
        
        </>
    )
}

export function HorizontalTitle(props) {
    console.log("props",props);
    return (
        <div style={{ ...props.style }} data-accordion-title>
            {props.children}
        </div>
    )
}

export function HorizontalContent(props) {
    return (
        <div style={{ ...props.style }} data-accordion-title>
            {props.children}
        </div>
    )
}
