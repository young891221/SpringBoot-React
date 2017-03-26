/**
 * Created by youngjae on 2017. 3. 26..
 */
import React from 'react';

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
            </div>
        );
    }
}

Content.propTypes = { //validate(https://facebook.github.io/react/docs/components-and-props.html)
    title: React.PropTypes.string.isRequired
};

export default Content;
