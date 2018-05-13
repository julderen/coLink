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
const Album_1 = require("../Components/Album");
class DashboardPagesAlbumsView extends react_1.Component {
    constructor(props) {
        super();
        const { albumsGet, albumEditFormOpen, albumTypeToggle, albumDelete, filterChange, searcherClear } = props.actions;
        this.componentDidMount = () => this.dataFetch();
        this.componentWillUnmount = () => searcherClear();
        this.dataFetch = filter => albumsGet(filter || this.props.filter);
        this.onAlbumOpen = (id, name) => () => this.props.history.push(`/Dashboard/Links/${id}/${name}`);
        this.onAlbumDelete = id => () => albumDelete(id);
        this.onAlbumTypeToggle = (id, type) => () => albumTypeToggle(id, type);
        this.onAlbumEditFormOpen = album => () => albumEditFormOpen(album);
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
        const { hiddenDownloadMore, data, contentStatus, status, editingAlbum } = this.props;
        return (<Helpers_1.ContentStatus status={contentStatus}>
        <div className="cards">
          {data.map((_a) => {
            var { id } = _a, album = __rest(_a, ["id"]);
            return (<Album_1.default key={id} {...album} isEditing={editingAlbum === id} id={id} onAlbumOpen={this.onAlbumOpen} onAlbumEditFormOpen={this.onAlbumEditFormOpen} onAlbumDelete={this.onAlbumDelete} onAlbumTypeToggle={this.onAlbumTypeToggle}/>);
        })}
          <CreateForm_1.default userId={this.props.userId}/>
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
DashboardPagesAlbumsView.propTypes = {
    hiddenDownloadMore: prop_types_1.default.bool,
    actions: prop_types_1.default.object,
    history: prop_types_1.default.object,
    filter: prop_types_1.default.object,
    editingAlbum: prop_types_1.default.string,
    userId: prop_types_1.default.string,
    searcherValue: prop_types_1.default.string,
    status: prop_types_1.default.string,
    contentStatus: prop_types_1.default.string,
    data: prop_types_1.default.array
};
const mapStateToProps = ({ albums, user, searcher }) => (Object.assign({}, albums, { searcherValue: searcher.value, hiddenDownloadMore: albums.lastCount < albums.filter.limit }));
exports.default = ConnectDecorators_1.connectToStore({ mapStateToProps, actions: Object.assign({}, ViewActions_1.default, SearcherActions_1.default) })(DashboardPagesAlbumsView);
