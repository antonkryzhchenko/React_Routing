import React from "react";

function withLogging(WrappedComponent) {
    return class extends React.Component {

        handleClick = this.handleClick.bind(this);
        handleClick() {
            console.log('Дополнительная логика');
        }

        render() {
            return <WrappedComponent onClick={this.handleClick} />
        }
    }
}
export default withLogging;