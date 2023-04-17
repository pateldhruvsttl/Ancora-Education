import React, { useEffect, useState } from 'react'
import Dimention from '../../utils/Dimention';
import './input.scss'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';

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
    const [value, setValue] = useState('');
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    return (
        <div className={width <= 730 && isType === "EduBack" ? `text-field change-width ${colSpan}` : `text-field ${colSpan}`}>
            <div className="form-group col-md-12">
                {/* {title && <label>{title}{required && <span>*</span>}</label>} */}
                {/* <select id="inputState" className="form-control">
                    <option selected>Choose</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select> */}
                <TextField
                    id={required ? "outlined-required" : "outlined-select-currency"}
                    label={required ? `${title}*` : title}
                    select
                    value={value}
                    defaultValue={value}
                    className="form-control"
                    error={required && value === ""}
                    helperText={required && value === "" && "Please select value"}
                    size={'small'}
                    onChange={handleChange}
                    
                >
                    <MenuItem value={10}>{placeholder}</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
            </div>
        </div>
    )
}

export default DropDown