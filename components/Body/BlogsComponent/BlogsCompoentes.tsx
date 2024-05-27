"use client";
import React, { useState, useEffect } from "react";
import fetchData from "@/data/dataFetch";
import { Blogs } from "../../Types/Types";
import BlogsContent from "./BlogsContent";
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

  return (
    <>
      <div className=" w-full my-3 h-10 flex items-center justify-between border-b-2 border-gray-600">
        <h1 className=" font-bold">Our Blog</h1>
        <p>View all</p>
      </div>
      <BlogsContent data={data} />
    </>
  );
};

export default BlogsComponent;
