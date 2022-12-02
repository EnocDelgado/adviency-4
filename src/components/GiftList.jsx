import React, { useState } from 'react'
import { Gift } from './Gift';
import { GiftForm } from './GiftForm';

export const GiftList = () => {

    const [gifts, setGifts] = useState([]);

    const addGifts =  gift  => {
        if(! gift.text || /^\s*$/.test(gift.text)) {
            return;
        }

        const newGifts = [gift, ...gifts];

        setGifts( newGifts );
    };

    const removeGift = id => {
        const removeArr = [ ...gifts ].filter( gift => gift.id !== id )

        setGifts(removeArr)
    }

    return (
        <div>
            <h1>Add your gifts</h1>
            <GiftForm onSubmit={ addGifts }/>
            <Gift 
                gifts={ gifts }
                removeGift={ removeGift }
            />
        </div>
    )
}
