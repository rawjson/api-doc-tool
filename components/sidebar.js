import { Fragment, useState, useRef } from 'react';
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react';
import { BellIcon, CodeIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import entities from './entities';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const findEnpoints = (array) => {
  const endpoints = [];
  array.forEach((arr) => endpoints.push({ type: arr.endpoint.type, url: arr.endpoint.url }));
  return endpoints;
};

const findAttribute = (attributes, param) => {
  const attribute = attributes.find((attr) => param.attribute === attr.id);
  return attribute;
};

const syntaxHighlight = (json) => {
  if (!json) return ''; //no JSON from response

  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    },
  );
};

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const entityRef = useRef([]);
  return (
    <>
      <div>
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
              <Dialog.Overlay className='fixed inset-0 bg-slate-600 bg-opacity-75' />
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
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-slate-800'>
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
                      <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
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
                    {entities.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-slate-900 text-white' : 'text-gray-100 hover:bg-slate-600',
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
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 bg-slate-900 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4 space-x-4'>
              <CodeIcon className='w-10 h-10 text-sky-500' />
              <span className='text-sky-500 font-semibold text-xl'>API docs</span>
            </div>
            <div className='mt-10 flex-1 flex flex-col'>
              <nav className='flex-1 space-y-1'>
                {entities.map((entity, idx) => (
                  <div key={idx}>
                    <Disclosure defaultOpen={entity.defaultOpen}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as='button'
                            className={classNames(
                              open ? '' : 'hover:text-sky-300',
                              'flex items-center justify-between text-base font-medium transition ease-in-out duration-200 w-full rounded-md group pr-10 pl-6 text-sky-500',
                            )}
                          >
                            <span>{entity.name}</span>

                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-0 text-sky-400' : '-rotate-90', 'w-5 h-5 transform')}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className='text-sm font-medium py-2.5 mr-10'>
                            {entity.services.map((service, fIdx) => (
                              <ul key={fIdx}>
                                <a>
                                  <li
                                    onClick={() => entityRef.current[fIdx].focus()}
                                    className={classNames(
                                      entityRef.current[fIdx]
                                        ? 'text-sky-200 bg-sky-900 pl-7'
                                        : 'text-gray-500 pl-8 hover:text-sky-500 ',
                                      'cursor-pointer py-1 rounded-r-md transition ease-in-out duration-100',
                                    )}
                                  >
                                    {service.name}
                                  </li>
                                </a>
                              </ul>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='md:pl-64 flex flex-col flex-1 bg-slate-800 h-screen overflow-y-auto'>
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 shadow'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex-1 px-4 flex justify-between'>
              <div className='flex-1 flex bg-slate-800'>
                <form className='w-full flex md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <SearchIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm bg-slate-800'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>
              <div className='pl-4 flex items-center md:pl-6 bg-slate-800'>
                <button
                  type='button'
                  className='bg-slate-400 p-1 rounded-full text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-slate-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className='bg-slate-800 text-white w-full'>
            {entities.map((entity) => (
              <div className='my-20 px-4 sm:px-6 md:px-8 flex max-w-7xl mx-auto' key={entity.id}>
                <div className='w-full'>
                  <div className='flex space-x-20 relative'>
                    <div className='w-full'>
                      <h2 className='text-3xl font-semibold text-sky-300'>{entity.name}</h2>
                      <p className='mt-6 text-gray-300 max-w-xl'>{entity.description}</p>
                      <table className='mt-8 w-full max-w-xl'>
                        <thead>
                          <tr className='border-b border-slate-700'>
                            <th className='text-left py-2 text-gray-300 font-medium'>Attributes</th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-slate-700'>
                          {entity.attributes.map((attr, aIdx) => (
                            <tr key={aIdx} className='flex flex-col'>
                              <td className='text-xs pt-4 font-medium'>
                                <code className='text-gray-100'>{attr.name}</code>
                                <span className='ml-1.5 text-gray-400 border border-gray-600 px-2 rounded'>
                                  {attr.data_type}
                                </span>
                              </td>
                              <td
                                className='text-sm pb-4 pt-2 font-normal text-gray-400'
                                dangerouslySetInnerHTML={{ __html: attr.description }}
                              />
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className='bg-slate-700 rounded-lg h-44 flex flex-col mt-14 w-full sticky top-20'>
                      <div className='text-sm flex space-x-2 bg-slate-600 px-4 py-2 rounded-t-lg'>
                        <h4 className='text-gray-300 uppercase font-medium'>Endpoints</h4>
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
                                        ? 'text-sky-500'
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
                                <td className='text-gray-400'>
                                  <code>{ept.url}</code>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 divide-y divide-slate-700'>
                    {entity.services.map((service) => (
                      <div
                        className='bg-slate-800 h-full py-32 flex space-x-20 relative'
                        key={service.id}
                        ref={(el) => entityRef.current.push(el)}
                      >
                        {/* left pane */}
                        <div className='w-full max-w-xl'>
                          <h3 className='text-2xl font-medium text-gray-300'>{service.name}</h3>
                          <p className='mt-6 text-gray-400'>{service.description}</p>

                          <table className='mt-8 w-full'>
                            <thead>
                              <tr className='border-b border-slate-700'>
                                <th className='text-left py-2 text-gray-300 font-medium'>Parameters</th>
                              </tr>
                            </thead>
                            <tbody className='divide-y divide-slate-700'>
                              {service.endpoint.parameters.map((param, pIdx) => (
                                <tr key={pIdx} className='flex flex-col'>
                                  <td className='text-xs pt-4 font-medium'>
                                    <code className='text-gray-100'>
                                      {findAttribute(entity.attributes, param)?.name}
                                    </code>
                                    <span className='ml-1.5 text-gray-400 border border-gray-600 px-2 rounded'>
                                      {findAttribute(entity.attributes, param)?.data_type}
                                    </span>
                                    <code
                                      className={classNames(param.required ? 'text-red-400' : 'text-gray-300', 'ml-2')}
                                    >
                                      {param.required ? 'required' : 'optional'}
                                    </code>
                                  </td>
                                  <td
                                    className='text-sm pb-4 pt-2 font-normal text-gray-400'
                                    dangerouslySetInnerHTML={{
                                      __html: findAttribute(entity.attributes, param)?.description,
                                    }}
                                  />
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className='bg-slate-700 rounded-lg w-96 lg:w-full flex flex-col sticky top-20 h-full max-h-164'>
                          <div className='text-sm flex space-x-2 bg-slate-600 px-4 py-2 rounded-t-lg'>
                            <h4
                              className={classNames(
                                service.endpoint.type == 'get'
                                  ? 'text-sky-500'
                                  : service.endpoint.type == 'post'
                                  ? 'text-green-500'
                                  : service.endpoint.type == 'patch'
                                  ? 'text-yellow-500'
                                  : service.endpoint.type == 'delete'
                                  ? 'text-red-400'
                                  : 'text-gray-300',
                                'uppercase font-medium',
                              )}
                            >
                              {service.endpoint.type}
                            </h4>
                            <span className='text-gray-300'>
                              <code>{service.endpoint.url}</code>
                            </span>
                          </div>
                          <div className='text-sm flex space-x-2 bg-slate-500 px-4 py-2 uppercase font-medium text-gray-300'>
                            Response
                          </div>
                          <div className='text-sm overflow-y-auto'>
                            <pre
                              className='p-2 text-xs text-gray-400'
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
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
