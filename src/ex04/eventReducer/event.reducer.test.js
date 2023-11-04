import eventReducer from "./event.reducer";

describe("testing eventReducer", () => {
  it("should add new event to events array", () => {
    const initialState = {
      events: []
    };
    const action = {
      type: "CREATE_EVENT",
      payload: {
        id: 1,
        name: "Holi Event",
        date: "05-03-2024",
        attendees: []
      }
    };

    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "Holi Event",
          date: "05-03-2024",
          attendees: []
        }
      ]
    });
  });

  it("should remove specific event from events array", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "Holi Event",
          date: "05-03-2024",
          attendees: []
        }
      ]
    };
    const action = {
      type: "CANCEL_EVENT",
      payload: {
        id: 1
      }
    };

    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: []
    });
  });

  it("should add attendee to specific event", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "Holi Event",
          date: "05-03-2024",
          attendees: []
        }
      ]
    };
    const action = {
      type: "ADD_ATTENDEE",
      payload: {
        id: 1,
        name: "Omkar Patil"
      }
    };

    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "Holi Event",
          date: "05-03-2024",
          attendees: ["Omkar Patil"]
        }
      ]
    });
  });

  it("should remove attendee from specific event", () => {
    const initialState = {
      events: [
        {
          id: 1,
          name: "Holi Event",
          date: "05-03-2024",
          attendees: ["Omkar Patil"]
        }
      ]
    };
    const action = {
      type: "REMOVE_ATTENDEE",
      payload: {
        id: 1,
        name: "Omkar Patil"
      }
    };

    const updatedState = eventReducer(initialState, action);
    expect(updatedState).toEqual({
      events: [
        {
          id: 1,
          name: "Holi Event",
          date: "05-03-2024",
          attendees: []
        }
      ]
    });
  });
});
