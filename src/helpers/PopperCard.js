import React from 'react';
import { Popper } from 'react-popper';

class PopperCard extends React.Component {
    state = {
        isOpen: false
    }

    handleOver = () => {
        this.setState({
            isOpen: true
        })
    }


    handleOut = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <span className="helper-tool" ref={span => (this.target = span)} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                {this.state.isOpen && (
                    <Popper className="popper" placement={this.props.position} target={this.target}>
                        {this.props.msg}
                    </Popper>
                )}
            </span>
        )
    }
}


export default PopperCard;
