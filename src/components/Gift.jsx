import React, { useState } from 'react'
import { GiftList } from './GiftList';
import { RiCloseCircleLine } from 'react-icons/ri'

export const Gift = ({ gifts, removeGift }) => {

    const [delet, setDelet] = useState({
        id: null,
        value: ''
    });


    return (
        gifts.map( (gift, index) => (
            <div className='text-button'>
                <div key={ index } className='gift-text'>
                    <div key={ gift.id } onClick={ () => ( gift.id )}>
                        { gift.text }
                    </div>
                    <div className='icon'>
                        <RiCloseCircleLine 
                            onClick={ () => removeGift( gift.id )}
                            className='delete-icon'
                        />
                    </div>
                </div>
            </div>
        ))
       
    )
}
