import React, { useState } from 'react'
import './input.scss'
import TextFieldInput from '@mui/material/TextField';
interface field {
    type: string;
    placeholder: string;
    title: string;
    required: boolean;
    colSpan: string;
}
function TextField({ type, placeholder, title, required, colSpan }: field) {
    const [value,setValue] = useState('')

    return (
        <div className={`text-field ${colSpan}`}>
            <div className={`form-group col-md-12`}>
                {/* {title && <label>{title}{required && <span>*</span>}</label>} */}

                <TextFieldInput
                    id={required ? "outlined-required" : "outlined-password-input"}
                    type="text"
                    className="form-control"
                    size='small'
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    error={required && value === ""}
                    label={required ? `${placeholder}*` : title}
                    
                />


                {/* <input type={type} className="form-control" id="inputEmail4" placeholder={placeholder} /> */}
            </div>
        </div>
    )
}

export default TextField