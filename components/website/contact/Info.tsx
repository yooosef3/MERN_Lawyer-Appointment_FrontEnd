import { ContactsProps } from '@/app/types/types';
import React from 'react';

const Info = ({contacts}:{contacts: ContactsProps[]}) => {
    return (
        <div className="mt-10 grid gap-10 bg-white p-5 rounded-md shadow-md md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
          {contacts.map((contact) => (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="text-lemon-100">{contact.icon}</div>
                <h3 className="font-semibold md:text-lg">{contact.title}:</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base font-medium">{contact.info}</p>
            </div>
          ))}
        </div>
    );
};

export default Info;