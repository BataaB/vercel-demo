import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <div className="logo">
                    <Image 
                        src={"/logo.png"}
                        width={150}
                        height={100}
                        alt="logo"
                    />
                </div>
                <nav className="menu">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/shop"}>Shop</Link>
                    <Link href={"/featured"}>Featured</Link>
                    <Link href={"/recommended"}>Recommended</Link>
                </nav>
            </div>
            <div className="header-right"></div>
        </header>
    );
}

export default Header;