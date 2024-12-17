function Sign() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>

                <div className="flex justify-center mb-4">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="h-5 w-5"
                        />
                        Create with Google
                    </button>
                </div>

                <div className="text-center text-gray-500 text-sm mb-4">
                    or continue with email address
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter at least 6 characters"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            placeholder=""
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                    By clicking on the button, you agree to our{' '}
                    <a href="#" className="text-blue-600 underline">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 underline">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default Sign;
