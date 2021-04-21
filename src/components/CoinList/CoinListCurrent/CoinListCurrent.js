import React from "react";
import CoinCondition from '../CoinListFilter/CoinListFilterItem/CoinCondition/CoinCondition'
export default class CoinListCurrent extends React.Component {

    render() {
        let condition, count = null;
        if(this.props.currentCoin.Previous < this.props.currentCoin.Value) {
            condition = false
        } else {
            condition = true
        }
        count = this.props.currentCoin.Value - this.props.currentCoin.Previous
        return(
            <div className="coin-list__current-coin">
                <div>
                    1 {this.props.currentCoin.CharCode} = {this.props.currentCoin.Value} RUB
                </div>
                <CoinCondition condition={condition} count={count}/>
            </div>
        )
    }
}