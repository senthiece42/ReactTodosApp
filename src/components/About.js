import React from 'react';
import Rainbow from '../hoc/Rainbow';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const About = () => {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h4 className="text-center">About</h4>
            <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
            <h5>Counter : {counter}</h5>
            <div className="btn-group" role="group">
                <button onClick={() => dispatch( increment() )} className="btn btn-success btn-sm">+</button>
                <button onClick={ () => dispatch(decrement()) } className="btn btn-danger btn-sm">-</button>
            </div>
            {isLogged ? (<p><strong>Valuable information I shouldn't see</strong></p>): ''}
        </div>
    );
}

export default  Rainbow( About );