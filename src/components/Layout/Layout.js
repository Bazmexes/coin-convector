import React from "react";
import Header from "../Header/Header";
import CoinList from "../CoinList/CoinList";
import {connect} from "react-redux";
import {actionImportCoins} from "../../redux/actions/actions";

class Layout extends React.Component {
    componentDidMount() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(res => res.json())
            .then(res => {
                this.props.importCoinsDispatch(res.Valute)
            })
    }

    render() {
        return(
            <div className="main">
                <div className="container">
                    <Header />
                    <div className="content-wrapper">
                        <CoinList coins={this.props.coins} currentCoin={this.props.currentCoin}/>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        coins: state.coinsListReducer.coins,
        currentCoin: state.coinsListReducer.currentCoin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        importCoinsDispatch: (coins) => dispatch(actionImportCoins(coins))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout)
