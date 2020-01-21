import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="text-center">About</h4>
            <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
        </div>
    );
}

export default  Rainbow( About );