import Header from "~/components/Layout/components/Header"
import Sidebar from "./Sidebar"

function DedaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DedaultLayout
