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

                            <HorizontalAccordionHeading  id={idx} preExpanded={0}>
                                <div className='flex justify-center items-center'>
                                    <div className='font-bold origin-center -rotate-90'>
                                        {item.title}
                                    </div>
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