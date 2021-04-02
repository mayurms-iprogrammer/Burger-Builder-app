import Reatc from "react";
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
            {
                control1.map(ctrl => (


                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        type={ctrl.type}
                        removed={()=>{props.ingredientRemoved(ctrl.type)}}
                        added={() => { props.ingredientAdded(ctrl.type) }}
                    />
                ))
            }

        </div>
    )
}
export default buildControls;