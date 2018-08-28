export default {
  getClassName(status) {
    switch (status) {
      case 'loading':
        return 'form_loading';
      case 'success':
        return 'form_success';
      case 'error':
        return 'form_error';
      default:
        return '';
    }
  },
};
