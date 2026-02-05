export default function Button({
    children,
    onClick,
    variant = 'primary',
    type = "button"
}) {

    let className = "btn"

    if(variant === "primary") className += " btn-primary"
    if(variant === "danger") className += " btn-danger"
    if(variant === "secondary") className += " btn-secondary"
    if(variant === "warning") className += " btn-warning"

    return (
    <button type={type} onClick={onClick} className={className}>
        {children}
    </button>
    );
}