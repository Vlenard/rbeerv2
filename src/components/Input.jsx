const Input = ({ type, value, onChange, placeholder, className, ref, required, name, min, max }) => {
    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            name={name}
            min={min}
            max={max}
            className={`py-2 px-5 border-[#3b2e21] border-2 outline-none ${className}`}
        />
    );
}

export default Input;