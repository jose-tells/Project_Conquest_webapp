import React from 'react'
// Components
import VideoFormat from './VideoFormat'
import VideoDescription from './VideoDescription'
// Videos
import Video1 from '../assets/static/videos/Las Calles Estan Oscuras.mp4'
import Video2 from '../assets/static/videos/What a mess.mp4'
import Video3 from '../assets/static/videos/Ciclon x Cimber.mp4'


export default function GridVideos() {
    return(
        <section className="gridVideo">
            <VideoFormat 
                name="video1"
                Video={Video1}
            />
            <VideoDescription 
                description="description"
                title="Las Calles estan Oscuras"
                caption="A Message through the dance"
                autor="by Jose Marquinez"
            />

            <VideoFormat 
                name="video2"
                Video={Video2}
            />
            <VideoDescription 
                description="description2"
                title="What a Mess"
                caption="The struggles of a Musician"
                autor="by Jose Marquinez"
            />

            <VideoFormat 
                name="video3"
                Video={Video3}
            />
            <VideoDescription 
                description="description3"
                title="Ciclon x Climber"
                caption="A Gaming featuring"
                autor="by Jose Marquinez"
            />

        </section>
    )
}