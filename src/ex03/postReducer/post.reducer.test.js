import postReducer from "./post.reducer";

describe("testing postReducer", () => {
  it("should add new post object to posts array", () => {
    const initialState = {
      posts: []
    };

    const action = {
      type: "CREATE_POST",
      payload: {
        id: 1,
        author: "Omkar",
        content: "Good Morning, Everyone...!",
        likes: 0
      }
    };

    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Omkar",
          content: "Good Morning, Everyone...!",
          likes: 0
        }
      ]
    });
  });

  it("should update the content of specified post", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "Omkar",
          content: "Good Morning, Everyone...!",
          likes: 0
        }
      ]
    };

    const action = {
      type: "EDIT_POST",
      payload: {
        id: 1,
        newContent: "Good Night, Everyone...!"
      }
    };

    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Omkar",
          content: "Good Night, Everyone...!",
          likes: 0
        }
      ]
    });
  });

  it("should delete specified post from posts array", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "Omkar",
          content: "Good Night, Everyone...!",
          likes: 0
        }
      ]
    };

    const action = {
      type: "DELETE_POST",
      payload: {
        id: 1
      }
    };

    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: []
    });
  });

  it("should increase like count of specified post by 1", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "Omkar",
          content: "Good Night, Everyone...!",
          likes: 0
        }
      ]
    };

    const action = {
      type: "LIKE_POST",
      payload: {
        id: 1
      }
    };

    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Omkar",
          content: "Good Night, Everyone...!",
          likes: 1
        }
      ]
    });
  });
});
