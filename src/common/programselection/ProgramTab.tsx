import React from 'react'
import Dimention from '../../utils/Dimention'
import ProgramTabForMobile from './ProgramTabForMobile'
import ProgramTabForOther from './ProgramTabForOther'

function ProgramTab() {
    const { width, height } = Dimention()

    return (
        width >= 823 ?
            <ProgramTabForOther />
            :
            <ProgramTabForMobile />
    )
}

export default ProgramTab
