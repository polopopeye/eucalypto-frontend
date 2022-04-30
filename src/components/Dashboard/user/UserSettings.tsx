/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { store } from "../../../app/store";
import MultipleSelect from "../../Utils/MultipleSelect";
import { filetoDataURL } from "../../Utils/toDataUrl";
import Link from "next/link";
import { UserInterface } from "../../../commons/userInterface";
import modifyUserInBackend from "../../../app/backend/modifyUserInBackend";
import { toast } from "react-toastify";
import newUpload from "../../../app/firebase/storage/newUpload";
import openFileInNewWindow from "../../Utils/openFileInNewWindow";
import retrieveCategories from "../../../app/backend/retrieveCategories";

const UserSettings = () => {
  let user: UserInterface = { ...store.getState().user };
  const [langs, setLangs] = useState(user.languages);
  const [techs, setTechs] = useState(user.categories);
  const [avatar, setAvatar] = useState(user.coverImg);
  const [curriculum, setCurriculum] = useState(user.curriculum);
  const [newCoverImgUpload, setNewCoverImgUpload] = useState(false);
  const [newCurriculumUpload, setNewCurriculumUpload] = useState(false);

  const [techMultipleSelect, setTechMultipleSelect] = useState(
    store.getState().category.tech
  );
  useEffect(() => {
    retrieveCategories({
      propToFind: "type",
      value: "tech",
      saveIn: "tech",
    });
  }, []);
  store.subscribe(() => {
    setTechMultipleSelect(store.getState().category.tech);
  });

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Profile:
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-2">
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
                  <label htmlFor="avatar">Choose a profile picture:</label>

                  <input
                    className="hidden"
                    type="file"
                    accept=".img, .png, .jpg, .jpeg"
                    id="avatar"
                    name="avatar"
                    onChange={async (e) => {
                      filetoDataURL(e.target, (url: any) => {
                        setAvatar(url);
                        setNewCoverImgUpload(true);
                      });
                    }}
                  />

                  <button
                    onClick={() => {
                      if (document && document.getElementById("avatar")) {
                        document.getElementById("avatar")!.click();
                      }
                    }}
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Display Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    defaultValue={user.displayName}
                    onChange={(e) => {
                      user.displayName = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Complete Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    defaultValue={user.completeName}
                    onChange={(e) => {
                      user.completeName = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Languages
                </label>
                <div className="mt-1 w-full flex rounded-md shadow-sm">
                  <MultipleSelect
                    setVariant={setLangs}
                    variant={langs}
                    children={[
                      { value: "english", label: "english" },
                      { value: "español", label: "español" },
                      { value: "catalan", label: "catalan" },
                    ]}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Techs/Aptitudes
                </label>
                <div className="mt-1 w-full flex rounded-md shadow-sm">
                  <MultipleSelect
                    setVariant={setTechs}
                    variant={techs}
                    children={techMultipleSelect as any}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.email}
                    onChange={(e) => {
                      user.email = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.phone}
                    onChange={(e) => {
                      user.phone = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="github"
                  className="block text-sm font-medium text-gray-700"
                >
                  Github
                </label>
                <div className="mt-1">
                  <input
                    id="github"
                    name="github"
                    type="text"
                    autoComplete="github"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.github}
                    onChange={(e) => {
                      user.github = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="web"
                  className="block text-sm font-medium text-gray-700"
                >
                  web
                </label>
                <div className="mt-1">
                  <input
                    id="web"
                    name="web"
                    type="text"
                    autoComplete="web"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.web}
                    onChange={(e) => {
                      user.web = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="linkedIn"
                  className="block text-sm font-medium text-gray-700"
                >
                  linkedIn
                </label>
                <div className="mt-1">
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    type="text"
                    autoComplete="linkedIn"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.linkedIn}
                    onChange={(e) => {
                      user.linkedIn = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <div className="mt-1">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="location"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.location}
                    onChange={(e) => {
                      user.location = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={user.role}
                    onChange={(e) => {
                      user.role = e.target.value;
                    }}
                  >
                    <option value="talent">Talent</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload / Modify your Curriculum Vitae
                </label>
                <div className="mt-1">
                  <input
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
                    onClick={(e) => {
                      if (document && document.getElementById("curriculum")) {
                        document.getElementById("curriculum")!.click();
                      }
                    }}
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
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link href="/dashboard/user">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </Link>
            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                toast.warn("Loading...");
                if (user.createdAt) delete user.createdAt;
                if (user.updatedAt) delete user.updatedAt;
                user.languages = langs;
                user.categories = techs;

                const verifyUploadCoverImg = async () => {
                  if (newCoverImgUpload) {
                    newUpload(
                      avatar as string,
                      "profile.jpg",
                      user.id as string,
                      (url: string) => {
                        user.coverImg = url;
                        modifyUserInBackend(user);
                      }
                    );
                  } else {
                    modifyUserInBackend(user);
                  }
                };

                if (newCurriculumUpload) {
                  newUpload(
                    curriculum as string,
                    "curriculum.pdf",
                    user.id as string,
                    (url: string) => {
                      user.curriculum = url;
                      verifyUploadCoverImg();
                    }
                  );
                } else {
                  verifyUploadCoverImg();
                }
              }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSettings;
