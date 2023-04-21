export const addData = (obj) => {
  return { type: "ADD", payload: obj };
};
export const DeleteData = (index) => {
  return { type: "DELETE", payload: index };
};
export const updateData = (editobject, index) => {
  return { type: "UPDATE", payload: { record: editobject, editIndex: index } };
};
