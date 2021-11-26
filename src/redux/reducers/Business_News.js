const Business_News = (state = null, action) => {
    if (action.type === "business") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default Business_News;
  