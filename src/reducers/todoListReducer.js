import {
    LOAD_TODO_ITEMS,
    ADD_TODO_ITEM,
    UPDATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    TOGGLE_ITEM_STATUS,
    TodoItemPriority,
    TodoItemStatus
} from "./actions";

export default function todoListReducer(state = [], action) {
    switch (action.type) {
        case LOAD_TODO_ITEMS:
            return action.items;

        case ADD_TODO_ITEM:
            return [
                ...state,
                action.item
            ];

        case UPDATE_TODO_ITEM:
            return state.map(todo => {
                if (todo.id === action.item.id) {
                    return action.item;
                }
                return todo;
            });

        case DELETE_TODO_ITEM:
            return state.filter(todo => todo.id !== action.itemId);

        case TOGGLE_ITEM_STATUS:
            return state.map(todo => {
                if (todo.id === action.item.id) {
                    return action.item;
                }
                return todo;
            });
    }
    return state;
}

