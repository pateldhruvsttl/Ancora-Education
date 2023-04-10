import React from 'react'
import './input.scss'

interface field {
    type: string;
    placeholder: string;
    title: string;
    required: boolean;
    colSpan: string;
}
function TextField({ type, placeholder, title, required, colSpan }: field) {
    return (
        <div className={`text-field ${colSpan}`}>
            <div className={`form-group col-md-12`}>
                {title && <label>{title}{required && <span>*</span>}</label>}
                <input type={type} className="form-control" id="inputEmail4" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default TextField