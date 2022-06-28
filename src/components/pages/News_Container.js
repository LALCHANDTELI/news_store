import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_SEARCH_URL, API_URL } from "../../keys";
import {
  Home_Page_News,
  Business_Page_News,
  Entertainment_Page_News,
  Science_Page_News,
  Sports_Page_News,
  Technology_Page_News,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const News_Container = () => {
  const { title } = useParams();
  const [news_container, set_news_container] = useState(null);
  const Home_News = useSelector((state) => state.Home_News);
  const Business_News = useSelector((state) => state.Business_News);
  const Entertainment_News = useSelector((state) => state.Entertainment_News);
  const Science_News = useSelector((state) => state.Science_News);
  const Sports_News = useSelector((state) => state.Sports_News);
  const Technology_News = useSelector((state) => state.Technology_News);
  const dispatch = useDispatch();

  // window.addEventListener("scroll", async () => {
  //   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  //   if (scrollTop + clientHeight > scrollHeight - clientHeight * 2) {
  //     setAPIcalling(true);
  //     if (isAPIcalling) {
  //       console.log("one time call");
  //       //callNextPage(pageSize + 10);
  //     }
  //   }
  // });

  // const callNextPage = async (page) => {
  //   try {
  //     if (isAPIcalling === true) {
  //       setAPIcalling(false);
  //       if (title === undefined) {
  //         console.log("inside");
  //       }
  //       let size = pageSize + 10;
  //       setPageSize(size);
  //       console.log(news_container.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    callApi();
    async function callApi() {
      set_news_container(null);
      switch (title) {
        case "business":
          if (Business_News === null) {
            let news = await axios.get(`${API_URL}&topic=${title}`, {
              headers: {
                "x-api-key": API_KEY,
              },
            });

            set_news_container(news.data);
            dispatch(Business_Page_News(news.data));
          } else {
            set_news_container(Business_News);
          }
          break;

        case "technology":
          if (Technology_News === null) {
            let news = await axios.get(`${API_URL}&topic=tech`, {
              headers: {
                "x-api-key": API_KEY,
              },
            });

            set_news_container(news.data);
            dispatch(Technology_Page_News(news.data));
          } else {
            set_news_container(Technology_News);
          }
          break;

        case "entertainment":
          if (Entertainment_News === null) {
            let news = await axios.get(`${API_URL}&topic=${title}`, {
              headers: {
                "x-api-key": API_KEY,
              },
            });

            set_news_container(news.data);
            dispatch(Entertainment_Page_News(news.data));
          } else {
            set_news_container(Entertainment_News);
          }

          break;

        case "science":
          if (Science_News === null) {
            let news = await axios.get(`${API_URL}&topic=${title}`, {
              headers: {
                "x-api-key": API_KEY,
              },
            });

            set_news_container(news.data);
            dispatch(Science_Page_News(news.data));
          } else {
            set_news_container(Science_News);
          }

          break;

        case "sports":
          if (Sports_News === null) {
            let news = await axios.get(`${API_URL}&topic=sport`, {
              headers: {
                "x-api-key": API_KEY,
              },
            });

            set_news_container(news.data);
            dispatch(Sports_Page_News(news.data));
          } else {
            set_news_container(Sports_News);
          }

          break;

        case undefined:
          if (Home_News === null) {
            let news = await axios.get(`${API_URL}`, {
              headers: {
                "x-api-key": API_KEY,
              },
            });
            set_news_container(news.data);
            dispatch(Home_Page_News(news.data));
          } else {
            set_news_container(Home_News);
          }
          break;

        default:
          let news = await axios.get(
            `${API_SEARCH_URL}q=${title}&countries=IN`,
            {
              headers: {
                "x-api-key": API_KEY,
              },
            }
          );

          if (news.data.page_size === 0) {
            set_news_container(null);
            alert("data not found");
          } else {
            set_news_container(null);
            set_news_container(news.data);
          }
          break;
      }
    }
  }, [
    Business_News,
    Entertainment_News,
    Home_News,
    Science_News,
    Sports_News,
    Technology_News,
    dispatch,
    title,
  ]);

  const Print_News = () => {
    if (news_container != null) {
      return news_container.articles.map((item) => {
        return (
          <div
            key={item.title}
            className="col-md-6 col-sm-12 col-lg-4 mx-auto p-3"
          >
            <div className="card">
              <img
                height="200px"
                className="card-img-top"
                alt="media"
                src={
                  item.media === "http://www.samaylive.com/favicon.ico"
                    ? "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"
                    : item.media
                }
              />
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <Tabs>
                  <TabPanel>
                    <p className="card-text">{item.summary.slice(0, 300)}...</p>
                  </TabPanel>
                  <TabPanel>
                    <p className="card-text">{item.summary}</p>
                  </TabPanel>
                  <TabList className="TabList">
                    <Tab className="Tab float-right">
                      <a
                        target="_blank"
                        href={item.link}
                        className="btn m-1 btn-warning"
                        rel="noreferrer"
                      >
                        Full article
                      </a>
                    </Tab>
                    <Tab className="Tab float-left">
                      <p className="btn m-1 btn-primary">Read more</p>
                    </Tab>
                  </TabList>
                </Tabs>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="w-100">
          <img
            src="/images/loading.gif"
            width="100%"
            height="300px"
            className="w-100"
            alt="loading"
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-secondary pt-5">
      <div className="container bg-dark">
        <div className="row">{Print_News()}</div>
      </div>
    </div>
  );
};

export default News_Container;
