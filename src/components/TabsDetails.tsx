import Description from "@/app/product-search/add-product/tab-Pages/Description";
import Offer from "@/app/product-search/add-product/tab-Pages/Offer";
import ProductDetails from "@/app/product-search/add-product/tab-Pages/ProductDetails";
import ProductIdentity from "@/app/product-search/add-product/tab-Pages/ProductIdentity";
import SafetyCompliance from "@/app/product-search/add-product/tab-Pages/SafetyCompliance";
import {
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import TabAlert from "./TabAlert";
import axios from "axios";
import { useState } from "react";

const attributes = ["Required", "Recommended", "All atributes"];

interface Props {
  selectedTabIndex: number;
}

const TabsDetails = ({ selectedTabIndex }: Props) => {
  const [weight, setWeight] = useState("120");
  const [length, setLength] = useState("20.32");
  const [width, setWidth] = useState("5.08");
  const [height, setHeight] = useState("15.24");
  const [category, setCategory] = useState("Headphones");
  const [passed, setPassed] = useState<boolean | null>(null);

  // Render different components based on selectedTab
  let TabContent;

  switch (selectedTabIndex) {
    case 0:
      TabContent = <ProductIdentity />;
      break;
    case 1:
      TabContent = <Description />;
      break;

    case 2:
      TabContent = (
        <ProductDetails
          weight={weight}
          setWeight={setWeight}
          length={length}
          setLength={setLength}
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          category={category}
          setCategory={setCategory}
          passed={passed}
        />
      );
      break;

    case 3:
      TabContent = <Offer />;
      break;
    case 4:
      TabContent = <SafetyCompliance />;
      break;
    default:
      TabContent = <ProductIdentity />;
      break;
  }

  // Handle the click event
  const handleClick = async () => {
    // const response = await axios.get("/api/items");
    const response = await axios.get(
      `/predict-weight?product_name=${category}&length=${length}&width=${width}&height=${height}&weight=${weight}`
      // "/predict-weight?product_name=Headphones&length=20.32&width=5.08&height=15.24&weight=120"
    );

    // Handle the response data
    console.log("Response data:", response.data);

    setPassed(response.data.passed);
  };

  return (
    <div className="flex">
      {/* Left Column */}
      <div className="flex flex-col items-center min-w-[360px]">
        <div className="mt-8 space-y-6">
          {/* Listing Language */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span>Listing Language</span>
              <QuestionMarkCircleIcon className="h-5 w-5 cursor-pointer" />
            </div>
            <div className="flex space-x-2 items-center">
              <div className="flex items-center space-x-4 border-[1.5px] border-black rounded-[4px] px-[7px] py-[3px] cursor-pointer text-xs">
                <span>English</span>
                <ChevronDownIcon className="h-3 w-3 stroke-2" />
              </div>
            </div>
          </div>
          {/* Attribute buttons */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span>Attributes</span>
              <QuestionMarkCircleIcon className="h-5 w-5 cursor-pointer" />
            </div>

            {/* Radio buttons */}
            <div className="flex flex-col">
              {attributes.map((attribute, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="attributes"
                    value="1"
                    defaultChecked={attribute === "Recommended"}
                    className="form-radio accent-[#008296] h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700">{attribute}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="font-bold space-x-2">
            <ClipboardDocumentIcon className="inline h-5 w-5 cursor-pointer stroke-2" />
            <span>
              Copy from existing <br /> products
            </span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-2/3">
        <TabAlert />
        {TabContent}
        <div className="flex justify-end space-x-2 pr-10 mt-4 mb-6">
          <button className="font-semibold select-none border border-[#C0C3C4] border-opacity-75 text-black rounded-[2px] shadow-md text-center text-sm py-2 px-6 cursor-pointer bg-[#c6cacb] bg-opacity-35 focus:outline-none">
            Save as draft
          </button>
          <button
            onClick={handleClick}
            className="font-semibold select-none text-white text-center rounded-[2px] shadow-md text-sm py-2 px-6 cursor-pointer bg-[#016E7E] focus:outline-none"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabsDetails;
