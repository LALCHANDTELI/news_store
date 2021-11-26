const Sports_News = (state = null, action) => {
    if (action.type === "sports") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default Sports_News;
  