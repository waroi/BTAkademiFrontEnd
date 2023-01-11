import React, { useEffect, useState } from "react";

const ContactPosts = () => {
  const [getPosts, setPosts] = useState([]);
  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/contacts");
    const parsedData = await data.json();
    setPosts(parsedData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
};

export default ContactPosts;
