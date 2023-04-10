import React, { useEffect, useState } from 'react'
import Dimention from '../../utils/Dimention';
import DropDown from '../inputfield/DropDown'
import TextField from '../inputfield/TextField'
import '../profile/Profile.scss'
import AddCollageToMobile from './AddCollageToMobile';
import AddCollageToOther from './AddCollageToOther';

type IconType = (props: any) => JSX.Element;
interface field {
    data: {}[]
    Icon: IconType
}

function AddToCollage({ data, Icon }: field) {
    const { width, height } = Dimention()

    return (
        <div className='add-sub-collage'>
            {
                width >= 730 ?
                    <AddCollageToOther data={data} Icon={Icon} />
                    :
                    <div className='form-row'>
                        <AddCollageToMobile data={data} Icon={Icon} />
                    </div>
            }
        </div>
    )
}

export default AddToCollage