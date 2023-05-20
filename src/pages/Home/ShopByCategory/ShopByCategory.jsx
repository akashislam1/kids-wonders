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
    fetch(
      `https://kids-wonders-server.vercel.app/toys/sub-category?subCategory=${activeTab}`
    )
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
    <div className="p-1 w-full md:w-3/4 mx-auto">
      <h2 className="text-center font-bold text-4xl mt-5 mb-8">
        <span className="text-[#4acdd5]">Shop</span> By Category
        <span className="text-pink-500">.</span>
      </h2>
      <Tabs id="controlled-tabs" selectedTabClassName="bg-white">
        <TabList className="flex justify-between md:justify-center  items-center md:gap-2 text-sm md:text-xl md:font-bold ">
          <Tab onClick={() => handleTabClick("sports-car")}>
            <h2
              className={`rounded-lg md:rounded-full  md:px-6 md:py-2 text-center ${
                activeTab == "sports-car"
                  ? " bg-cyan-400 text-white "
                  : "bg-slate-100"
              }`}
            >
              Sports cars
            </h2>
          </Tab>
          <Tab onClick={() => handleTabClick("police-car")}>
            <h2
              className={`rounded-lg md:rounded-full  md:px-6 md:py-2 text-center ${
                activeTab == "police-car"
                  ? " bg-cyan-400 text-white"
                  : "bg-slate-100"
              }`}
            >
              Police cars
            </h2>
          </Tab>
          <Tab onClick={() => handleTabClick("fire-truck")}>
            <h2
              className={`rounded-lg md:rounded-full  md:px-6 md:py-2 text-center ${
                activeTab == "fire-truck"
                  ? " bg-cyan-400 text-white "
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
