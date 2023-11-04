import employeeReducer from "./employee.reducer";

describe("testing employeeReducer", () => {
  it("should add new employee to employees array", () => {
    const initialState = {
      employees: []
    };

    const action = {
      type: "ADD_EMPLOYEE",
      payload: {
        id: 1,
        name: "Omkar Patil",
        role: "Frontend Developer",
        salary: 150000
      }
    };

    const updatedState = employeeReducer(initialState, action);

    expect(updatedState).toEqual({
      employees: [
        {
          id: 1,
          name: "Omkar Patil",
          role: "Frontend Developer",
          salary: 150000
        }
      ]
    });
  });

  it("should update salary of specified employee", () => {
    const initialState = {
      employees: [
        {
          id: 1,
          name: "Omkar Patil",
          role: "Frontend Developer",
          salary: 150000
        }
      ]
    };

    const action = {
      type: "UPDATE_SALARY",
      payload: {
        id: 1,
        newSalary: 200000
      }
    };

    const updatedState = employeeReducer(initialState, action);

    expect(updatedState).toEqual({
      employees: [
        {
          id: 1,
          name: "Omkar Patil",
          role: "Frontend Developer",
          salary: 200000
        }
      ]
    });
  });

  it("should remove specified employee from employees array", () => {
    const initialState = {
      employees: [
        {
          id: 1,
          name: "Omkar Patil",
          role: "Frontend Developer",
          salary: 150000
        }
      ]
    };

    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: {
        id: 1
      }
    };

    const updatedState = employeeReducer(initialState, action);

    expect(updatedState).toEqual({
      employees: []
    });
  });

  it("should filter employees based on their roles", () => {
    const initialState = {
      employees: [
        {
          id: 1,
          name: "Omkar Patil",
          role: "Frontend Developer",
          salary: 150000
        },
        {
          id: 2,
          name: "Rushikesh Choudhari",
          role: "Backend Developer",
          salary: 150000
        },
        {
          id: 3,
          name: "Tanay Pratap",
          role: "Co-Founder",
          salary: 250000
        },
        {
          id: 4,
          name: "Tanvi Priya",
          role: "Legal Advisor",
          salary: 200000
        },
        {
          id: 5,
          name: "Akansha Choudhari",
          role: "Technical Head",
          salary: 200000
        }
      ]
    };

    const action = {
      type: "FILTER_EMPLOYEES",
      payload: {
        role: "Legal Advisor"
      }
    };

    const updatedState = employeeReducer(initialState, action);

    expect(updatedState).toEqual({
      employees: [
        {
          id: 4,
          name: "Tanvi Priya",
          role: "Legal Advisor",
          salary: 200000
        }
      ]
    });
  });
});
