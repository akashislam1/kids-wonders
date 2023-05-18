import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("sports-car");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  console.log(activeTab);
  return (
    <div className="p-4">
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabClick("sports-car")}>Sports car</Tab>
          <Tab onClick={() => handleTabClick("police-car")}>Police car</Tab>
          <Tab onClick={() => handleTabClick("fire-truck")}>Fire truck</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
