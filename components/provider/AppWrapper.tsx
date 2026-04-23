'use client'

import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import Providers from './TSProvider';
import { Toaster } from '../ui/toaster';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Providers>
            <TooltipProvider>
                {children}
                <Toaster />
            </TooltipProvider>
        </Providers>
    )
}

export default AppWrapper