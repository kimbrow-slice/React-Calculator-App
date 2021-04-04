import React, {Component} from 'react';

class SumComponent extends Component {

    render(){
        let {sum} = this.props;
        return (
            <div className="sum">
                <p>{sum}</p>
            </div>
        )
    }
}

export default SumComponent;