import React from 'react';
import { GetStaticProps } from 'next';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default function Index({ data }) {
  return (
    <>
      <Navbar socialLinks={data.home_social_links} />
      <Hero
        deaktopHeroUrl={data.home_hero.desktopImage.url}
        mobileHeroUrl={data.home_hero.mobileImage.url}
      />
      <h2>Index</h2>
      {console.log(serverRuntimeConfig.apiBaseUrl)}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${serverRuntimeConfig.apiBaseUrl}/home`);

  console.log(serverRuntimeConfig.apiBaseUrl);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};
