// EmailVerifiedPage.jsx
import { FaCheckCircle } from 'react-icons/fa';

const EmailVerifiedPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg p-8 shadow-md flex items-center space-x-4">
                <FaCheckCircle className="text-green-500 text-6xl" />
                <h2 className="text-2xl font-semibold text-black">Email Verified</h2>
            </div>
        </div>
    );
};

export default EmailVerifiedPage;
