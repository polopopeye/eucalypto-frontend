import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { filetoDataURL } from 'src/components/Utils/toDataUrl';

const ProfileDropZone = (props: {
  setAvatar: any;
  avatar: string | undefined;
  setNewCoverImgUpload: any;
}) => {
  const { setAvatar, setNewCoverImgUpload, avatar } = props;
  // PROFILE DROPZONE FILE HANDLING
  const onDrop = useCallback((acceptedFiles) => {
    filetoDataURL(acceptedFiles[0], (url: any) => {
      setAvatar(url);
      setNewCoverImgUpload(true);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.img', '.jpg', '.jpeg'],
    },
  });

  return (
    <div className="sm:col-span-2" {...getRootProps()}>
      <label
        htmlFor="photo"
        className="block text-sm font-medium text-gray-700"
      >
        Photo
      </label>
      <div className="mt-1 grid w-full items-center">
        <span className="h-56 w-56 rounded-full overflow-hidden bg-gray-100 m-auto">
          <img src={avatar} className="h-auto w-56" alt="avatar" />
        </span>
        <label htmlFor="avatar">Choose a profile picture 2:</label>

        <input
          {...getInputProps()}
          className="hidden"
          type="file"
          accept=".img, .png, .jpg, .jpeg"
          id="avatar"
          name="avatar"
          onChange={async (e) => {
            filetoDataURL(e.target, (url: any) => {
              console.log(
                '🚀 ~ file: UserSettings.tsx ~ line 125 ~ filetoDataURL ~ e.target',
                e.target
              );
              setAvatar(url);
              setNewCoverImgUpload(true);
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

export default ProfileDropZone;
