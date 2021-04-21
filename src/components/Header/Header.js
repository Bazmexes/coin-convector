import React from "react";

export default class Header extends React.Component {
    state = {
        links: [{name: "Список валют", active: true}, {name: "Конвектор", active: false}]
    }
    render() {
        return(
            <header className="header">
                <div className="header__content">
                    {this.state.links.map((link, index) => {
                        let classNames = ['header__item', link.active && 'header__item--active'].filter(Boolean).join(' ')
                        return (
                            <a href="" className={classNames} key={index}>{link.name}</a>
                        )
                    })}
                </div>
            </header>
        )
    }
}