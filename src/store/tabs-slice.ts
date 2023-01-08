import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  todo: string;
  priority: string;
  status: string;
  name: string;
  id: string;
}

export interface Item {
  id: string;
  name: string;
  initials: string;
  color: string;
  todos: Todo[];
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          initials: newItem.initials,
          name: newItem.name,
          color: newItem.color,
          todos: newItem.todos,
        });
      }
    },
    removeItemFromFav: (state, action) => {
      const idTask = action.payload;
      const existingItem = state.items.find((item) => item.id === idTask);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== idTask);
      }
    },
  },
});

export const { addItem, removeItemFromFav } = tabsSlice.actions;

export default tabsSlice;
