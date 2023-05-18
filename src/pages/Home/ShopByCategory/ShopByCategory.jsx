import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabsByCategory from "./TabsByCategory";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("sports-car");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/toys/sub-category?subCategory=${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // console.log(toys);
  const items = (
    <div className="flex flex-col md:flex-row md:gap-8 overflow-x-hidden overflow-y-hidden">
      {isLoading ? (
        <div className="w-2/3 mx-auto">
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        toys
          ?.slice(0, 3)
          .map((toy) => (
            <TabsByCategory key={toy._id} toy={toy}></TabsByCategory>
          ))
      )}
    </div>
  );

  return (
    <div className="p-4 w-full md:w-3/4 mx-auto">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        <span className="text-[#4acdd5] underline">Shop</span> By Category
      </h2>
      <Tabs id="controlled-tabs" selectedTabClassName="bg-white">
        <TabList className="flex md:justify-center items-center gap-2 text-xs md:text-xl font-bold ">
          <Tab onClick={() => handleTabClick("sports-car")}>
            <h2
              className={`rounded-full  md:px-6 md:py-2  ${
                activeTab == "sports-car"
                  ? " bg-cyan-400 text-white text-center"
                  : "bg-slate-100"
              }`}
            >
              Sports cars
            </h2>
          </Tab>
          <Tab onClick={() => handleTabClick("police-car")}>
            <h2
              className={`rounded-full  md:px-6 md:py-2  ${
                activeTab == "police-car"
                  ? " bg-cyan-400 text-white text-center"
                  : "bg-slate-100"
              }`}
            >
              Police cars
            </h2>
          </Tab>
          <Tab onClick={() => handleTabClick("fire-truck")}>
            <h2
              className={`rounded-full  md:px-6 md:py-2  ${
                activeTab == "fire-truck"
                  ? " bg-cyan-400 text-white text-center"
                  : "bg-slate-100"
              }`}
            >
              Fire Truck
            </h2>
          </Tab>
        </TabList>

        <TabPanel>{items}</TabPanel>
        <TabPanel>{items}</TabPanel>
        <TabPanel>{items}</TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
