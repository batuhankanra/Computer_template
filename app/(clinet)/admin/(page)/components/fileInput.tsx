"use client"

import { ChangeEvent, FC, useState } from "react"

const FileInput:FC<FileInputProps> = ({
  label = "Dosya Seç",
  onChange,
  multiple = false,
  accept = "image/*",
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setFileNames(fileArray.map((f) => f.name));
    onChange(fileArray);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        id="file-input"
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />

      <label
        htmlFor="file-input"
        className="cursor-pointer w-fit px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        {multiple ? "Dosyaları Seç" : "Dosya Seç"}
      </label>

      {fileNames.length > 0 && (
        <ul className="text-sm text-gray-600 list-disc list-inside">
          {fileNames.map((name, idx) => (
            <li key={idx} className="truncate max-w-xs">{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default FileInput
