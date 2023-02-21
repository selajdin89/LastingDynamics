import "@testing-library/jest-dom";

import { configure } from "enzyme";

import { TextEncoder } from "util";
global.TextEncoder = TextEncoder;

// import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
//
// configure({ adapter: new Adapter() });

// Enzyme.configure({ adapter: new Adapter() });
