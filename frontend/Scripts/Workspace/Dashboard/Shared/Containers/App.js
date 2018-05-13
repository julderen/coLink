"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = require("../Components/Layout");
const View_1 = require("../../Pages/Albums/Containers/View");
const View_2 = require("../../Pages/Links/Containers/View");
const UserProvider_1 = require("./UserProvider");
const EconomicsApp = () => {
    const path = '/Dashboard';
    return (<Layout_1.default>
      <UserProvider_1.default>
        <react_router_dom_1.Route exact path={path} render={() => <react_router_dom_1.Redirect to={`${path}/Albums`}/>}/>
        <react_router_dom_1.Route path={`${path}/Albums`} component={View_1.default}/>
        <react_router_dom_1.Route path={`${path}/Links/:albumId/:albumName`} component={View_2.default}/>
      </UserProvider_1.default>
    </Layout_1.default>);
};
exports.default = EconomicsApp;
