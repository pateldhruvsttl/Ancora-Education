import React from 'react'
import DropDown from '../inputfield/DropDown'
import TextField from '../inputfield/TextField'
import './Ferpa.scss'
import '../../common/profile/Profile.scss'

interface fields {
    fields: {}[]
}
function FerpaDetaillForTab({ fields }: fields) {
    return (
        <div className='enrolltab'>
            {
                fields.map((field: any,index) => {
                    return (
                        field.isField == 'text' ?
                            <div key={index} className={`enrol-input ${field.colSpan}`}>
                                <div className={`form-group col-md-12`}>
                                    {field.title && <label>{field.title}{field.required && <span>*</span>}</label>}
                                    <input type={field.type} className="form-control" id="inputEmail4" placeholder={field.placeholder} />
                                </div>
                            </div>
                            :
                            <div key={index} className={`enrol-input ${field.colSpan}`}>
                                <div className="form-group col-md-12">
                                    {field.title && <label>{field.title}{field.required && <span>*</span>}</label>}
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default FerpaDetaillForTab