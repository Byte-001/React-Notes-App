import "../App.css";
import Search from "./Search.jsx";


const Header = () => {
    return (
        <div>
            <div className={"header"}>
                <p>Header</p>
            </div>
            <div>
                <Search />
            </div>
        </div>
    );
}

export default Header;