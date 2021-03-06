import React from "react";
import PropTypes from "prop-types";

import BuildControl from "./buildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
]

const buildControls = (props) => (
    <div className="BuildControls">
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
         />
    ))}
    <button 
    className="OrderButton"
    disabled={!props.purchasable}
    onClick={props.ordered}
    >
        ORDER NOW
    </button>
    </div>
)

buildControls.propTypes = {
    price: PropTypes.number,
    disabled: PropTypes.object,
    purchasable: PropTypes.bool,
    ordered: PropTypes.func
} 

export default buildControls;