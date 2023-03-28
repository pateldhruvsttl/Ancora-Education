import React, { useEffect, useState } from 'react'
import './input.scss'

interface field {
    type: string;
    placeholder: string;
    title: string;
    required: boolean;
    colSpan: string;
    isType: string
}


function DropDown({ type, placeholder, title, required, colSpan, isType }: field) {
    const [dimensions, setDimensions] = useState(getDimensions());

    function getDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }
    useEffect(() => {
        function handleResize() {
            setDimensions(getDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log('isType----->', dimensions, isType);

    return (
        <div className={dimensions.width <= 730 && isType === "EduBack" ? `text-field change-width ${colSpan}`:`text-field ${colSpan}` }>
            <div className="form-group col-md-12">
                <label className="form-label" htmlFor="inputState">{title}{required && <span>*</span>}</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>
        </div>
    )
}

export default DropDown