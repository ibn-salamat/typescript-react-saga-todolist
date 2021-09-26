import { shallow, render, mount } from "enzyme";
import { CButton } from "./index";

const setUp = (props) => shallow(<CButton {...props} />);

describe("Button", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call onClick method", () => {
    const mockCallback = jest.fn();
    const Button = setUp({ onClick: mockCallback });

    expect(mockCallback.mock.calls.length).toBe(0);

    Button.find("button").simulate("click");
    Button.find("button").simulate("click");

    expect(mockCallback.mock.calls.length).toBe(2);

    

  });
});
