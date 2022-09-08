import * as React from 'react';
import LoginComponent from '../src/components/loginComponent';
import { myTestRenderer } from './myTestRenderer';
import { render, screen, fireEvent } from '@testing-library/react-native';


describe('loginComponent test', () => {
	it('should match snapshot', () => {
		const tree = myTestRenderer(<LoginComponent />)
		expect(tree).toMatchSnapshot();
	});

	it('should call callback on button press', () => {
		// TODO:
	});
});