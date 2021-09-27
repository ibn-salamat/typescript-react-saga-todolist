import { shallow } from "enzyme";
import { CButton } from "./index";

const setUp = (props) => shallow(<CButton {...props} />);

describe("Button", () => {
  it("should render component", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should call onClick method", () => {
    const mockCallback = jest.fn();
    const component = setUp({ onClick: mockCallback });

    expect(mockCallback.mock.calls.length).toBe(0);

    component.find("button").simulate("click");
    component.find("button").simulate("click");

    expect(mockCallback.mock.calls.length).toBe(2);
  });

  it("should render children", () => {
    const children = "children text";
    const component = setUp({ children });

    expect(component.find("button").text()).toBe(children);
  });
});
