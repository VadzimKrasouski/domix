import {HouseType} from '../api/homea-api'
import React, {useCallback} from 'react'
import styles from './House.module.css'
import {Link} from 'react-router-dom'

type PropsType = {
    house: HouseType
    removeHandler: (_id: string) => void
}
export const House = React.memo(function ({house, removeHandler}: PropsType) {
        const onDeleteClickHandler = useCallback(() => removeHandler(house._id), [removeHandler, house._id])
        return (
            <div className={styles.house}>
                <Link to={'/houses/' + house._id}>About House</Link>
                <div>Owner: {house.owner}</div>
                <div>Address: {house.address}</div>
                <div>Area: {house.area}</div>
                <div>Price: {house.price}</div>
                <button onClick={onDeleteClickHandler}>Delete</button>
            </div>
        )
    }
)