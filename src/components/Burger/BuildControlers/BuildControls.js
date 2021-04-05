import React from "react";
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const buildControls = (props) => {
    const control1 = [ 
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },

    ]
    return (
        <div className={Classes.BuildControls} >
            <p className={Classes.price}>Current Price: <strong>{props.price.toFixed(2)}</strong>  </p>
            {
                control1.map(ctrl => (


                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        type={ctrl.type}
                        removed={() => { props.ingredientRemoved(ctrl.type) }}
                        added={() => { props.ingredientAdded(ctrl.type) }}
                        disabled={props.disabled[ctrl.type]}
                    />
                ))

            }
            <button 
            className={Classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>

        </div>
    )
}
export default buildControls;