"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = require("classnames");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Helpers_1 = require("Components/Helpers");
const MenuItem_1 = require("./MenuItem");
class LayoutSidebarMenu extends react_1.Component {
    constructor() {
        super();
        this.state = {
            activeMenuItem: ''
        };
        this.onMenuItemToggle = this.onMenuItemToggle.bind(this);
    }
    onMenuItemToggle(menuItem) {
        return () => {
            this.setState(state => ({ activeMenuItem: state.activeMenuItem === menuItem ? '' : menuItem }));
        };
    }
    renderSecondLevel(items) {
        if (!items)
            return null;
        return (<ul className="menu-level-two">
        {items.map(({ children, to, name, icon }) => (<MenuItem_1.default key={name} link={!children} path={to} className={classnames_1.default({ 'has-sub': children })}>
            {children
            ? <a title={name}><Helpers_1.Icon {...icon}/>{name}</a>
            : <span title={name}><Helpers_1.Icon {...icon}/>{name}</span>}
            {this.renderThirdLevel(children)}
          </MenuItem_1.default>))}
      </ul>);
    }
    renderThirdLevel(items) {
        if (!items)
            return null;
        return (<ul className="menu-level-three">
        {items.map(({ to, name }) => (<MenuItem_1.default key={name} link path={to}>{name}</MenuItem_1.default>))}
      </ul>);
    }
    render() {
        const { items } = this.props;
        const { activeMenuItem } = this.state;
        return (<nav>
        <ul className="menu-level-one">
          {items.map(({ children, to, name }, index) => (<MenuItem_1.default link={!children} key={index} path={to} className={classnames_1.default({
            expand: !name || activeMenuItem === name,
            'has-sub': children
        })}>
              {name && children
            ? <a title={name} onClick={this.onMenuItemToggle(name)}>{name}</a>
            : <span title={name}>{name}</span>}
              {this.renderSecondLevel(children)}
            </MenuItem_1.default>))}
        </ul>
      </nav>);
    }
}
LayoutSidebarMenu.propTypes = {
    items: prop_types_1.default.array.isRequired
};
exports.default = LayoutSidebarMenu;
