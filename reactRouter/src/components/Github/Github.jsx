import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()

    // let gitApiUser = 'https://api.github.com/users/hiteshchoudhary'
    // let gitApiUser = 'https://api.github.com/users/anujgithub'

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(gitApiUser)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-md'>
            Github followers: {data.followers}
            <img src={data.avatar_url} width={200} alt='Git Image' className='rounded-xl' />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    let gitApiUser = 'https://api.github.com/users/anujgithub'
    const response = await fetch(gitApiUser)
    return response.json()
}
