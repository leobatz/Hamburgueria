function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input 
            {...props} 
            className="bg-white p-3 rounded-sm md:h-[40px] outline-none"
        />
    );
};

export default Input;