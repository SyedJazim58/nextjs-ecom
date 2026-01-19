
import { Footer } from "./footer";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Navbar />
            <div className="flex-1 bg-[#f5f5f0]">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;