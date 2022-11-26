import { nanoid } from "nanoid";

export const addNote = ({name, number}) => {
  return {
    type: "phonebook/addNote",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
