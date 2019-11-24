export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = newItemAdded => {
  console.log(newItemAdded);
  return {
    type: ADD_ITEM,
    payload: newItemAdded
  };
};

export const toggleRemoveItem = removeAdded => {
  console.log(removeAdded);
  return {
    type: REMOVE_ITEM,
    payload: removeAdded
  };
};

// export const addMember = newMebmerName => {
//   return {
//     type: ADD_MEMBER,
//     payload: { name: newMebmerName, dragonStaus: false }
//   };
// };
