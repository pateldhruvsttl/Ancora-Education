import React from 'react'
import IcnBusiness from '../../assets/icons/IcnBusiness'
import IcnEducation from '../../assets/icons/IcnEducation'
import IcnHealthCare from '../../assets/icons/IcnHealthCare'
import IcnSkillTrade from '../../assets/icons/IcnSkillTrade'
import IcnTechnology from '../../assets/icons/IcnTechnology'
import './ProgramTab.scss'

function ProgramTabForOther() {
    return (
        <div className='cardTabBox'>
            {
                tabs.map((item, index) => {
                    const Icon = item.Icon
                    return (
                        <div key={index} className={item.title === 'Business' ? 'cardTab shadeOne' : 'cardTab shadeTwo'}>
                            <div className={index === 0 || index === tabs.length - 1 ? 'innerCardTab removeTabBorder' : 'innerCardTab'}>
                                <div className='programTabs'><Icon width={19} height={17} /></div>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProgramTabForOther

const tabs = [
    {
        Icon: IcnBusiness,
        title: 'Business'
    },
    {
        Icon: IcnEducation,
        title: 'Design & Education'
    },
    {
        Icon: IcnHealthCare,
        title: 'Healthcare'
    },
    {
        Icon: IcnSkillTrade,
        title: 'Skilled Trades - Other'
    },
    {
        Icon: IcnTechnology,
        title: 'Technology'
    },
]