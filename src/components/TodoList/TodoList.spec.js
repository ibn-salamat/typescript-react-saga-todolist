import React from "react";
import { shallow } from "enzyme";

import Todolist from "./index";

const setUp = (props) => shallow(<Todolist {...props} />);

describe("should render Todolist", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

//   it("should render title", () => {
    
//   });
});
