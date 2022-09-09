import * as React from 'react';
import {render} from '@testing-library/react-native'
import { ThemeProvider } from '../src/configs/themeProvider';

// for testing library
export const providers = ({children}) => {
    return (
            <ThemeProvider>
                {children}
            </ThemeProvider>
    )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: providers, ...options})

// re-export
export * from '@testing-library/react-native'

//override render
export {customRender as render}