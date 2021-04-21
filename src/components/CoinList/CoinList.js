import React from "react";
import CoinListFilter from './CoinListFilter/CoinListFilter'
import CoinListCurrent from "./CoinListCurrent/CoinListCurrent";
import {actionChangeCurrentCoin, actionFilter} from "../../redux/actions/actions";
import {connect} from "react-redux";

class CoinList extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.state = {
            inputIsFocus: false,
        };
    }


    _openFilterBox () {
        this.setState({inputIsFocus: true})

    }

    _closeFilterBox () {
        setTimeout(()=> {
            this.setState({inputIsFocus: false})
        }, 100)
    }

    _filter() {
        console.log(this.inputRef.current.value)
    }

    render() {
        return(
            <div className="coin-list">
                <form className="coin-list__form" noValidate>
                    <input className="coin-list__form-input" type="text" placeholder="Введите название валюты" ref={this.inputRef} onInput={()=> this.props.filterDispatch(this.inputRef.current.value)} onFocus={()=>{this._openFilterBox()}} onBlur={()=>{this._closeFilterBox()}}/>
                </form>
                <CoinListCurrent currentCoin={this.props.currentCoin}/>
                <CoinListFilter coins={this.props.coins} isActive={this.state.inputIsFocus}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentCoinDispatch: (coin) => dispatch(actionChangeCurrentCoin(coin)),
        filterDispatch: (filterProperty) => dispatch(actionFilter(filterProperty)),
    }
}


export default connect(null, mapDispatchToProps)(CoinList)