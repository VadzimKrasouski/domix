import React, {useEffect} from 'react';
import styles from './AboutHouse.module.css';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getHouseTC} from '../redux/houses-reducer';
import {AppRootStateType} from '../redux/store';
import {HouseType} from '../api/homea-api';

export const AboutHouse = React.memo(function () {
    const dispatch = useDispatch()
// @ts-ignore
    let { houseId } = useParams();
    useEffect(() => {
        dispatch(getHouseTC(houseId))
    }, )

    const house:HouseType = useSelector<AppRootStateType, any>(state => {
        debugger
       return state.houses.find(h => h._id === houseId)
    })

    return <div className={styles.container}>
        <h1>About house</h1>
        <div>{house.owner}</div>
        <div>{house.address}</div>
       <div>{house.area}</div>
       <div>{house.price}</div>
    </div>
})

