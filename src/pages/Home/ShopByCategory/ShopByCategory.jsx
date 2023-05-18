import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabsByCategory from "./TabsByCategory";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("sports-car");

  useEffect(() => {
    fetch(`http://localhost:5000/toys/sub-category?subCategory=${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // console.log(toys);

  return (
    <div className="p-4 w-full md:w-2/3 mx-auto ">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        Shop By Category
      </h2>
      <Tabs>
        <TabList className="flex gap-2 text-xs md:text-xl font-bold">
          <Tab onClick={() => handleTabClick("sports-car")}>Sports car</Tab>
          <Tab onClick={() => handleTabClick("police-car")}>Police car</Tab>
          <Tab onClick={() => handleTabClick("fire-truck")}>Fire truck</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col md:flex-row md:gap-8 overflow-x-hidden overflow-y-hidden">
            {toys?.map((toy) => (
              <TabsByCategory key={toy._id} toy={toy}></TabsByCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col md:flex-row md:gap-8 overflow-x-hidden overflow-y-hidden">
            {toys?.map((toy) => (
              <TabsByCategory key={toy._id} toy={toy}></TabsByCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col md:flex-row md:gap-8 overflow-x-hidden overflow-y-hidden">
            {toys?.map((toy) => (
              <TabsByCategory key={toy._id} toy={toy}></TabsByCategory>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
