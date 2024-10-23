import React from 'react'
import Highlight from '../../components/Highlight/Highlight'
import Recommendation from '../../components/Recommendation'
import Testimonial from '../../components/Testimonial'
import Advantadges from '../../components/Advantadges'
import AppDownload from '../../components/AppDownload/AppDownload'

/**
 *
 * @returns
 */

function Home() {
    return (
        <div className='home-page'>
            <Highlight />
            <Recommendation />
            <Testimonial />
            <Advantadges />
            <AppDownload />
        </div>
    )
}

export default Home
