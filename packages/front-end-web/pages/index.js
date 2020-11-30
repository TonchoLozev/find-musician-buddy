import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeTest from '../store/actions/changeTest';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foo: '',
        };
    }

    async componentDidMount() {
        const { foo } = await (await fetch('http://localhost:5000/api/foo')).json();
        this.setState({ foo });
    }

    render() {
        const { foo } = this.state;

        const { test, changeTestProp } = this.props;

        return (
            <div>
                <h1>Hello World</h1>
                <p>
                    Server responded with:
                    {' '}
                    {foo}
                </p>
                <p>
                    Redux responded with:
                    {' '}
                    {test}
                </p>
                <button type="button" onClick={() => changeTestProp('pest')}>Click</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({ test: state.TestReducer.get('test') }),
    {
        changeTestProp: changeTest,
    },
)(Home);

Home.propTypes = {
    test: PropTypes.string.isRequired,
    changeTestProp: PropTypes.func.isRequired,
};
