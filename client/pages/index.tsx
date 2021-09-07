import React from 'react'
import { GetStaticProps } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import AboutMe from '@components/AboutMe'
import Services from '@components/Services'
import Videos from '@components/Videos'
import Blogs from '@components/Blogs'

export default function Index({ data, videoShelves }: any) {
  return (
    <>
      <Navbar socialLinks={data.Home_SocialLinks} />
      <Hero
        deaktopHeroUrl={data.Home_Hero.desktopImage.url}
        mobileHeroUrl={data.Home_Hero.mobileImage.url}
      />
      {/* {console.log(data)} */}
      {/* {console.log(videoShelves)} */}

      <AboutMe
        profileImage={data.Home_ProfileImage}
        aboutMeSections={data.Home_AboutMe}
      />
      <Services
        servicesBgImage={data.Home_ServiceBgImage}
        homeServices={data.Home_Services}
      />
      <Videos videoShelves={videoShelves} />
      <Blogs blogs={data.latest_blogs} />

      <h2>Index</h2>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getHomeData()

  const videoShelves = await Promise.all(
    data.video_shelves.map(async (video_shelf: any) => {
      const videoData = await getVideos(video_shelf.videos)
      video_shelf.videos = videoData
      return video_shelf
    }),
  )

  console.log(videoShelves)

  if (!data || !videoShelves) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, videoShelves }, // will be passed to the page component as props
  }
}

async function getHomeData() {
  const res = await fetch(`http://172.18.0.1:3012/home`)
  const data = await res.json()
  return data
}

async function getVideos(videoIds: string[]) {
  const videos = await Promise.all(
    videoIds.map(async (videoId) => {
      const res = await fetch(`http://172.18.0.1:3012/videos/${videoId}`)
      const json = await res.json()
      return json
    }),
  )

  return videos
}
