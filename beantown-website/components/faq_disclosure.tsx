import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function FAQDisclosure() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border-b-2 w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                <span>Why do I need professionals to clean my carpets?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border-b-2 w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                <span>Why do I need professionals to clean my carpets?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border-b-2 w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                <span>Why do I need professionals to clean my carpets?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border-b-2 w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                <span>Why do I need professionals to clean my carpets?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
