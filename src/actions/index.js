import * as c from './ActionType'

export const deleteEntry = id => ({
  type: c.DELETE_ENTRY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
