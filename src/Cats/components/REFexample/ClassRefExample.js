import React from "react";

class ClassRefExample extends React.Component {
    myRef = React.createRef();

    handleClick = () => {
        this.myRef.current.style = 'color:red';
    }
    render() {
        return (
            <div>
                <button
                onClick={this.handleClick}
                >Click</button>
                <p ref={this.myRef}>Text</p>
            </div>
        )
    }
}
export default ClassRefExample;