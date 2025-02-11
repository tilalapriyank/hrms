import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Topbar from "../components/topbar";
import Dashboard from "../components/dashboard";


const DashboardLayout = () => {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Header />

                <main className="p-6">
                    <Topbar />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
