// In a new file, e.g., src/pages/LoginPage.jsx
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabaseClient'; // Adjust path if needed

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const LoginPage = () => {


  return (
    // <div className='w-full h-screen flex justify-center items-center'>
        // <div className='w-full max-w-md p-4'>
        //     <Auth 
        //         supabaseClient={supabase}
        //         appearance={{ theme: ThemeSupa}}
        //         theme='dark'
        //         providers={['github']} //Optional: allow login with github 
        //     />
        // </div>
    // </div>
<div className="min-h-screen bg-[#1a1a1a] text-white font-mono">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-xl tracking-[0.2em] font-light">MOMENTUM</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="mb-20">
              <div className="mb-8">
                <div className="text-6xl md:text-8xl font-extralight leading-none mb-6">
                  <span className="text-gray-500">[</span>
                  <span className="text-white">goals</span>
                  <span className="text-gray-500">]</span>
                </div>
                <div className="text-xl text-gray-400 font-light max-w-lg">
                  minimal tracking. <span className="text-teal-400">maximum momentum.</span>
                </div>
              </div>

              {/* Terminal-style preview */}
              <div className="bg-black/40 border border-gray-800 rounded-none p-6 font-mono text-sm mb-12">
                <div className="flex items-center gap-2 mb-4 text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-4 text-xs">momentum.app</span>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div>
                    <span className="text-teal-400">$</span> add "learn typescript"
                  </div>
                  <div className="text-gray-500">→ goal added [priority: high]</div>
                  <div>
                    <span className="text-teal-400">$</span> status "learn typescript" --progress
                  </div>
                  <div className="text-gray-500">→ 3/10 modules complete</div>
                  <div>
                    <span className="text-teal-400">$</span> <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth Section */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left side - Philosophy */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light mb-4 text-gray-300">why momentum?</h2>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>most goal apps are bloated.</p>
                    <p>charts, graphs, notifications, streaks, badges...</p>
                    <p className="text-white">we believe in simplicity.</p>
                    <p>set it. track it.</p>
                  </div>
                </div>

                <div className="border-l-2 border-teal-400/30 pl-6">
                  <div className="text-sm text-gray-500 mb-2"></div>
                  <div className="text-2xl font-light">ACHIEVE IT.</div>
                  <div className="text-xs text-gray-600"></div>
                </div>
              </div>

              {/* Right side - Auth */}
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      <button
                        className={`px-4 py-2 text-sm transition-colors text-teal-400 border-b border-teal-400`}
                      >
                        start
                      </button>
                      
                    </div>
                  </div>

                  <div className='w-full max-w-md p-4'>
                    <Auth 
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa}}
                        theme='dark'
                        providers="" //Optional: allow login with github 
                    />
                  </div>

                  

                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="text-xs text-gray-500 text-center">
                        <>no spam. no bloat. just goals.</>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom section */}
            <div className="mt-20 pt-12 border-t border-gray-800/50">
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div>
                  <div className="text-gray-500 mb-2">features</div>
                  <div className="space-y-1 text-gray-400">
                    <div>• minimal interface</div>
                    <div>• priority sorting</div>
                    <div>• progress tracking</div>
                    <div>• deadline alerts (upcoming)</div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2">philosophy</div>
                  <div className="space-y-1 text-gray-400">
                    <div>• less is more</div>
                    <div>• focus over features</div>
                    <div>• progress over perfection</div>
                    <div>• momentum over motivation</div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2">pricing</div>
                  <div className="text-2xl font-light text-white mb-1">free</div>
                  <div className="text-gray-400">forever. because goals shouldn't cost money.</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginPage