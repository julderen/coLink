"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ConnectDecorators_1 = require("Decorators/ConnectDecorators");
const Helpers_1 = require("Components/Helpers");
const Controls_1 = require("Components/Controls");
const SearcherActions_1 = require("../../../Shared/Actions/SearcherActions");
const ViewActions_1 = require("../Actions/ViewActions");
const CreateForm_1 = require("./CreateForm");
const Link_1 = require("../Components/Link");
class DashboardPagesLinksView extends react_1.Component {
    constructor(props) {
        super();
        const { actions: { linksGet, searcherClear, filterChange, dataClear, albumNameSet, linkDelete }, match } = props;
        this.componentWillUnmount = () => {
            searcherClear();
            dataClear();
        };
        this.componentDidMount = () => {
            albumNameSet(match.params.albumName);
            this.dataFetch();
        };
        this.dataFetch = filter => linksGet(match.params.albumId, filter || this.props.filter);
        this.onLinksDelete = id => () => linkDelete(id);
        this.onLinkOpen = url => () => window.open(url);
        this.onFilterChange = filter => filterChange(filter);
        this.onDownloadMore = () => this.onFilterChange({ offset: this.props.filter.offset + this.props.filter.limit });
    }
    componentWillReceiveProps({ filter: { offset, limit }, searcherValue }) {
        const { filter: { offset: prevOffset }, searcherValue: prevSearcherValue } = this.props;
        if (prevOffset !== offset)
            this.dataFetch({ searcherValue, offset, limit });
        if (searcherValue !== prevSearcherValue) {
            this.onFilterChange({ offset: 0 });
            this.dataFetch({ query: searcherValue, offset: 0, limit });
        }
    }
    render() {
        const { hiddenDownloadMore, data, status, contentStatus, match } = this.props;
        return (<Helpers_1.ContentStatus status={contentStatus}>
        <div className="cards">
          {data.map((_a) => {
            var { id } = _a, link = __rest(_a, ["id"]);
            return (<Link_1.default {...link} key={id} id={id} onLinkOpen={this.onLinkOpen} onLinksDelete={this.onLinksDelete}/>);
        })}
          <CreateForm_1.default userId={this.props.userId} albumId={match.params.albumId}/>
        </div>
        {!hiddenDownloadMore ?
            <div className="download-more">
            <Controls_1.ButtonLoader status={status} onClick={this.onDownloadMore}>
              <i className="material-icons" title="Show more">arrow_downward</i>
            </Controls_1.ButtonLoader>
          </div> :
            null}
      </Helpers_1.ContentStatus>);
    }
}
DashboardPagesLinksView.propTypes = {
    hiddenDownloadMore: prop_types_1.default.bool,
    actions: prop_types_1.default.object,
    filter: prop_types_1.default.object,
    match: prop_types_1.default.object,
    searcherValue: prop_types_1.default.string,
    contentStatus: prop_types_1.default.string,
    userId: prop_types_1.default.string,
    status: prop_types_1.default.string,
    data: prop_types_1.default.array
};
const mapStateToProps = ({ links, user, searcher }) => (Object.assign({}, links, { searcherValue: searcher.value, hiddenDownloadMore: links.lastCount < links.filter.limit, userId: user.id }));
exports.default = ConnectDecorators_1.connectToStore({
    mapStateToProps,
    actions: Object.assign({}, ViewActions_1.default, SearcherActions_1.default)
})(DashboardPagesLinksView);
