'use client';

import Image from 'next/image';
import ConvertKitForm from './components/ConvertKitForm';

export default function Home() {
  const tools = [
    {
      name: 'Headline Generator',
      description: 'Create compelling headlines that drive engagement',
      icon: '📰'
    },
    {
      name: 'YouTube Video to Newsletter',
      description: 'Transform video content into newsletter-ready articles',
      icon: '🎥'
    },
    {
      name: 'Newsletter Idea Generator',
      description: 'Never run out of newsletter content ideas',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-red-700">Superpower</span>{' '}
                <span className="text-blue-700">Your</span>{' '}
                <span className="text-black">Newsletter</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Transform your newsletter into a powerful engagement machine with AI-powered tools designed for creators.
              </p>

              {/* ConvertKit Email Signup Form */}
              <div className="max-w-md">
                <ConvertKitForm />
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] w-full">
                <img
                  src="/e17a9ec2-b876-4909-a5f2-bb97745c4051.png"
                  alt="Newsletter Hero"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Coming Soon
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tool 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Track your newsletter performance with detailed analytics and insights.
            </p>
          </div>

          {/* Tool 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Automation Tools</h3>
            <p className="text-gray-600">
              Automate your newsletter workflows and save hours every week.
            </p>
          </div>

          {/* Tool 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Builder</h3>
            <p className="text-gray-600">
              Build and engage with your newsletter community like never before.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Tools{' '}
              <span className="text-red-600">Coming Soon</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered suite of tools will revolutionize how you create, manage, and grow your newsletter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tool.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Newsletter Hero. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
