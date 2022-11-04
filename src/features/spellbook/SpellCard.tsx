import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Markdown from 'markdown-to-jsx';
import { SpellData } from '../../types';

const levels: { [key: string]: string } = {
  '0': 'Cantrip',
  '1': 'st',
  '2': 'nd',
  '3': 'rd',
};

const SpellCard = ({ data }: { data: SpellData }) => {
  const { level, name, school, components, casting_time, duration, range, dc, damage, desc } = data;
  return (
    <div className="mx-auto my-2 w-full max-w-3xl rounded-2xl bg-white p-2 border-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className="w-full grid gap-2 grid-cols-[0fr_2fr_2fr_2fr_1fr_1fr_0fr] place-items-center 
            rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium 
            text-purple-900 hover:bg-purple-200 
            focus:outline-none focus-visible:ring 
            focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            >
              <span className="text-xs leading-5 ">{`${+level ? level : ''}${levels[level] || 'th'}`}</span>
              <span className="justify-self-start ">
                <p>{name}</p>
                <p className="text-xs font-normal">
                  {school.name} ·{' '}
                  {components.map((comp, i) => (
                    <span key={i}>{comp} </span>
                  ))}
                </p>
              </span>
              <span className="">{casting_time}</span>
              <span className="">{duration}</span>
              <span className="">{range}</span>
              <span className="">{dc?.full_name || ''}</span>
              {/* <span className="">{effectOrDamage}</span> */}
              <ChevronRightIcon
                className={`${
                  open ? 'rotate-90 transform' : ''
                } transition-transform  h-5 w-5 text-purple-500 justify-self-end`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {desc.map((paragraph, i) => (
                <p key={i}>
                  <Markdown>{paragraph}</Markdown>
                </p>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
    // </div>
  );
};

export default SpellCard;
