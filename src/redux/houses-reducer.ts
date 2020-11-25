import {Dispatch} from 'redux';
import {CreateHouseType, housesAPI, HouseType} from '../api/homea-api';


type SetAllHousesActionType = ReturnType<typeof setHouses>
type RemoveHouseActionType = ReturnType<typeof removeHouse>
type CreateHouseActionType = ReturnType<typeof createHouse>
type SetHouseActionType = ReturnType<typeof setHouse>

type ActionsType =
    SetAllHousesActionType
    | RemoveHouseActionType
    | CreateHouseActionType
    | SetHouseActionType

const initialState: Array<HouseType> = []

export const housesReducer = (state: Array<HouseType> = initialState, action: ActionsType): Array<HouseType> => {
    switch (action.type) {
        case 'SET-ALLHOUSES': {
            return [...state, ...action.houses]
        }
        case 'REMOVE-HOUSE':
            return state.filter(h => h._id !== action.houseId)
        case 'CREATE-HOUSE': {
            return state
        }
        case 'SET-HOUSE': {
            return state.map(h => h._id === action.house._id ? {...h, ...action.house} : h)
        }
        default:
            return state;
    }
};

//Actions
export const setHouses = (houses: Array<HouseType>) => ({type: 'SET-ALLHOUSES', houses}) as const
export const removeHouse = (houseId: string) => ({type: 'REMOVE-HOUSE', houseId}) as const
export const createHouse = (house: HouseType) => ({type: 'CREATE-HOUSE', house}) as const
export const setHouse = (house: HouseType) => ({type: 'SET-HOUSE', house}) as const

//Thunks
export const setAllHousesTC = () => (dispatch: Dispatch) => {
    housesAPI.getAllHouses()
        .then(res => {
            return dispatch(setHouses(res.data.houses))
        })
        .catch(res => res.data.error && console.log('GetHouses error')
        )
}
export const removeHouseTC = (houseId: string) => (dispatch: Dispatch) => {
    housesAPI.removeHouse(houseId)
        .then(res => {
            !res.data.error && dispatch(removeHouse(houseId))
        })
        .catch(res => res.data.error && console.log(`${res.data.message}`)
        )
}
export const createHouseTC = (newHouse: CreateHouseType) => (dispatch: Dispatch) => {
    housesAPI.createHouse(newHouse)
        .then(res => {
            return dispatch(createHouse(res.data))
        })
        .catch(res => {
                res.data.error && console.log('CreateHouses error')
            }
        )
}
export const getHouseTC = (houseId: string) => (dispatch: Dispatch) => {
    housesAPI.getHouse(houseId)
        .then(res => {
            return dispatch(setHouse(res.data))
        })
        .catch(res => {
                res.data.error && console.log('CreateHouses error')
            }
        )
}
