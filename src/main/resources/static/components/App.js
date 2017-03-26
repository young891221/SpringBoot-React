/**
 * Created by youngjae on 2017. 3. 25..
 */
import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';


class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Hello React!!!</h1>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }/>
                <StateExample/>
                <RandomNumber/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Header',
    contentTitle: 'Content'
};

export default App;