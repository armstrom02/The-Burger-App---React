import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(crtl => (
            <BuildControl
                key={crtl.label}
                label={crtl.label}
                added={() => props.ingredientAdded(crtl.type)}
                remove={() => props.ingredientremoved(crtl.type)}
                disable = {props.disabled[crtl.type]}
            />
        ))}
        <button className = 'OrderButton'
        disabled ={!props.purchasable}
        onClick = {props.ordered}
        >ORDER NOW</button>
    </div>
);

export default buildControls;