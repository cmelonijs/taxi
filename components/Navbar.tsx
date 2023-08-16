const Navbar = () => {
    return (
        <div className="flex justify-between py-3 px-10 border-b-[2px] border">
            <div className="flex gap-10 items-center">
                <h1>Logo</h1>
                <div className="hidden md:flex gap-6">
                    <p className="hover:bg-gray-100 px-4 py-2 rounded-sm transition-all cursor-pointer">Home</p>
                    <p className="hover:bg-gray-100 px-4 py-2 rounded-sm transition-all cursor-pointer">History</p>
                    <p className="hover:bg-gray-100 px-4 py-2 rounded-sm transition-all cursor-pointer">Help</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar