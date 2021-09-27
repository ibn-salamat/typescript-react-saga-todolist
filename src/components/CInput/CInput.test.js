import { shallow, render, mount } from "enzyme";
import { CInput } from "./index";

const setUp = (props) => shallow(<CInput {...props} />);

describe("Button", () => {
  it("should render component", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should call onChange method", () => {
    const event = {
      preventDefault() {},
      target: { value: "value" },
    };

    const mockCallback = jest.fn();
    const component = setUp({ onChange: mockCallback });
    expect(mockCallback.mock.calls.length).toBe(0);

    component.find("input").simulate("change", event);
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("should render props value", () => {
    const value = "text";
    const componentWithValue = setUp({ value });

    expect(componentWithValue.props().children.props.value).toBe(value);

    expect(componentWithValue.find("input").prop("value")).toBe(value);
  });
});
