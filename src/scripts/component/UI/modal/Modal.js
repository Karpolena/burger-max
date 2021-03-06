import React, {Component} from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Auxx";
import Backdrop from "../backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps /*, nextState*/) {
        return nextProps.show !==this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate () {
        console.log("[Modal] WillUpdate");
    }
    render () {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className="Modal"
                    style={{
                    transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.show ? "1" : "0"
                }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

Modal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
    modalClosed: PropTypes.func
}

export default Modal;