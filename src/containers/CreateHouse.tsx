import React, {ChangeEvent, useCallback, useState} from 'react';
import styles from './CreateHouse.module.css';
import {useDispatch} from 'react-redux';
import {CreateHouseType} from '../api/homea-api';
import {createHouseTC} from '../redux/houses-reducer';


export const CreateHouse = React.memo(function () {
        const [state, setState] = useState<CreateHouseType>({
            address: '',
            area: 0,
            owner: '',
            price: ''
        })
        const dispatch = useDispatch();
        const createHouse = useCallback(() => dispatch(createHouseTC(state)), [state, dispatch])

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setState({
                ...state,
                [e.target.name]: value
            })
        }

        return (
            <form onSubmit={createHouse}
                  className={styles.container}>
                <label>
                    <label>
                        Owner
                        <input type={'text'} name={'owner'} placeholder={'owner'} onChange={handleChange}
                               value={state.owner}/>
                    </label>
                    Address
                    <input type={'text'} name={'address'} placeholder={'address'} onChange={handleChange}
                           value={state.address}/>
                </label>
                <label>
                    Area
                    <input type={'text'} name={'area'} placeholder={'area'} onChange={handleChange}
                           value={state.area}/>
                </label>
                <label>
                    Price
                    <input type={'text'} name={'price'} placeholder={'price'} onChange={handleChange}
                           value={state.price}/>
                </label>
                <sub>
                    <button>Create</button>
                </sub>
            </form>
        )
    }
)