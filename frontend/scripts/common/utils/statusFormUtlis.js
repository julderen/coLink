export default {
  getClassName(status) {
    switch (status) {
      case 'loading':
        return 'state_loading';
      case 'success':
        return 'state_success';
      case 'error':
        return 'state_error';
      default:
        return '';
    }
  },
};
