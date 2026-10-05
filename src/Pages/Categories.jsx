import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const Categories = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      console.log(filterNews);
      setCategoryNews(filterNews);
    }
  }, [id, data]);
  return (
    <div className="mx-4">
      <h2 className="text-lg font-bold">
        Total <span className="text-secondary">{categoryNews.length}</span> news
        Found
      </h2>
      <div className="grid grid-cols-1 gap-5 ">
        {
          categoryNews.map(news => <NewsCard news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default Categories;
