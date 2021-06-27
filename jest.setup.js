// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });
