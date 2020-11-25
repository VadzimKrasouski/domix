import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://mr-test-backend.sadek.usermd.net',
})

type GetResponseType = {
    error: boolean
    houses: HouseType[]
}

type RemoveResponseType = {
    error: boolean
    message: string
}
type CreateResponseType = {
    error: boolean
    address: string
    owner: string
    price: string
    area: number
    _id: string
}

export type CreateHouseType = {
    address: string
    owner: string
    price: string
    area: number
}

export type HouseType = {
    _id: string
    address: string
    owner: string
    price: string
    area: number
}


export const housesAPI = {
    getAllHouses() {
        return instance.get<GetResponseType>('/houses');
    },
    removeHouse(id: string) {
        return instance.delete<RemoveResponseType>(`/houses/${id}`);
    },
    createHouse(data: CreateHouseType) {
        return instance.post<CreateResponseType>('/houses', {...data});
    },
    getHouse(houseId: string) {
        return instance.get<CreateResponseType>(`/houses/${houseId}`);
    },
}