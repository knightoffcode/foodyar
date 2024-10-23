import React from 'react'
import Highlight from '../../components/Highlight/Highlight'
import Recommendation from '../../components/Recommendation'

/**
 *
 * @returns
 */

function Home() {
    return (
        <div className='home-page'>
            <Highlight />
            <Recommendation />
        </div>
    )
}

export default Home
