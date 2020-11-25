import React, {useCallback, useEffect} from 'react';
import styles from './Houses.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {removeHouseTC, setAllHousesTC} from '../redux/houses-reducer';
import {AppRootStateType} from '../redux/store';
import {HouseType} from '../api/homea-api';
import {House} from './House';


export const Houses = React.memo(function () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAllHousesTC())
    }, [dispatch])
    const houses = useSelector<AppRootStateType, Array<HouseType>>(state => state.houses)

    const removeHouse = useCallback(function (houseId: string) {
        dispatch(removeHouseTC(houseId));
    }, [dispatch]);

    return <div className={styles.container}>
        <h1>HOUSES</h1>
        <div className={styles.houses}>{houses.map(t => <House key={t._id} house={t}
                                                               removeHandler={removeHouse}/>)}</div>
    </div>
})

