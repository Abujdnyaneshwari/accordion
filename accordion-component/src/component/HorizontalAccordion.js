import React from 'react';
import Data from './Data';
import HorizontalAccordionHeading from './HorizontalAccordionHeading';
import HorizontalAccordionContent from './HorizontalAccordionContent';
import style from './HorizontalAccordion.module.scss';

function HorizontalAccordion() {
    return (
        <div className={style.horizontalAccordion}>
            <ul>
                {Data.map((item, idx) => {
                    return (
                        <li key={idx}>

                            <HorizontalAccordionHeading  id={idx}>
                                <div className='flex justify-center items-center'>
                                    <div className='font-bold'>
                                        {item.title}
                                    </div>

                                    {/* <div className='pl-[10px]'>
                                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L9.25806 9L17 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div> */}

                                </div>
                            </HorizontalAccordionHeading>

                            <HorizontalAccordionContent>
                                <div className='text-[12px] leading-[32px] tracking-wide'>
                                    {item.content}
                                </div>
                            </HorizontalAccordionContent>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default HorizontalAccordion;