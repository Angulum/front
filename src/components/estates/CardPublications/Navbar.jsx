const Navbar = ({ totalCards, cardsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">My Properties</h1>
            <div className="flex space-x-2 items-center">
                <button 
                    onClick={handlePrevPage} 
                    className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-500"
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => handlePageClick(index + 1)}
                        className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-600'} hover:bg-gray-500`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button 
                    onClick={handleNextPage} 
                    className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-500"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
