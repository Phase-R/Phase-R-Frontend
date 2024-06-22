export default function Footer() {
    return(
        <footer className="bg-gray-900 xl:p-8 h-[80vh] xl:h-[60vh] xl:inline-flex xl:space-x-16 w-full text-white">
            <div className="p-4">
                <p className="font-bold">Phase-R</p>
                <br />
                <p className="font-bold">Subscribe to our newsletter</p>
                <p>Get product updates, company news and more</p>
                <br />
                <button className="bg-orange-400 text-black font-semibold w-60 rounded-xl h-10 text-center">Subscribe to newsletter</button>
            </div>
            <div>
                <div className="space-y-4 flex-col flex">
                    <button>Product</button>
                    <button>Features</button>
                    <button>Team</button>
                    <button>Customer Stories</button>
                    <button>Pricing</button>
                    <button>Resources</button>
                    <button>Platform</button>
                    <button>About Us</button>
                    <button>Support</button>
                </div>
            </div>
        </footer>
    )
}