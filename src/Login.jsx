import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './components/atoms/Input';
import Button  from './components/atoms/Button';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Invalid login credentials');
            }

            setSuccess('Login successful! Redirecting...');
            // Optionally redirect or handle successful login
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <form onSubmit={handleSubmit} className="p-8 bg-teal-500 rounded-lg shadow-md w-96">
                <h2 className="mb-6 text-3xl font-bold text-center text-white">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-white">Email</label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-teal-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-white">Password</label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-teal-300 rounded"
                    />
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 text-white transition duration-200 ${loading ? 'bg-teal-400' : 'bg-teal-700'} rounded-md hover:bg-teal-600`}
             
                   label={loading ? 'Logging in...' : 'Login'}
                    />
                <p className="mt-4 text-center text-white">
                    Don't have an account?{' '}
                    <Link to="/register" className="underline">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;