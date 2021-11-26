const Home_Page_News = (state = null, action) => {
  if (action.type === "home") {
    return action.payload;
  } else {
    return state;
  }
};

export default Home_Page_News;
