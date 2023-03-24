import React from 'react'
import './input.scss'

interface field {
    type: string;
    placeholder: string;
    title: string;
    required: boolean;
    colSpan: string;
}
function DropDown({ type, placeholder, title, required ,colSpan}: field) {
    return (
        <div className={`text-field ${colSpan}`}>
            <div className="form-group col-md-12">
                <label htmlFor="inputState">{title}{required && <span>*</span>}</label>
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