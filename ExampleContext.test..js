import { createContext, useContext } from "react";
import { render, screen } from "@testing-library/react";

const MyContext = createContext();

function MyProvider(props) {
  const { children, value } = props;
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
function MyConsumer() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
describe("MyContext", () => {
  it("should render the context value", () => {
    const value = "Hello, world!";
    render(
      <MyProvider value={value}>
        {" "}
        <MyConsumer />{" "}
      </MyProvider>
    );
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
