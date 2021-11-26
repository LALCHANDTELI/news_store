const Health_News = (state = null, action) => {
    if (action.type === "health") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default Health_News;
  