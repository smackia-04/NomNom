import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils.js/store";
import { StaticRouter } from "react-router";

test("Check if logo is rendering", () => {
    const header = render(
        <StaticRouter>
            <Provider store = {store}>
            <Header />
            </Provider>
        </StaticRouter>
        );

    console.log(header);
})