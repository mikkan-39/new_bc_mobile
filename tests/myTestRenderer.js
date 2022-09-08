import * as React from 'react';
import renderer from 'react-test-renderer'; 
import { ThemeProvider } from '../src/configs/themeProvider';

// Needed to provide context for themes
export const myTestRenderer = (child) => {
    return (
        renderer
        .create(<ThemeProvider>{child}</ThemeProvider>)
		.toJSON()
    )
}