import "../styles.css";

import React, { useState } from "react";

import { List, Divider, Typography } from "antd";

const { Title, Text } = Typography;

const PlayerListHeader = ({ size }) => {
  return (
    <>
      <Title level={4}>Players ({size})</Title>
    </>
  );
};

const PlayerListItem = ({ id, name, active, score }) => {
  const playerStatuses = {
    active: {
      type: "success",
      strong: true
    },
    inactive: {
      disabled: true
    }
  };

  const playerStatus = playerStatuses[active ? "active" : "inactive"];

  return (
    <List.Item>
      <List.Item.Meta
        title={
          <Text {...playerStatus}>
            {id}. {name}
          </Text>
        }
        description={`Score: ${score}`}
      />
    </List.Item>
  );
};

const PlayerList = ({ players }) => {
  return (
    <List
      className="list"
      header={<PlayerListHeader size={players.length} />}
      bordered
      dataSource={players}
      renderItem={PlayerListItem}
    />
  );
};

export { PlayerList };
