import React from "react";
import PropTypes from "prop-types";

import Burger from "../../Burger/Burger";
import Button from "../../UI/button/Button";

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope</h1>
            <div style={{width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

checkoutSummary.propTypes = {
    ingredients: PropTypes.object,
    checkoutCancelled: PropTypes.func,
    checkoutContinued: PropTypes.func
} 

export default checkoutSummary;