import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/Container/Body/Main';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

Enzyme.configure({adapter: new Adapter()});
axios.defaults.baseURL = 'http://localhost:3001';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter><App/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe("AppComponent", () => {
    it("should have app component", () => {
        const wrapper = shallow(<BrowserRouter><App/></BrowserRouter>);
    });
});

describe("apiResponse", () => {
    it('should get response from API', () => {
        const url = axios.defaults.baseURL + '/online';
        const app = new  Main()
        return app.getData(url).then((data) => {
          expect(typeof data).toBe('object');
        })
    });
});