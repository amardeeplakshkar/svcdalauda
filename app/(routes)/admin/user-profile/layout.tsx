import React from 'react'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='m-4 grid place-items-center'>
            {
                children
            }
        </div>
    )
}

export default ProfileLayout