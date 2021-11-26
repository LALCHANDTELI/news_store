import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_SEARCH_URL, API_URL } from "../../keys";
import { Home_Page_News,Business_Page_News,Entertainment_Page_News,Health_Page_News,Science_Page_News,Sports_Page_News,Technology_Page_News } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";


const News_Container = () => {
  const { title} = useParams();
  const [news_container, set_news_container] = useState(null);
  const Home_News = useSelector((state) => state.Home_News);
  const Business_News = useSelector((state) => state.Business_News);
  const Entertainment_News =useSelector((state) => state.Entertainment_News);
  const Health_News = useSelector((state)=>state.Health_News);
  const Science_News = useSelector((state)=>state.Science_News);
  const Sports_News = useSelector((state)=>state.Sports_News);
  const Technology_News = useSelector((state)=>state.Technology_News);




  const dispatch = useDispatch();

  useEffect(async () => {


switch(title){
    case "business":
        if(Business_News===null){
            var news = await axios.get(`${API_URL}&category=${title}&apikey=${API_KEY}`);
            set_news_container(news.data.articles);
          dispatch(Business_Page_News(news.data.articles));
        }else{
            set_news_container(Business_News);
        }
    break;

    case "technology":
        if(Technology_News===null){
            var news = await axios.get(`${API_URL}&category=${title}&apikey=${API_KEY}`);
            console.log(news)
            set_news_container(news.data.articles);
          dispatch(Technology_Page_News(news.data.articles));
        }else{
            set_news_container(Technology_News);
        }
    break;

    case "entertainment":
        if(Entertainment_News===null){
            var news = await axios.get(`${API_URL}&category=${title}&apikey=${API_KEY}`);
            set_news_container(news.data.articles);
          dispatch(Entertainment_Page_News(news.data.articles));
        }else{
            set_news_container(Entertainment_News);
        }
        
    break;


    case "health":
        if(Health_News===null){
            var news = await axios.get(`${API_URL}&category=${title}&apikey=${API_KEY}`);
            set_news_container(news.data.articles);
          dispatch(Health_Page_News(news.data.articles));
        }else{
            set_news_container(Health_News);
        }
       
    break;

    
    case "science":
        if(Science_News===null){
            var news = await axios.get(`${API_URL}&category=${title}&apikey=${API_KEY}`);
            set_news_container(news.data.articles);
          dispatch(Science_Page_News(news.data.articles));
        }else{
            set_news_container(Science_News);
        }

    break;

    
    case "sports":
        if(Sports_News===null){
            var news = await axios.get(`${API_URL}&category=${title}&apikey=${API_KEY}`);
            set_news_container(news.data.articles);
          dispatch(Sports_Page_News(news.data.articles));
        }else{
            set_news_container(Sports_News);
        }

    break;


    case undefined:
        if(Home_News===null){
            var news = await axios.get(`${API_URL}&apikey=${API_KEY}`);
            set_news_container(news.data.articles);
          dispatch(Home_Page_News(news.data.articles));
        }else{
            set_news_container(Home_News)
        }
    break;

    default:

       var news = await axios.get(`${API_SEARCH_URL}?${title}&apikey=${API_KEY}`);
       if(news.data.articles.length===0){
set_news_container("Data Not Found")
       }
        set_news_container(news.data.articles);
    break;
}
  }, [title]);

  const Print_News = () => {
      


if(news_container==="Data Not Found"){
    return(
        <div class="col-md-4 mx-auto p-3">
        <div class="card bg-dark text-white">
        <div class="card-body text-center">
          <h1>Data Not Found </h1>
          </div>
        </div>
        </div>
    )
}


    if (news_container != null) {
      return news_container.map((news) => {
        return (
          <div class="col-md-4 mx-auto p-3">
            <div class="card bg-dark text-white">
              <div class="card-header text-center">
                {news.title != null ? news.title.slice(0, 100) : ""}
                ...
              </div>
              <a href={news.url} target="_blank">
                <img
                  height="250px"
                  class="card-img-top"
                  src={
                    news.urlToImage != null
                      ? news.urlToImage
                      : "https://res.cloudinary.com/dcxhqv5lu/image/upload/v1637838954/no-photo-available-hi_uifqcm.png"
                  }
                  alt="news"
                />
              </a>
              <div class="card-body text-center">
                {news.description}
              </div>
              <div class="card-footer text-center">
                Published At {news.publishedAt!=null?news.publishedAt.split("T")[0]:""}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="container">
      <div class="row bg-light pt-5 pb-5">{Print_News()}</div>
    </div>
  );
};

export default News_Container;
