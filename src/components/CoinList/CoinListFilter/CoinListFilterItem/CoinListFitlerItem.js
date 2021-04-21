import React from "react";
import CoinCondition from './CoinCondition/CoinCondition'
import {connect} from "react-redux";
import {actionChangeCurrentCoin, actionImportCoins} from "../../../../redux/actions/actions";

class CoinListFilterItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let condition, count = null;
        if(this.props.coin.Previous < this.props.coin.Value) {
            condition = false
        } else {
            condition = true
        }
        count = this.props.coin.Value - this.props.coin.Previous
        return(
            <div className="coin-list__filter-item" onClick={()=> this.props.changeCurrentCoinDispatch(this.props.coin)}>
                <div className="coin-list__filter-item-text">1 {this.props.coin.CharCode} = {this.props.coin.Value} RUB</div>
                <CoinCondition condition={condition} count={count}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentCoinDispatch: (coin) => dispatch(actionChangeCurrentCoin(coin))
    }
}


export default connect(null, mapDispatchToProps)(CoinListFilterItem)