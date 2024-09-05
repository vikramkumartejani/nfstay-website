import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="lg:flex w-full min-h-screen bg-white">
            <Sidebar />
            <div className="flex-1 w-full">
                <Header />
                <main className="w-full">{children}</main>
            </div>
        </div>
    );
}
