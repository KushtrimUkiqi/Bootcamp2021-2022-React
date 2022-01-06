import React from 'react';
import './Pager.css';

//hard coded values
const previous = 1;
const next = 3;


export default function Pager({pages,current}) {
    return (
        <div id="pagerComponent">
            {previous && <div id="previousPagerController">
                <div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 17L6 12L11 7" stroke="#A41A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 17L13 12L18 7" stroke="#A41A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div> 
                <div>{previous}</div>
        </div>}

            <div id="currentPageComponent">{current}</div>
            {next && <div id="nextPagerController"><div>{next}</div> 
                <div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 17L18 12L13 7" stroke="#A41A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 17L11 12L6 7" stroke="#A41A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>}
        </div>
    )
}
