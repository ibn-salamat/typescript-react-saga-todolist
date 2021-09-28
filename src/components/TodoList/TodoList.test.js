/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { shallow } from "enzyme";

import { _TodoList } from ".";
import { CInput } from "..";

const setup = (props) => shallow(<_TodoList {...props} />);
const todos = [{ title: "todo1", id: 1, createdDate: new Date(), done: false }];

describe("TodoList", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  it("should render component", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

  it("should render todolist", () => {
    const component = setup({ todos });
    expect(component).toMatchSnapshot();

    expect(component.find(".todo-container p").text()).toBe(
      `${todos[0].title} | ${todos[0].createdDate.toISOString()}`
    );
  });

  it("should render title", () => {
    const title = "My Title";

    const componentWithoutTitle = setup();
    expect(componentWithoutTitle.find("Title").prop("label")).toBe(undefined);

    const componentWithTitle = setup({ title });
    expect(componentWithTitle.find("Title").prop("label")).toBe(title);
  });
});
