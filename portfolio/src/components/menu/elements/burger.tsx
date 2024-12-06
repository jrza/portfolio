const Burger = () => {
    return (<button aria-label="Burger menu button" className="relative p-6 bg-amber-50 bg-opacity-80 rounded-md">
    <div className="absolute space-y-2 z-50 -translate-y-1/2 -translate-x-1/2">
        <div className="w-8 h-1 bg-pink-500 animate-pulse"></div>
        <div className="w-8 h-1 bg-pink-500 animate-pulse"></div>
        <div className="w-8 h-1 bg-pink-500 animate-pulse"></div>
        </div>
    </button>
    )
}

export default Burger;