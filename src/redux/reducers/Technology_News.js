const Technology_News = (state = null, action) => {
    if (action.type === "technology") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default Technology_News;
  