import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { store } from '../../src/store/createStore';
import { SplashScreen, Nome, Home, Scan, Confirmacao } from '../../src/containers';

configure({adapter: new Adapter()});

describe('Container tests', () => {
    it('should render SplashScreen without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <SplashScreen />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Nome without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Nome />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Home without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Scan without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Scan />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Confirmacao without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Confirmacao />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot(); 
    });
});