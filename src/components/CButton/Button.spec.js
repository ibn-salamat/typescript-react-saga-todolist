import { shallow, render, mount } from "enzyme";
import { CButton } from "./index";

const setUp = (props) => shallow(<CButton {...props} />);

describe("Button", () => {
  let component;
  beforeEach(() => {
    component = setUp({title: "sdsd"});
  });

  it("should render component", () => {
    expect(component).toMatchSnapshot();
  });
});
