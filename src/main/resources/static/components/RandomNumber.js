/**
 * Created by youngjae on 2017. 3. 26..
 */
import React from 'react';
import ReactDOM from 'react-dom';


class RandomNumber extends React.Component {

    constructor(props){
        //suer()를 사용하면 this를 React.Component에서 상속받게 된다.
        //suer(props)는 props까지 사용한다는 것을 의미한다.
        super(props);
        this.state = {
            value: 100
        };
        this._update = this._updateValue.bind(this);
    }

    _updateValue(){
        this.setState({ value: Math.round(Math.random()*100) });
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.state.value }</h1>
                <button onClick={this._update}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
