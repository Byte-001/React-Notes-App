import "../App.css";
import Search from "./Search.jsx";


const Header = () => {
    return (
        <>
            <div className={"header"}>
                 <h1 className={"title"}>Notes</h1>
                 <button className={"toggle-btn"}>Toggle Button</button>
            </div>
            <div>
                <Search />
            </div>
        </>
    );
}

export default Header;