import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import Loading from "../components/Loading"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loadings, setLoadings] = useState(false)
  const fetchVideos = async () => {
    setLoadings(true)
    try {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);

    } catch (err) {
console.log('err');
    } finally {
      setTimeout(() => {
        setLoadings(false)
      }, 10000);
    }
  };
  useEffect(() => {

    fetchVideos();
  }, [type]);

  console.log(videos);
  return (
    <>
      {loadings ?
        <Loading /> :
        <Container>
          {videos.map((video) => (
            <Card key={video._id} video={video} />
          ))}
        </Container>
      }
    </>
  );
};

export default Home;
