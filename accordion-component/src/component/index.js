import React from 'react';
import Data from './Data';
import AccordionHeading from './AccordionHeading';
import AccordionContent from './AccordionContent';
import style from './Accordion.module.scss';

function Accordion() {
    return (
        <div className={style.verticalAccordion}>
            <ul>
                {Data.map((item, idx) => {
                     return (
                        <li key={idx}>
                            <AccordionHeading id={idx} className='text-[#000]' preExpanded={0} allowMultiSelect={true}> 
                                <div className='flex items-center'>
                                    <div className='font-bold'>
                                        {item.title}
                                    </div>
                                    <div className='pl-[10px]'>
                                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L9.25806 9L17 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </AccordionHeading>

                            <AccordionContent>
                                <div className='text-[12px] leading-[32px] tracking-wide'>
                                    {item.content}
                                </div>
                            </AccordionContent>
                        </li>
                     )
                })}
            </ul>
        </div>
    );
}

export default Accordion;