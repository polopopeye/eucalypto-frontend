/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { UserInterface } from 'src/commons/userInterface';
import { store } from 'src/app/store';

import newUpload from 'src/app/firebase/storage/newUpload';
import { useRouter } from 'next/router';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline';

import { CategoryInterface } from 'src/commons/categoryInterface';
import { defaultLangs } from './deafultLangs';

import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import { Switch } from '@headlessui/react';
import registerUserInBackendManual from 'src/app/backend/users/registerUserInBackendManual';
import sendMailWelcomeMessage from 'src/app/backend/mail/sendMailWelcomeMessage';
import { classNames } from 'src/components/Utils/classnames';
import ProfileDropZone from './modules/ProfileDropZone';
import CvDropZone from './modules/CvDropZone';

const CreateNewUser = () => {
  const router = useRouter();

  const [user, setUser] = useState({} as UserInterface);

  const [avatar, setAvatar] = useState('/file/img/Icono_Negativo.png');

  const arrayAllTechs = [] as Array<CategoryInterface>;
  Object.keys(store.getState().category).forEach((parent: string) => {
    arrayAllTechs.push(...store.getState().category[parent]);
  });

  const [category, setCategory] = useState(arrayAllTechs);

  const [techsSelected, setTechsSelected] = useState([] as Array<string>);

  // this filter the english default selected lang
  const defaultLangsList = defaultLangs?.filter((lang) => 'english' != lang);

  const [langs, setlangs] = useState(defaultLangsList as Array<string>);
  const [langsSelected, setLangsSelected] = useState([
    'english',
  ] as Array<string>);

  const [curriculum, setCurriculum] = useState(undefined as any);
  const [newCoverImgUpload, setNewCoverImgUpload] = useState(false);
  const [newCurriculumUpload, setNewCurriculumUpload] = useState(false);

  const [isWelcomeMessage, setIsWelcomeMessage] = useState(false);

  store.subscribe(() => {
    const arrayAllTechs = [] as Array<CategoryInterface>;
    Object.keys(store.getState().category).forEach((parent: string) => {
      arrayAllTechs.push(...store.getState().category[parent]);
    });

    setCategory(arrayAllTechs);
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
              <ProfileDropZone
                avatar={avatar}
                setAvatar={setAvatar}
                setNewCoverImgUpload={setNewCoverImgUpload}
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm flex font-medium text-gray-700"
                >
                  Display Name{' '}
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    onChange={(e) => {
                      user.displayName = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm flex font-medium text-gray-700"
                >
                  Complete Name
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    onChange={(e) => {
                      user.completeName = e.target.value;
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="lang"
                  className="block text-sm font-medium text-gray-700"
                >
                  Languages
                </label>
                <select
                  id="lang"
                  name="lang"
                  autoComplete="lang-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue={''}
                  onChange={(e) => {
                    const language = e.target.value;

                    if (language) {
                      setLangsSelected((prev: any) => {
                        if (prev) return [...prev, language];
                        return [language];
                      });

                      const newLangsList = langs?.filter(
                        (lang) => lang !== language
                      );
                      setlangs(newLangsList);
                      e.target.value = '';
                    }
                  }}
                >
                  <option value=""></option>
                  {langs?.map((lang, index) => {
                    return (
                      <option key={index} value={lang}>
                        {lang}
                      </option>
                    );
                  })}
                </select>

                <div className="grid items-center">
                  {langsSelected.map((lang, index) => {
                    return (
                      <div key={index} className="flex w-full ">
                        <div className="p-2 m-1 w-full">{lang}</div>
                        <div
                          onClick={() => {
                            setLangsSelected((prev: any) => {
                              if (prev)
                                return prev.filter(
                                  (prevLang: any) => prevLang !== lang
                                );

                              return [];
                            });
                            setlangs((prev: any) => {
                              if (prev) return [...prev, lang];
                              return [lang];
                            });
                          }}
                          className="p-2 bg-red-400 hover:bg-red-600 rounded-md m-1"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Techs/Aptitudes
                </label>
                <div className="mt-1 w-full rounded-md shadow-sm">
                  <select
                    id="tech"
                    name="tech"
                    autoComplete="tech-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      const techId = e.target.value;

                      if (techId) {
                        setTechsSelected((prev: any) => {
                          if (prev) return [...prev, techId];
                          return [techId];
                        });

                        const newCat = category?.filter(
                          (cat) => cat.id !== techId
                        );
                        setCategory(newCat);
                        e.target.value = '';
                      }
                    }}
                  >
                    <option value=""></option>
                    {category?.map((tech, index) => {
                      return (
                        <option key={tech.id} value={tech.id}>
                          {tech.name}
                        </option>
                      );
                    })}
                  </select>

                  <div className="grid items-center">
                    {techsSelected.map((techId, index) => {
                      const techs = arrayAllTechs;
                      const techData = techs?.find(
                        (tech) => tech.id === techId
                      );

                      return (
                        <div key={techId} className="flex w-full ">
                          <div className="p-2 m-1 w-full">{techData?.name}</div>
                          <div
                            onClick={() => {
                              setTechsSelected((prev: any) => {
                                if (prev)
                                  return prev.filter(
                                    (tech: any) => tech !== techId
                                  );

                                return [];
                              });
                              setCategory((prev: any) => {
                                if (prev) return [...prev, techData];
                                return [techData];
                              });
                            }}
                            className="p-2 bg-red-400 hover:bg-red-600 rounded-md m-1"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block flex text-sm font-medium text-gray-700"
                >
                  Email address
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
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
                  className="block flex text-sm font-medium text-gray-700"
                >
                  Location
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
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
                <Switch.Group
                  as="div"
                  className="flex items-center justify-between"
                >
                  <span className="flex-grow flex flex-col">
                    <Switch.Label
                      as="span"
                      className="text-sm font-medium text-gray-900"
                      passive
                    >
                      Send Welcome Email?
                    </Switch.Label>
                    <Switch.Description
                      as="span"
                      className="text-sm text-gray-500"
                    >
                      if true, when the user is created we are going to send a
                      welcome message.
                    </Switch.Description>
                  </span>
                  <Switch
                    checked={isWelcomeMessage}
                    onChange={(e) => {
                      setIsWelcomeMessage(e.valueOf());
                    }}
                    className={classNames(
                      isWelcomeMessage ? 'bg-indigo-600' : 'bg-gray-800',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        isWelcomeMessage ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </div>

              {/* DISABLED DUE BUSINESS REQUIREMENTS store.getState().user.role === 'admin' || */}
              {store.getState().user.id === 'JaL6c1WgKtHvEYMoHeCV' && (
                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block flex text-sm font-medium text-gray-700"
                  >
                    Role <CheckCircleIcon className="text-red-900 w-4 h-4" />
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue=""
                      onChange={(e) => {
                        user.role = e.target.value;
                      }}
                    >
                      <option value=""></option>
                      <option value="talent">Talent</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              )}
              <CvDropZone
                curriculum={curriculum}
                setCurriculum={setCurriculum}
                setNewCurriculumUpload={setNewCurriculumUpload}
              />
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
                toast.warn('Loading...');
                if (!user.role) user.role = 'talent';
                user.coverImg = avatar;
                user.published = true;
                user.languages = langsSelected;
                user.categories = techsSelected;

                const verifyUploadCoverImg = async () => {
                  if (newCoverImgUpload) {
                    newUpload(
                      avatar as string,
                      'profile.jpg',
                      user.id as string,
                      (url: string) => {
                        user.coverImg = url;

                        registerUserInBackendManual(user, () => {
                          if (isWelcomeMessage) {
                            sendMailWelcomeMessage(user);
                          }
                          retrieveAllUsersInfo(() => {
                            router.push('/dashboard/user');
                          });
                        });
                      }
                    );
                  } else {
                    registerUserInBackendManual(user, () => {
                      if (isWelcomeMessage) {
                        sendMailWelcomeMessage(user);
                      }
                      retrieveAllUsersInfo(() => {
                        router.push('/dashboard/user');
                      });
                    });
                  }
                };

                if (newCurriculumUpload) {
                  newUpload(
                    curriculum as string,
                    'curriculum.pdf',
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
              Register New User Name
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewUser;
