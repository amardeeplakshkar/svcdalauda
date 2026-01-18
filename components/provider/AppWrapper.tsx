'use client'

import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import { TooltipProvider } from '../ui/tooltip'
import Providers from './TSProvider';
import { Toaster } from '../ui/toaster';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ClerkProvider>
                <Providers>
                    {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                > */}
                    <TooltipProvider>
                        {children}
                        <Toaster />
                    </TooltipProvider>
                    {/* </ThemeProvider> */}
                </Providers>
                
            </ClerkProvider>
        </>
    )
}

export default AppWrapper