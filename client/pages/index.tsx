import React from 'react';
import { GetStaticProps } from 'next';
import Navbar from '../components/Navbar';

export default function Index({ data }) {
  return (
    <>
      <Navbar socialLinks={data.home_social_links} />
      <h2>Index</h2>
      {console.log(data)}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'http://sub.pg-at-env.eba-5dnijfwy.eu-west-1.elasticbeanstalk.com/home',
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
