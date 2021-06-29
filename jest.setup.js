// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });
