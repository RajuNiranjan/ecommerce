"use client";
import React, { ChangeEvent, useState } from "react";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import UploadCard from "./upload_card";

const ImageUpload = () => {
  const [selectImage, setSelectImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectImage(file);
      localStorage.setItem("selectedImageName", file.name);
      localStorage.setItem("selectedImageSize", file.size.toString());
    }
  };

  return (
    <div className="w-[500px] shadow-lg rounded bg-white p-5">
      <h1 className="font-semibold text-[18px]">Add Image</h1>
      <div className="my-10">
        <div className="border border-dashed border-gray-400 h-[250px] flex justify-center items-center flex-col rounded-md">
          <InsertPhotoOutlinedIcon className="text-[55px] text-gray-500" />
          <div className="flex items-center justify-center gap-2">
            <FileUploadOutlinedIcon className="text-4xl text-[#196FE1]" />
            <span className="text-[18px]">Select your image here </span>{" "}
            {/* <input type="file" placeholder="Browse" /> */}
            <label
              htmlFor="fileInput"
              className="relative text-[#196FE1] cursor-pointer">
              <span className="font-semibold text-[18px]"> Browse </span>{" "}
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-2">
          {selectImage ? (
            <UploadCard image={selectImage} />
          ) : (
            <p className="text-center text-red-300">
              no items here, you upload by clicking{" "}
              <span className="font-semibold text-blue-500">Browse</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
