import { shallow } from "enzyme";
import { Title } from ".";

const setup = (props) => shallow(<Title {...props} />);


describe("Title", () => {
  it("should render component", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

  it("it should contain label", () => {
    const label = "My Title";
    const component = setup({ label });

    expect(component.find("p").text()).toBe(label);
  });
});
