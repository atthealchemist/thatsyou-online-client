import "../styles.css";

import React from "react";
import { PlayerList } from "../components/PlayerList";

import { Layout } from "antd";
const { Content, Sider } = Layout;

const GamePage = ({ players }) => {
  const playersSortedByScore = players.sort((first, second) =>
    first.score <= second.score ? 1 : -1
  );

  return (
    <Layout>
      <Layout>
        <Content>
          <canvas id="stage"></canvas>
        </Content>
        <Sider className="transparent">
          <PlayerList players={playersSortedByScore} />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default GamePage;
