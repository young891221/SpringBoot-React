import React from 'react';

class StateExample extends React.Component {
    constructor(props) { //state초기값 설정시 constructor안에서 설정(이게 가장 좋음)
        super(props);

        this.state = {
            header: "Header Initial state",
            content: "Content Initial State"
        };
    }

    _updateHeader(text){ //버튼이벤트 하나 추가
        this.setState({
            header: "Header has changed"
        });
    }

    render() { //ES6 class에서는 auto binding이 되지 않으므로 명시적으로 bind 해줘야 함
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this._updateHeader.bind(this)}>Update</button>
            </div>
        );
    }
}

export default StateExample;
