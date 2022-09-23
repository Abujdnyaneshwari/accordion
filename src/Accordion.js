import React from 'react';


export function Accordion(props){
    return(
        <>
        </>
    )
}


export function AccordionItem(props){
    return(
        <>
        
        </>
    )
}

export function Title(props) {
    console.log("props",props);
    return (
        <div style={{ ...props.style }} data-accordion-title>
            {props.children}
        </div>
    )
}

export function Content(props) {
    return (
        <div style={{ ...props.style }} data-accordion-title>
            {props.children}
        </div>
    )
}
