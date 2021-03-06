import React from "react";
import millify from "millify";
import { Cryptocurrencies, News } from "../components";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return "Loading...";
  const globalState = data?.data?.stats;
  console.log(data);
  console.log(globalState);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalState.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalState.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={millify(globalState.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalState.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalState.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 cryptocurrencies in the world{" "}
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies"> see more</Link>
        </Title>
      </div>
      {!isFetching && <Cryptocurrencies simplified />}
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news"> see more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
