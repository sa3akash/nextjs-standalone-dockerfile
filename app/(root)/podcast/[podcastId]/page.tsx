import React from 'react'

interface Pros {
  params:{podcastId:string}
}

const PodcastDetails = ({params}:Pros) => {
  return (
    <div>Podcast single id {params.podcastId}</div>
  )
}

export default PodcastDetails