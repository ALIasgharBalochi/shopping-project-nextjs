"use client";
import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import fetchData from "@/data/dataFetch";

type Blogs = {
  id: string;
  date: string;
  photo_tomnail: string;
  photo_back: string;
  title: string;
  content: string;
  userName: string;
  userID: string;
  reactions: {
    like: number;
    dislike: number;
  };
};

const BlogsComponent = (): React.ReactNode => {
  const [data, setData] = useState<Blogs[]>([]);

  useEffect((): void => {
    const fetch = async () => {
      const URLgetBlogs: string = "http://localhost:9000/blogs";
      const res = await fetchData(URLgetBlogs);
      return setData(res);
    };
    fetch();
  }, []);

  const srt = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  return (
    <>
      <div className=" w-full my-3 h-10 flex items-center justify-between border-b-2 border-gray-600">
        <h1 className=" font-bold">Our Blog</h1>
        <p>View all</p>
      </div>
      <Grid container>
        {data.length > 0 ? (
          <>
            <Grid xs={12} sm={12} md={4} sx={{ p: "1px" }}>
              <div className="group hover:shadow-sm cursor-pointer flex flex-col rounded-md bg-white ">
                <div className=" w-full h-48">
                  <img
                    src={data[0].photo_tomnail}
                    className=" w-full h-full rounded-t-md"
                    alt="blog"
                  />
                </div>
                <div className=" w-full flex flex-col m-2 p-1">
                  <section className=" w-full flex items-center my-1 justify-around">
                    <p className=" text-gray-500 text-xs">{data[0].date}</p>
                    <p className=" text-gray-500 text-xs">{data[0].userName}</p>
                  </section>
                  <h1 className=" text-black text-sm font-bold group-hover:text-secondary-300">
                    {srt(data[0].title, 35)}
                  </h1>
                  <p className=" text-gray-700 text-xs">
                    {srt(data[0].content, 75)}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={8} sx={{ p: "1px" }}>
              <div className="group hover:shadow-md cursor-pointer w-full h-auto flex flex-col md:flex-row">
                <div className=" h-48 w-full md:h-full md:w-[30rem]">
                  <img
                    src={data[1].photo_tomnail}
                    className=" w-full h-full rounded-l-md"
                    alt="blog"
                  />
                </div>
                <div className=" w-full flex flex-col m-2 p-1 ">
                  <div className=" md:hidden">
                    <section className=" w-full flex items-center my-1 justify-around md:hidden">
                      <p className=" text-gray-500 text-xs">{data[1].date}</p>
                      <p className=" text-gray-500 text-xs">
                        {data[1].userName}
                      </p>
                    </section>
                    <h1 className=" text-black text-sm font-bold group-hover:text-secondary-300">
                      {srt(data[1].title, 35)}
                    </h1>
                    <p className=" text-gray-700 text-xs">
                      {srt(data[1].content, 75)}
                    </p>
                  </div>
                  <div className="max-[767px]:hidden">
                    <h1 className=" text-md group-hover:text-secondary-300">
                      {srt(data[1].title, 45)}
                    </h1>
                    <p className=" text-gray-600 text-sm">
                      {srt(data[1].content, 95)}
                    </p>
                    <div className=" flex flex-row items-center mt-auto justify-between w-full">
                      <p className=" text-gray-500 text-xs">{data[1].date}</p>
                      <p className=" text-gray-500 text-xs group-hover:text-secondary-300">
                        save
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group hover:shadow-sm cursor-pointer w-full h-auto flex flex-col md:flex-row mt-[1px]">
                <div className=" h-48 w-full md:h-full md:w-[30rem]">
                  <img
                    src={data[2].photo_tomnail}
                    className=" w-full h-full  rounded-t-md md:rounded-l-md"
                    alt="blog"
                  />
                </div>
                <div className=" w-full flex flex-col m-2 p-1 ">
                  <div className=" md:hidden">
                    <section className=" w-full flex items-center my-1 justify-around md:hidden">
                      <p className=" text-gray-500 text-xs">{data[2].date}</p>
                      <p className=" text-gray-500 text-xs">
                        {data[2].userName}
                      </p>
                    </section>
                    <h1 className=" text-black text-sm font-bold group-hover:text-secondary-300">
                      {srt(data[2].title, 35)}
                    </h1>
                    <p className=" text-gray-700 text-xs">
                      {srt(data[2].content, 75)}
                    </p>
                  </div>
                  <div className=" max-[767px]:hidden">
                    <h1 className=" text-md group-hover:text-secondary-300">
                      {srt(data[2].title, 45)}
                    </h1>
                    <p className=" text-gray-600 text-sm">
                      {srt(data[2].content, 95)}
                    </p>
                    <div className=" flex flex-row items-center mt-auto justify-between w-full">
                      <p className=" text-gray-500 text-xs">{data[2].date}</p>
                      <p className=" text-gray-500 text-xs group-hover:text-secondary-300">
                        save
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default BlogsComponent;
