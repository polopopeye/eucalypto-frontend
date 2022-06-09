import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import openFileInNewWindow from 'src/components/Utils/openFileInNewWindow';
import { filetoDataURL } from 'src/components/Utils/toDataUrl';

const CvDropZone = (props: {
  setCurriculum: any;
  curriculum: string | undefined;
  setNewCurriculumUpload: any;
}) => {
  const { setCurriculum, setNewCurriculumUpload, curriculum } = props;
  // PROFILE DROPZONE FILE HANDLING
  const onDrop = useCallback((acceptedFiles) => {
    console.log(
      '🚀 ~ file: CvDropZone.tsx ~ line 14 ~ onDrop ~ acceptedFiles',
      acceptedFiles
    );
    filetoDataURL(acceptedFiles[0], (url: any) => {
      setCurriculum(url);
      setNewCurriculumUpload(true);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'file/pdf': ['.pdf'],
    },
  });

  return (
    <div className="sm:col-span-2" {...getRootProps()}>
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700"
      >
        Upload / Modify your Curriculum Vitae
      </label>
      <div className="mt-1">
        <input
          {...getInputProps()}
          className="hidden"
          type="file"
          accept=".pdf"
          id="curriculum"
          name="curriculum"
          onChange={async (e) => {
            filetoDataURL(e.target, (url: any) => {
              setCurriculum(url);
              setNewCurriculumUpload(true);
            });
          }}
        />

        <button
          type="button"
          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload / Modify CV
        </button>

        {curriculum && (
          <a
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              openFileInNewWindow(curriculum);
            }}
          >
            View your current Curriculum
          </a>
        )}
      </div>
    </div>
  );
};

export default CvDropZone;
