import React from "react";
import CoinListFilterItem from "./CoinListFilterItem/CoinListFitlerItem";
export default class CoinListFilter extends React.Component {

    render() {
        let classNames = ['coin-list__filter', this.props.isActive && 'coin-list__filter--active'].filter(Boolean).join(' ')
        return(
            <div className={classNames}>
                {this.props.coins.map((coin, index)=> {
                    if(coin.isActive) {
                        return (
                            <CoinListFilterItem coin={coin} key={index}/>
                        )
                    } else {
                        return null
                    }
                })}
            </div>
        )
    }
}