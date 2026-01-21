const MarqueeWrapper = ({ children, className = '' }) => {
    return (
        <div className={`relative overflow-x-hidden ${className}`}>
            <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
                <div className="inter whitespace-nowrap p-5 overflow-hidden">
                    <div className="animate-marquee pause-on-hover flex gap-8 lg:gap-24">
                        {children}
                        {/* Duplicate children for seamless looping */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeWrapper
