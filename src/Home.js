import React from 'react'
import {Link} from 'react-router-dom'


function Home(props) {
    return (
        <div>
            <h2>Your favorite food, delivered while coding</h2>
            <Link to='/order' >Pizza?</Link>
        </div>
    )
}

export default Home