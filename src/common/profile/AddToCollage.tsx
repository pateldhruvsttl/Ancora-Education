import React, { useEffect, useState } from 'react'
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
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='add-sub-collage f'>
            {
                windowDimensions.width >= 730 ?
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