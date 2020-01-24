import React, {Component} from 'react';

import { ThemeContext, themes } from '../context/theme';

class ThemedButton extends Component {

    render() {
        let theme = this.context;
        return (
            <button {...this.props} style={{backgroundColor: theme.background}} />
        );
    }
    
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;