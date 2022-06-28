import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_SEARCH_URL, API_URL } from "../../keys";
import { Home_Page_News,Business_Page_News,Entertainment_Page_News,Health_Page_News,Science_Page_News,Sports_Page_News,Technology_Page_News } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs"


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
            var news = await axios.get(`${API_URL}&topic=${title}`,{
            headers:{
              'x-api-key': API_KEY
          }
        }
            );
            set_news_container(news.data.articles);
          dispatch(Business_Page_News(news.data.articles));
        }else{
            set_news_container(Business_News);
        }
    break;

    case "technology":
        if(Technology_News===null){
            var news = await axios.get(`${API_URL}&topic=tech`,{
              headers:{
                'x-api-key': API_KEY
            }
          });
            console.log(news)
            set_news_container(news.data.articles);
          dispatch(Technology_Page_News(news.data.articles));
        }else{
            set_news_container(Technology_News);
        }
    break;

    case "entertainment":
        if(Entertainment_News===null){
            var news = await axios.get(`${API_URL}&topic=${title}`,{
              headers:{
                'x-api-key': API_KEY
            }
          });
            set_news_container(news.data.articles);
          dispatch(Entertainment_Page_News(news.data.articles));
        }else{
            set_news_container(Entertainment_News);
        }
        
    break;


 

    
    case "science":
        if(Science_News===null){
            var news = await axios.get(`${API_URL}&topic=${title}`,{
              headers:{
                'x-api-key': API_KEY
            }
          });
            set_news_container(news.data.articles);
          dispatch(Science_Page_News(news.data.articles));
        }else{
            set_news_container(Science_News);
        }

    break;

    
    case "sports":
        if(Sports_News===null){
            var news = await axios.get(`${API_URL}&topic=sport`,{
              headers:{
                'x-api-key': API_KEY
            }
          });
            set_news_container(news.data.articles);
          dispatch(Sports_Page_News(news.data.articles));
        }else{
            set_news_container(Sports_News);
        }

    break;


    case undefined:
        if(Home_News===null){
            var news = await axios.get(`${API_URL}`,{
              headers:{
                'x-api-key': API_KEY
            }
          });
            set_news_container(news.data.articles);
          dispatch(Home_Page_News(news.data.articles));
        }else{
            set_news_container(Home_News)
        }
    break;

    default:
       var news = await axios.get(`${API_SEARCH_URL}q=${title}&countries=IN`,{
        headers:{
          'x-api-key': API_KEY
      }
    });


       if(news.data.page_size===0){
        set_news_container(null)
alert("data not found")

       }
        set_news_container(news.data.articles);
    break;
}
  }, [title]);

  const Print_News = () => {
      



    if (news_container != null) {
      return news_container.map((item) => {
        return (
          <div key={item.title} class="col-md-6 col-sm-12 col-lg-4 mx-auto p-3">
          <div class="card">
      <img height="200px" class="card-img-top" src={item.media} />
      <div class="card-body">
      <h4 class="card-title">{item.title}</h4>
          <Tabs>
              <TabPanel>
              <p class="card-text">{item.summary.slice(0,300)}...</p>
              </TabPanel>
              <TabPanel>
              <p class="card-text">{item.summary}</p>
              </TabPanel>
              <TabList className="TabList">
                  <Tab className="Tab">
                  <a target="_blank" href={item.link} className="btn m-1 btn-warning">Full article</a>
                  </Tab>
                  <Tab className="Tab">
                  <p className="btn m-1 btn-primary">Read more</p>
                  </Tab>
              </TabList>
              </Tabs>
        
       
        
        
      </div>
    </div>
          </div>
        );
      });
    }
  };

  return (


    <div className="bg-secondary pt-5">
    <div className="container bg-dark">
         <div class="row">
   {Print_News()}
         </div>
       </div>
         </div>
  );
};

export default News_Container;
