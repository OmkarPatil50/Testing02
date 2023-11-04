import bookshelfReducer from "./bookshelf.reducer";

describe("testing bookshelfReducer", () => {
  it("should add new book to books array", () => {
    const initialState = {
      books: [],
      categories: []
    };
    const action = {
      type: "ADD_BOOK",
      payload: {
        id: 1,
        title: "Zero To One",
        author: "Peter Thiel"
      }
    };
    const updatedState = bookshelfReducer(initialState, action);

    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "Zero To One",
          author: "Peter Thiel",
          category: null
        }
      ],
      categories: []
    });
  });

  it("should add new category to categories array", () => {
    const initialState = {
      books: [],
      categories: []
    };
    const action = {
      type: "ADD_CATEGORY",
      payload: {
        id: 1,
        name: "fiction"
      }
    };
    const updatedState = bookshelfReducer(initialState, action);

    expect(updatedState).toEqual({
      books: [],
      categories: [
        {
          id: 1,
          name: "fiction"
        }
      ]
    });
  });

  it("should assign category to specific book", () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: "Zero To One",
          author: "Peter Thiel",
          category: null
        }
      ],
      categories: [
        {
          id: 1,
          name: "fiction"
        }
      ]
    };
    const action = {
      type: "ASSIGN_CATEGORY",
      payload: {
        bookId: 1,
        categoryId: 1
      }
    };
    const updatedState = bookshelfReducer(initialState, action);

    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "Zero To One",
          author: "Peter Thiel",
          category: 1
        }
      ],
      categories: [
        {
          id: 1,
          name: "fiction"
        }
      ]
    });
  });
});
