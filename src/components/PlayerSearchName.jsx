import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';


const dataSourceConfig = {
  text: 'fullName',
  value: 'fullName',
};

const PlayerSearchName = props => (
  <div>
    <AutoComplete
      hintText="Search For Player"
      filter={AutoComplete.fuzzyFilter}
      openOnFocus
      dataSource={props.playerData}
      dataSourceConfig={dataSourceConfig}
      maxSearchResults={5}
      fullWidth
      onNewRequest={(chosenRequest) => {
        props.updatePlayerDataCallBack(chosenRequest);
      }
      }
    />
  </div>
);

export default PlayerSearchName;
