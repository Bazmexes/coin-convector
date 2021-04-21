import React from "react";

export default class CoinListFilterItem extends React.Component {

    render() {
        let classNames = ['coin-condition', this.props.condition && 'coin-condition--red'].filter(Boolean).join(' ')
        return(
            <div className={classNames}>{this.props.count.toFixed(3)}</div>
        )
    }
}