import { createStore } from "redux";

const initialState = {
  messages: [
    {
      name: "Ester",
      surname: "Seidita",
      number: 45252362,
    },
  ],
};

function menageMessages(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        messages: state.messages.filter((obj) => obj.name !== action.payload),
      };

    case "UPDATE_STATES":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
}

const store = createStore(menageMessages, initialState);
export default store;
