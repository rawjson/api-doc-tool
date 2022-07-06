import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure, Switch } from '@headlessui/react';
import { CodeIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import entities from './entities';
import useDarkMode from './useDarkMode';
import { classNames } from 'lib/classJoiner';
import { syntaxHighlight } from 'lib/syntaxHighlighter';

import { useScrollPosition } from './useScrollPosition';

const findEnpoints = (array) => {
  const endpoints = [];
  array.forEach((arr) => endpoints.push({ type: arr.endpoint.type, url: arr.endpoint.url }));
  return endpoints;
};

const findAttribute = (attributes, param) => {
  const attribute = attributes?.find((attr) => param.attribute === attr.id);
  return attribute;
};

export default function API_Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [darkMode, setDarkMode] = useDarkMode();
  const scrollPosition = useScrollPosition();

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 flex z-40 md:hidden' onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-200 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-gray-700' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4'>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-gray-300-mark-white-text.svg'
                  alt='Workflow'
                />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {entities.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-slate-100 text-gray-700' : 'text-gray-100 hover:bg-gray-200',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex flex-col flex-grow pt-5 bg-slate-100 dark:bg-slate-700 overflow-y-auto'>
          <div className='flex items-center flex-shrink-0 px-4 space-x-4'>
            <CodeIcon className='w-10 h-10 text-gray-700 dark:text-slate-300' />
            <span className='text-gray-700 dark:text-slate-300 font-semibold text-xl'>API Reference</span>
          </div>
          <div className='mt-10 flex-1 flex flex-col'>
            <nav className='flex-1 space-y-2'>
              {/* all your entity names are mapped here for the desktop sidebar */}
              {entities.map((entity, i) => (
                <div key={i}>
                  <Disclosure defaultOpen={entity.defaultOpen}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          as='button'
                          className='flex items-center justify-between text-base font-medium transition ease-in-out duration-200 w-full rounded-md group pr-10 pl-6 text-gray-700 dark:text-slate-300'
                        >
                          <a href={`#${entity.name.toLowerCase().replace(/ /g, '-')}`}>
                            <span>{entity.name}</span>
                          </a>

                          {entity.services?.length ? (
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'rotate-0 text-gray-700 dark:text-slate-300' : '-rotate-90',
                                'w-5 h-5 transform',
                              )}
                            />
                          ) : null}
                        </Disclosure.Button>
                        {entity.services?.length ? (
                          <Disclosure.Panel className='text-sm font-medium py-2.5 mr-10'>
                            {entity.services?.map((service, i) => (
                              <ul key={i}>
                                <a href={`#${service.name.toLowerCase().replace(/ /g, '-')}`}>
                                  <li
                                    onClick={() => setCurrentPath(`#${service.name.toLowerCase().replace(/ /g, '-')}`)}
                                    className={classNames(
                                      currentPath == `#${service.name.toLowerCase().replace(/ /g, '-')}`
                                        ? 'text-white bg-gray-800 dark:bg-slate-500 pl-7'
                                        : 'text-gray-500 pl-8 hover:text-gray-700 dark:hover:text-slate-300 dark:text-slate-300',
                                      'cursor-pointer py-1 rounded-r-md transition ease-in-out duration-100',
                                    )}
                                  >
                                    {service.name}
                                  </li>
                                </a>
                              </ul>
                            ))}
                          </Disclosure.Panel>
                        ) : null}
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className='md:pl-72 flex flex-col flex-1 bg-white dark:bg-slate-900'>
        <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-slate-800  border-b border-slate-100 dark:border-slate-800'>
          <button
            type='button'
            className='px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* dark mode switch */}

          <div className='hidden md:flex items-center space-x-10 justify-end w-full px-4'>
            <span>
              <Switch
                checked={darkMode}
                onChange={setDarkMode}
                className={classNames(
                  darkMode ? 'bg-slate-900' : 'bg-gray-100',
                  'relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                )}
              >
                <span className='sr-only'>Use dark mode</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    darkMode ? 'translate-x-4' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-50 shadow-md ring-0 transition duration-100 ease-in-out',
                  )}
                />
              </Switch>
            </span>
          </div>
        </div>

        {/* All entities are mapped starting from here */}

        <main className='bg-white w-full divide-y divide-slate-200 dark:divide-slate-700 dark:bg-slate-900'>
          {entities.map((entity, i) => (
            <div className='my-20 flex' key={i} id={`${entity.name.toLowerCase().replace(/ /g, '-')}`}>
              <div className='w-full pt-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto'>
                <div className='flex space-x-20 relative'>
                  <div className='w-full'>
                    <h2 className='text-3xl font-semibold text-gray-700 dark:text-slate-300'>{entity.name}</h2>
                    {entity.description.map((p, i) => (
                      <p key={i} className='mt-6 text-gray-500 dark:text-slate-300 max-w-xl'>
                        {p}
                      </p>
                    ))}
                    {entity.attributes ? (
                      <table className='mt-8 w-full max-w-xl'>
                        <thead>
                          <tr className='border-b border-slate-200 dark:border-slate-800'>
                            <th className='text-left py-2 text-gray-600 dark:text-slate-300 font-medium'>Attributes</th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-slate-200 dark:divide-slate-800'>
                          {entity.attributes?.map((attr, i) => (
                            <tr key={i} className='flex flex-col'>
                              <td className='pt-4 font-medium flex items-center space-x-2'>
                                <code className='text-gray-700 dark:text-slate-300 text-sm'>{attr.name}</code>
                                <p className='text-gray-500 dark:text-slate-400 border border-gray-600 dark:border-slate-700 px-1 h-5 w-auto rounded text-xs'>
                                  {attr.data_type}
                                </p>
                              </td>
                              <td
                                className='text-sm pb-4 pt-2 font-normal text-gray-500 dark:text-slate-300'
                                dangerouslySetInnerHTML={{ __html: attr.description }}
                              />
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : null}
                  </div>
                  {entity.info ? (
                    <div className='w-full mt-14 space-y-4'>
                      <h2 className='text-xl font-semibold text-gray-700 dark:text-gray-400'>
                        {entity.info.heading ?? null}
                      </h2>
                      <p className='text-sm font-semibold text-gray-500 dark:text-gray-500'>
                        {entity.info.description ?? null}
                      </p>
                      {entity.info.code_box.map((box, i) => (
                        <div
                          className='bg-slate-100 dark:bg-slate-800 rounded-lg h-auto max-h-96 flex flex-col w-full sticky top-20'
                          key={i}
                        >
                          <div className='text-sm flex space-x-2 bg-gray-200 dark:bg-slate-700 px-4 py-2 rounded-t-lg'>
                            <h4 className='text-gray-500 dark:text-slate-300 uppercase font-medium'>{box.title}</h4>
                          </div>
                          <div className='text-sm overflow-y-auto px-5 py-2 text-gray-500 dark:text-slate-300'>
                            <table>
                              <tbody>
                                {box.rows.map((row, i) => (
                                  <tr key={i}>
                                    <td className='py-1'>
                                      <code
                                        dangerouslySetInnerHTML={{
                                          __html: row,
                                        }}
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {entity.services ? (
                    <div className='bg-slate-100 dark:bg-slate-800 rounded-lg h-44 flex flex-col mt-14 w-full sticky top-20'>
                      <div className='text-sm flex space-x-2 bg-gray-200 dark:bg-slate-700 px-4 py-2 rounded-t-lg'>
                        <h4 className='text-gray-500 dark:text-slate-300  uppercase font-medium'>Endpoints</h4>
                      </div>
                      <div className='text-sm overflow-y-auto p-5'>
                        <table>
                          <tbody>
                            {findEnpoints(entity.services).map((ept, i) => (
                              <tr key={i}>
                                <td className='uppercase pr-4 py-px text-right'>
                                  <span
                                    className={classNames(
                                      ept.type == 'post'
                                        ? 'text-green-500'
                                        : ept.type == 'get'
                                        ? 'text-gray-700 dark:text-slate-300'
                                        : ept.type == 'patch'
                                        ? 'text-yellow-500'
                                        : ept.type == 'delete'
                                        ? 'text-red-400'
                                        : '',
                                      'text-xs',
                                    )}
                                  >
                                    {ept.type}
                                  </span>
                                </td>
                                <td className='text-gray-500'>
                                  <code>{ept.url}</code>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : null}
                </div>
                {entity.services ? (
                  <div className='mt-2 divide-y divide-slate-200 dark:divide-slate-700'>
                    {entity.services.map((service) => (
                      <div
                        className='h-full py-32 flex space-x-20 relative'
                        key={service.id}
                        id={`${service.name.toLowerCase().replace(/ /g, '-')}`}
                      >
                        {/* left pane */}
                        <div className='w-full max-w-xl'>
                          <h3 className='text-2xl font-medium text-gray-700 dark:text-slate-300'>{service.name}</h3>
                          <p className='mt-6 text-gray-500 dark:text-slate-300'>{service.description}</p>

                          <table className='mt-8 w-full'>
                            <thead>
                              <tr className='border-b border-slate-200 dark:border-slate-800'>
                                <th className='text-left py-2 text-gray-600 dark:text-slate-300 font-medium'>
                                  Parameters
                                </th>
                              </tr>
                            </thead>
                            <tbody className='divide-y divide-slate-200 dark:divide-slate-800'>
                              {service.endpoint.parameters.map((param, i) => (
                                <tr key={i} className='flex flex-col'>
                                  <td className='text-xs pt-4 font-medium flex items-center space-x-2'>
                                    <code className='text-gray-700 dark:text-slate-300'>
                                      {param.custom ? param.custom.name : findAttribute(entity.attributes, param)?.name}
                                    </code>
                                    <p className='text-gray-500 dark:text-slate-400 border border-gray-600 dark:border-slate-700 px-1 rounded h-5 w-auto'>
                                      {param.custom
                                        ? param.custom.data_type
                                        : findAttribute(entity.attributes, param)?.data_type}
                                    </p>
                                    <code
                                      className={classNames(
                                        param.required ? 'text-red-400' : 'text-gray-500 dark:text-slate-300',
                                        'ml-2',
                                      )}
                                    >
                                      {param.required ? 'required' : 'optional'}
                                    </code>
                                  </td>
                                  <td
                                    className='text-sm pb-4 pt-2 font-normal text-gray-500 dark:text-slate-300'
                                    dangerouslySetInnerHTML={{
                                      __html: param.custom
                                        ? param.custom.description
                                        : findAttribute(entity.attributes, param)?.description,
                                    }}
                                  />
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className='bg-slate-100 dark:bg-slate-800 rounded-lg w-96 lg:w-full flex flex-col sticky top-20 h-full max-h-164'>
                          <div className='text-sm flex space-x-2 bg-gray-200 dark:bg-slate-700 px-4 py-2 rounded-t-lg'>
                            <h4
                              className={classNames(
                                service.endpoint.type == 'get'
                                  ? 'text-gray-700'
                                  : service.endpoint.type == 'post'
                                  ? 'text-green-500'
                                  : service.endpoint.type == 'patch'
                                  ? 'text-yellow-500'
                                  : service.endpoint.type == 'delete'
                                  ? 'text-red-400'
                                  : 'text-gray-500',
                                'uppercase font-medium',
                              )}
                            >
                              {service.endpoint.type}
                            </h4>
                            <span className='text-gray-500'>
                              <code>{service.endpoint.url}</code>
                            </span>
                          </div>
                          <div className='text-sm flex justify-between space-x-2 bg-slate-300 dark:bg-slate-600 px-4 py-2 font-medium text-gray-500 dark:text-slate-300'>
                            <span className='uppercase'>Response</span> <span>{service.endpoint.response?.type}</span>
                          </div>
                          <div className='text-sm overflow-y-auto overflow-x-hidden'>
                            <pre
                              className='px-4 py-2 text-xs text-gray-50 dark:text-slate-300'
                              dangerouslySetInnerHTML={{
                                __html: syntaxHighlight(
                                  JSON.stringify(service?.endpoint?.response?.data, undefined, 2),
                                ),
                              }}
                            ></pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
