import { useState } from 'react'
import { Heart, Star, Zap, Sparkles } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Pitoulis Dark
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A beautiful, modern React application built with Vite, TypeScript, and Tailwind CSS
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Lightning Fast</h3>
              </div>
              <p className="text-gray-300">
                Built with Vite for blazing fast development and optimized production builds.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Modern Stack</h3>
              </div>
              <p className="text-gray-300">
                React 18, TypeScript, and Tailwind CSS for a robust development experience.
              </p>
            </div>
          </div>

          {/* Interactive Counter */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Interactive Demo</h2>
              <div className="mb-8">
                <div className="text-6xl font-bold text-purple-400 mb-4">{count}</div>
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Click me!
                </button>
              </div>
              <p className="text-gray-300 text-sm">
                Built with React hooks and beautiful animations
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400">
            Ready to build something amazing? Start editing <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">src/App.tsx</code>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
