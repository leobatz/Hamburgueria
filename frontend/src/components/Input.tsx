function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input 
            {...props} 
            className="bg-white p-3 rounded-sm md:h-[34px] outline-none"
        />
    );
};

export default Input;