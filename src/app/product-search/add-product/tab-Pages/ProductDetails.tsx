import React, { useState, useRef, Dispatch, SetStateAction } from "react";

import {
  QuestionMarkCircleIcon,
  PlusCircleIcon,
  CameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import TabErrorAlert from "@/components/TabErrorAlert";
import TabSuccessAlert from "@/components/TabSuccessAlert";

interface Props {
  weight: string;
  setWeight?: Dispatch<SetStateAction<string>>;
  length: string;
  setLength?: Dispatch<SetStateAction<string>>;
  width: string;
  setWidth?: Dispatch<SetStateAction<string>>;
  height: string;
  setHeight?: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory?: Dispatch<SetStateAction<string>>;
  passed: boolean | null;
}

const ProductDetails = ({
  weight,
  length,
  width,
  height,
  category,
  passed,
  setWeight,
  setCategory,
  setHeight,
  setLength,
  setWidth,
}: Props) => {
  const [barcodeImages, setBarcodeImages] = useState<string[]>(["", ""]);
  const [images, setImages] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isUploadingBarcode, setIsUploadingBarcode] = useState<boolean>(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && selectedImageIndex !== null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isUploadingBarcode) {
          setBarcodeImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[selectedImageIndex] = reader.result as string;
            return newImages;
          });
        } else {
          setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[selectedImageIndex] = reader.result as string;
            return newImages;
          });
        }
        setSelectedImageIndex(null);
        setIsUploadingBarcode(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = (index: number, isBarcode: boolean = false) => {
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSelectedImageIndex(index);
    setIsUploadingBarcode(isBarcode);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = (index: number, isBarcode: boolean = false) => {
    if (isBarcode) {
      setBarcodeImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = "";
        return newImages;
      });
    } else {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = "";
        return newImages;
      });
    }

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="pt-6 border-x border-[#D1D1D1] border-b shadow-sm bg-white">
      {/* Item Category */}
      <div className="flex items-center px-[136px] pl-[110px] justify-center gap-3 hover:bg-[#E7E9EB] p-1.5">
        <span className="font-bold text-sm">* Item Category</span>
        <QuestionMarkCircleIcon className="h-5 w-5 mr-2 cursor-pointer stroke-2" />

        <div className="flex flex-grow rounded-[3px] border-2 border-[#C0C3C4]">
          <input
            type="text"
            value={category}
            placeholder="Example: Adidas Blue Sneakers"
            className="h-8 flex-grow focus:outline-none px-2"
            onChange={(event) => {
              if (setCategory) {
                setCategory(event.target.value); // Ensure the value is converted to a number
              }
            }}
          />
        </div>
      </div>

      {/* Item Length */}
      <div className="flex items-center px-[136px] pl-[100px] justify-center gap-3 hover:bg-[#E7E9EB] p-1.5">
        <div className="flex gap-3">
          <span className="font-bold text-sm text-wrap">
            Item Dimensions & Weight
          </span>
          <QuestionMarkCircleIcon className="h-8 w-8 cursor-pointer stroke-2" />
        </div>

        <div className="flex pl-2 gap-3">
          <div className="flex rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              value={length}
              placeholder="length (cm)"
              className="h-8 w-full focus:outline-none px-2"
              onChange={(event) => {
                if (setLength) {
                  setLength(event.target.value); // Ensure the value is converted to a number
                }
              }}
            />
          </div>

          <div className="flex rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              value={width}
              placeholder="width (cm)"
              className="h-8 w-full focus:outline-none px-2"
              onChange={(event) => {
                if (setWidth) {
                  setWidth(event.target.value); // Ensure the value is converted to a number
                }
              }}
            />
          </div>
          <div className="flex rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              value={height}
              placeholder="height (cm)"
              className="h-8 w-full focus:outline-none px-2"
              onChange={(event) => {
                if (setHeight) {
                  setHeight(event.target.value); // Ensure the value is converted to a number
                }
              }}
            />
          </div>
          <div className="flex rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              value={weight}
              placeholder="weight (g)"
              className="h-8 w-full focus:outline-none px-2"
              onChange={(event) => {
                if (setWeight) {
                  setWeight(event.target.value); // Ensure the value is converted to a number
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex items-center pl-[155px] justify-center gap-[13px] p-1.5 pt-3">
        <span className="font-bold text-sm text-nowrap self-start">Images</span>

        <div className="space-x-1">
          <div className="flex items-center font-bold">
            <div className="flex items-center cursor-pointer">
              <PlusCircleIcon className="text-[#008296] mr-1 inline h-5 w-5 cursor-pointer stroke-2" />
              <span className="mr-2 text-[#008296]">Upload multiple files</span>
            </div>
            <span>or drag and drop 1 or more files below</span>
          </div>
          <span>
            Uploaded {images.filter((image) => image !== "").length} of 9
            images. Maximum 9 images are allowed. You can arrange the order{" "}
            <br /> after uploading
          </span>

          <div className="flex py-4 gap-3 flex-wrap">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            {images.map((image, index) =>
              image ? (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center p-2 rounded-sm border bg-white"
                >
                  <img
                    src={image}
                    alt={`Uploaded ${index}`}
                    className="w-[124px] h-auto min-h-[168px] object-contain rounded-sm"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 text-black rounded-lg bg-[#F6F8FA] bg-opacity-60 p-1 text-xs"
                  >
                    <XMarkIcon className="h-5 w-5 cursor-pointer stroke-2" />
                  </button>
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => handleUploadClick(index)}
                  className="flex flex-col items-center px-11 py-16 cursor-pointer rounded-sm border bg-[#CED9DA]"
                >
                  <CameraIcon className="h-8 w-8 cursor-pointer stroke-2" />
                  <span className="font-semibold select-none">Upload</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Barcode Images */}
      <div className="flex items-center px-[32px] justify-center gap-[13px] p-1.5 pt-3">
        <span className="font-bold text-sm text-nowrap self-start mt-1">
          QR Code Images
        </span>

        <div>
          <div className="font-bold text-lg mb-1">
            Upload the <span className="text-red-500">side and top view</span>{" "}
            of an item with the delegated{" "}
            <span className="text-red-500">QR Code visible</span>
          </div>
          <div className="flex items-center font-bold">
            <div className="flex items-center cursor-pointer">
              <PlusCircleIcon className="text-[#008296] mr-1 inline h-5 w-5 cursor-pointer stroke-2" />
              <span className="mr-2 text-[#008296]">Upload multiple files</span>
            </div>
            <span>or drag and drop 1 or more files below</span>
          </div>
          <span>
            Uploaded {barcodeImages.filter((image) => image !== "").length} of 2
            images. Maximum 2 images are allowed. Upload side and top views.
          </span>

          <div className="flex py-4 gap-3 flex-wrap pb-8">
            {barcodeImages.map((image, index) =>
              image ? (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center p-2 rounded-sm border bg-white"
                >
                  <img
                    src={image}
                    alt={`Uploaded Barcode ${index}`}
                    className="w-[124px] h-auto min-h-[168px] object-contain rounded-sm"
                  />
                  <button
                    onClick={() => handleRemoveImage(index, true)}
                    className="absolute top-1 right-1 text-black rounded-lg bg-[#F6F8FA] bg-opacity-60 p-1 text-xs"
                  >
                    <XMarkIcon className="h-5 w-5 cursor-pointer stroke-2" />
                  </button>
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => handleUploadClick(index, true)}
                  className="flex flex-col items-center px-11 py-16 cursor-pointer rounded-sm border bg-[#CED9DA]"
                >
                  <CameraIcon className="h-8 w-8 cursor-pointer stroke-2" />
                  <span className="font-semibold select-none">Upload</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {passed === false ? (
        <TabErrorAlert />
      ) : (
        passed === true && <TabSuccessAlert />
      )}
    </div>
  );
};

export default ProductDetails;
