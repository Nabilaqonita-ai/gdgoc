export default function Button({ children, onClick, variant = 'primary', type = 'button' }) {
    let base = 'px-3 py-1 rounded text-sm';
    let variantClass = 'bg-blue-600 text-white hover:bg-blue-700';
    if (variant === 'secondary') variantClass = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    if (variant === 'danger') variantClass = 'bg-red-600 text-white hover:bg-red-700';
    if (variant === 'warning') variantClass = 'bg-yellow-400 text-gray-800 hover:bg-yellow-500';

    return (
        <button type={type} onClick={onClick} className={`${base} ${variantClass}`}>
            {children}
        </button>
    );
}