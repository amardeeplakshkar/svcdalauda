
import AdminLayout from '@/components/core/AdminLayout'
import { Spinner } from '@/components/ui/spinner'
import { ClerkLoading, ClerkLoaded, ClerkDegraded, ClerkFailed } from '@clerk/nextjs'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ClerkLoading>
                <div className='flex items-center justify-center h-screen text-primary'>
                    <Spinner className='size-8' />
                </div>
            </ClerkLoading>
            <ClerkLoaded>
                <AdminLayout>
                    {children}
                </AdminLayout>
                <ClerkDegraded>
                    <div className='flex items-center justify-center h-screen text-primary'>
                    <p>Clerk is experiencing issues. Please try again later.</p>
                    </div>
                </ClerkDegraded>
            </ClerkLoaded>
            <ClerkFailed>
                <div className='flex items-center justify-center h-screen text-primary'>
                <p>Something went wrong with Clerk. Please contact support.</p>
                </div>
            </ClerkFailed>
        </>

    )
}

export default AuthLayout