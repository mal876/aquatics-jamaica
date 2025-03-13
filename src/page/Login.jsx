import React from 'react'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
        <br /><br /><br />
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6 dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Sign in to your account</h1>
                
                <form className="space-y-6">
                
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                        />
                    </div>
                    
                    
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        />
                    </div>

                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Sign in
                    </button>
                    
                    
                    <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? 
                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Login