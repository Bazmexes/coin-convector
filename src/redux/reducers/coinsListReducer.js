import {__CHANGECURRENTCOIN, __FILTER, __IMPORTCOINS} from "../actions/actionsTypes";


let initialState = {
    currentCoin: {
        CharCode: "TEST",
        ID: "R01370",
        Name: "Тестовая монета",
        Nominal: 100,
        NumCode: "417",
        Previous: 89.0885,
        Value: 87.8876,},
    coins: [1,2,3],
}

export default function (state= initialState, action) {
    switch (action.type) {

        case __IMPORTCOINS: {
            let arrayHelper = Object.values(action.payload)

            // для того чтобы точно увидеть валюту у которой будет минусовое котировка
            let testCoin = {
                CharCode: "TEST",
                ID: "R01370",
                Name: "Тестовая монета",
                Nominal: 100,
                NumCode: "417",
                Previous: 89.0885,
                Value: 87.8876,
            }

            arrayHelper.push(testCoin)

            let currentCoin = arrayHelper[0]

            arrayHelper.forEach(coin=> {
                coin.isActive = true
            })

            console.log(arrayHelper)
            return {
                currentCoin: currentCoin,
                coins: [...arrayHelper]
            }
        }

        case __CHANGECURRENTCOIN: {
            console.log(action.payload)
            return {
                currentCoin: action.payload,
                coins: [...state.coins]
            }
        }

        case __FILTER: {
            let arrHelper = [...state.coins]
            arrHelper.forEach(coin => {
                if(!coin.Name.toLowerCase().startsWith(action.payload.toLowerCase())) {
                    if(!coin.CharCode.toLowerCase().startsWith(action.payload.toLowerCase())) {
                        coin.isActive = false
                    } else {
                        coin.isActive = true
                    }
                } else {
                    coin.isActive = true
                }
            })
            console.log('after filter', arrHelper)
            return {
                currentCoin: state.currentCoin,
                coins: [...arrHelper]
            }
        }

        default: {
            return state
        }
    }
}