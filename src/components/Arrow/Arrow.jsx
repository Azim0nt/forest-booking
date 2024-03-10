import './Arrow.scss'
import { useState, useEffect } from 'react';

function Arrow(){

    const [isPositionFixed, setIsPositionFixed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        const element = document.querySelector(".fixedElement");
        const isPositionFixed = element.style.position === "fixed";
        if (window.scrollY > 3200 && !isPositionFixed) {
            element.style.position = "fixed";
            element.style.top = "85%";
            element.style.left = "85%";
            element.style.zIndex = "100";
        }
        if (window.scrollY < 3200 && isPositionFixed) {
            element.style.position = "static";
            element.style.top = "0px";
        }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return(
        <a href='#prices' onClick={() => setShowMenuBurger('')} className='fixedElement'>
            <svg width="32" height="56" viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ii_1487_4263)">
<rect width="32" height="56" rx="8" fill="#F7FDFB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16 17.4142L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071C10.9024 20.3166 10.9024 19.6834 11.2929 19.2929L15.2929 15.2929Z" fill="#232221"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 19C16.5523 19 17 19.4477 17 20L17 40C17 40.5523 16.5523 41 16 41C15.4477 41 15 40.5523 15 40L15 20C15 19.4477 15.4477 19 16 19Z" fill="#232221"/>
</g>
<defs>
<filter id="filter0_ii_1487_4263" x="-2" y="-2" width="36" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2" dy="-2"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.231373 0 0 0 0 0.231373 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1487_4263"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.231373 0 0 0 0 0.231373 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_1487_4263" result="effect2_innerShadow_1487_4263"/>
</filter>
</defs>
            </svg>
        </a>
    )
}

export {Arrow}