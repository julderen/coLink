class BaseTableActions {
  filterChange(field, value) {
    return { field, value };
  }

  paramsChange(field, value) {
    return { field, value };
  }

  tableClear() {
    return null;
  }
}

export default BaseTableActions;
