import React from 'react'
import DropDown from '../inputfield/DropDown'
import TextField from '../inputfield/TextField'

interface field {
  data: {}[]
}
function GetInputField(props: field) {
  const renderInput = () => {
    return (
      props.data.map((field: any) => {
        return (
          field.isField == 'text' ?
            <TextField {...field} /> : <DropDown {...field} />
        )
      })
    )
  }
  return (
    <>
      {renderInput()}
    </>
  )
}

export default GetInputField