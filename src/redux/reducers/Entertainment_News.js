const Entertainment_News = (state = null, action) => {
    if (action.type === "entertainment") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default Entertainment_News;
  