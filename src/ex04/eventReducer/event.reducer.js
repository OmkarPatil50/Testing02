export const initialState = {
  events: []
};
function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_EVENT": {
      return { ...state, events: [...state.events, action.payload] };
    }

    case "CANCEL_EVENT": {
      return {
        ...state,
        events: state.events.filter(({ id }) => id !== action.payload.id)
      };
    }

    case "ADD_ATTENDEE": {
      return {
        ...state,
        events: state.events.reduce((allEvents, currentEvent) => {
          return currentEvent.id === action.payload.id
            ? [
                ...allEvents,
                {
                  ...currentEvent,
                  attendees: [...currentEvent.attendees, action.payload.name]
                }
              ]
            : [...allEvents, currentEvent];
        }, [])
      };
    }

    case "REMOVE_ATTENDEE": {
      return {
        ...state,
        events: state.events.reduce((allEvents, currentEvent) => {
          return currentEvent.id === action.payload.id
            ? [
                ...allEvents,
                {
                  ...currentEvent,
                  attendees: currentEvent.attendees.filter(
                    (person) => person !== action.payload.name
                  )
                }
              ]
            : [...allEvents, currentEvent];
        }, [])
      };
    }
    default:
      return state;
  }
}

export default eventReducer;
