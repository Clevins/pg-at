import React from 'react';
import { GetStaticProps } from 'next';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';

export default function Index({ data }: any) {
  return (
    <>
      <Navbar socialLinks={data.home_social_links} />
      <Hero
        deaktopHeroUrl={data.home_hero.desktopImage.url}
        mobileHeroUrl={data.home_hero.mobileImage.url}
      />
      <h2>Index</h2>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `http://sub.pete-guay-athletic-therapy.eu-west-1.elasticbeanstalk.com/home`,
  );

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
