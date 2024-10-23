import Link from 'next/link';

export default function Footer() {
    // footer_links = [{text: "Features", route: "/#features"}, {text: ""}]

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 xl:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {/* Company Info and Newsletter */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Phase-R</h2>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Subscribe to our newsletter</h3>
                        <p className="text-gray-400 mb-4">Get product updates, company news and more</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full"
                            />
                            <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded-r-md transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-2 xl:col-span-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">Product</h3>
                            <ul className="space-y-2">
                                {['Features', 'Pricing', 'Platform'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Company</h3>
                            <ul className="space-y-2">
                                {['About Us', 'Team', 'Customer Stories'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Resources</h3>
                            <ul className="space-y-2">
                                {['Support', 'Documentation', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2023 Phase-R. All rights reserved.</p>
            </div>
        </footer>
    );
}
