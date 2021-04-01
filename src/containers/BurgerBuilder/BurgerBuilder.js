import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';

export class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ingredient:{
                 salad:0,
                 bacon:0,
                 cheese:0,
                 meat:0,

             }
        }
    }
    
    render() {
        return (
            <Aux>
              <Burger ingredients={this.state.ingredient}/>
                <div>Build Controler</div>

            </Aux>

        )
    }
}

export default BurgerBuilder
