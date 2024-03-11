export default function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect} id="btn">{children}</button>
        </li>
    );
}