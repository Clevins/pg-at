import React from 'react';
import { GetStaticProps } from 'next';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import AboutMe from '@components/AboutMe';
import Services from '@components/Services';

export default function Index({ data }: any) {
  return (
    <>
      <Navbar socialLinks={data.Home_SocialLinks} />
      <Hero
        deaktopHeroUrl={data.Home_Hero.desktopImage.url}
        mobileHeroUrl={data.Home_Hero.mobileImage.url}
      />
      {console.log(data)}

      <AboutMe />
      <Services
        servicesBgImage={data.Home_ServiceBgImage}
        homeServices={data.Home_Services}
      />
      <h2>Index</h2>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://172.18.0.1:3012/home`);

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
