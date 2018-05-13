"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppService_1 = require("Services/AppService");
const Reducers_1 = require("./Reducers");
const App_1 = require("./Shared/Containers/App");
require("../../../Styles/Workspace/Dashboard/index.scss");
new AppService_1.default({
    container: App_1.default,
    reducers: Reducers_1.default,
    DOMNode: document.getElementById('root')
}).init();
