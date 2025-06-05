const Background = ({ children, className = "" }) => {
    return (
        <div className={`bg-slate-800 text-center shadow-xl rounded-xl p-20 ${className}`}>
            {children}
        </div>
    );
};

export default Background;
