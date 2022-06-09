/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { filetoDataURL } from 'src/components/Utils/toDataUrl';

const ComapanyImageDropZone = (props: {
  setLogo: any;
  logo: string | undefined;
  setNewUploadCoverImg: any;
}) => {
  const { setLogo, logo, setNewUploadCoverImg } = props;

  // PROFILE DROPZONE FILE HANDLING
  const onDrop = useCallback((acceptedFiles) => {
    filetoDataURL(acceptedFiles[0], (url: any) => {
      setLogo(url);
      setNewUploadCoverImg(true);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.img', '.jpg', '.jpeg'],
    },
  });

  return (
    <div className="col-span-2 md:col-span-3" {...getRootProps()}>
      <label
        htmlFor="photo"
        className="block text-sm font-medium text-gray-700"
      >
        Logo / Cover image of the company
      </label>
      <div className="mt-1 grid w-full items-center">
        {logo && (
          <span className="h-80 w-80 rounded-lg overflow-hidden bg-gray-100 m-auto">
            <img src={logo} className="h-auto w-80" alt="logo" />
          </span>
        )}
        <label htmlFor="coverImg">Choose a logo:</label>

        <input
          {...getInputProps()}
          className="hidden"
          type="file"
          accept=".img, .png, .jpg, .jpeg"
          id="coverImg"
          name="coverImg"
          onChange={async (e) => {
            filetoDataURL(e.target, (url: any) => {
              setLogo(url);
              setNewUploadCoverImg(true);
            });
          }}
        />

        <button
          type="button"
          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ComapanyImageDropZone;
