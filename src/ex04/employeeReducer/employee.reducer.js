export const initialState = {
  employees: []
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE": {
      return { ...state, employees: [...state.employees, action.payload] };
    }

    case "UPDATE_SALARY": {
      return {
        ...state,
        employees: state.employees.reduce((allEmployees, currentEmployee) => {
          return currentEmployee.id === action.payload.id
            ? [
                ...allEmployees,
                { ...currentEmployee, salary: action.payload.newSalary }
              ]
            : [...allEmployees, currentEmployee];
        }, [])
      };
    }

    case "REMOVE_EMPLOYEE": {
      return {
        ...state,
        employees: state.employees.filter(({ id }) => id !== action.payload.id)
      };
    }

    case "FILTER_EMPLOYEES": {
      return {
        ...state,
        employees: state.employees.filter(
          ({ role }) => role === action.payload.role
        )
      };
    }
    default:
      return state;
  }
}

export default employeeReducer;
