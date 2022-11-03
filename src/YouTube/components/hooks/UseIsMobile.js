import { useState } from "react";

const mobileSize = 600;

const UseIsMobile = () => {
    const [mobile, setMobile] = useState(null);
    let isMobile;
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < mobileSize ? true : false;
        setMobile(isMobile);
    })
    return mobile;
}
export default UseIsMobile;