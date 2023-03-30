import React, { useEffect, useState } from 'react'
import Dimention from '../../utils/Dimention';
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
    const { width, height } = Dimention()

    return (
        <div className={width <= 730 && isType === "EduBack" ? `text-field change-width ${colSpan}` : `text-field ${colSpan}`}>
            <div className="form-group col-md-12">
                <label>{title}{required && <span>*</span>}</label>
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