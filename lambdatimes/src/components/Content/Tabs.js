import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

        {props.tabs.map(tab => {
          return (
            <Tab
              tab={tab}
              selectedTab={props.selected}
              selectTabHandler={props.selectTabHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};

Tabs.propTypes = {
  tab: PropTypes.object
};

Tabs.propTypes = {
  selectedTab: PropTypes.string
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func
};

export default Tabs;
