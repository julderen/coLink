export default {
  getClassName(status) {
    switch (status) {
      case 'loading':
        return 'status-button_loading';
      case 'success':
        return 'status-button_success';
      case 'error':
        return 'status-button_error';
      default:
        return '';
    }
  },
};
