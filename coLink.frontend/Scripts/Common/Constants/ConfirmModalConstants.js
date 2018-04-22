export const MODAL_INITIAL_STATE = {
  message: '',
  title: '',
  onConfirm: null
};

export const REMOVING_MESSAGE = (subjectName, name) => `Вы уверены, что хотите удалить ${subjectName} ${name}?`;
