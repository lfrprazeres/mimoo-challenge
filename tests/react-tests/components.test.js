import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { store } from '../../src/store/createStore';
import { Button, Products } from '../../src/components';

configure({adapter: new Adapter()});

describe('Components tests', () => {

    it('should render Button without crash with the properly props', () => {
        const props = {
            to: "/",
            label: "test",
            bg: "white",
            color: "green",
            onClick: jest.fn()
        }
        const wrapper = shallow(
            <Provider store={store}>
                <Button {...props}/>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    })
    it('should render Products without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Products />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    
})