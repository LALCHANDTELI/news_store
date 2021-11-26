const Science_News = (state = null, action) => {
    if (action.type === "science") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default Science_News;
  