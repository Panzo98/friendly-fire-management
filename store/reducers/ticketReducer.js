import { dummyTickets } from "../../data/dummyData";

const initialState = {
  tickets: dummyTickets,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ticketReducer;
