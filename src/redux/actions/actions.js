import {__CHANGECURRENTCOIN, __FILTER, __IMPORTCOINS} from "./actionsTypes";
export function actionImportCoins (coins) {
    return {
        type: __IMPORTCOINS,
        payload: coins,
    }
}

export function actionChangeCurrentCoin (coin) {
    return {
        type: __CHANGECURRENTCOIN,
        payload: coin,
    }
}

export function actionFilter (filterProperty) {
    return {
        type: __FILTER,
        payload: filterProperty,
    }
}