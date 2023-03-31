import React from 'react'
import './Confirmation.scss'
import IcnEdit from '../../assets/icons/IcnEdit'
import Dimention from '../../utils/Dimention'

function EditButton() {
  const { width, height } = Dimention()
  return (
    <div className='edit-common-btn'>
      <button>
        <span className='edit-iconn'>
          {
            width <= 599 ?
              <IcnEdit color={'#506588'} width={19} height={19} />
              :
              <IcnEdit color={'#506588'} width={12} height={12} />

          }
        </span>
        {
          width >= 599 && <span className='edit-txt'>Edit</span>
        }
      </button>
    </div>
  )
}

export default EditButton