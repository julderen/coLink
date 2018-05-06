import { createActions } from 'realt';

import LinksSource from '../Sources/LinksSource';

class DashboardPagesLinksActionsView {
  constructor() {
    this.generate(
      'filterChange',
      'albumNameSet',
      'dataClear'
    );
  }

  linksGet(albumId, query) {
    return LinksSource.getLinks(albumId, query);
  }

  linkDelete(id) {
    return LinksSource.deleteLink(id);
  }
}

export default createActions(DashboardPagesLinksActionsView);
