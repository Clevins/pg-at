import React, { FunctionComponent } from 'react';
import type { SocialsProps, ISocialLink } from '@customTypes/SocialsProps';

const Socials: FunctionComponent<SocialsProps> = ({ socialLinks }) => {
  return (
    <ul className="flex flex-row mt-2 lg:justify-end lg:mt-0 ">
      {socialLinks.map((socialLink: ISocialLink) => {
        const { id, url, name, icon } = socialLink;
        return (
          <li
            key={id}
            className="w-6 h-6 m-2 transition duration-300 ease-in-out opacity-70 hover:opacity-100"
          >
            <a href={url} className="text-white">
              <img src={icon.url} alt={name} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
