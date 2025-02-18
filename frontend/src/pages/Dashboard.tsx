import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Topbar from "../components/topbar";
import Dashboard from "../components/dashboard";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import ViewEmployee from "../components/ViewEmployee";


const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto h-full ml-64">
                <Header />

                <main className="p-6">
                    <Topbar />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/empolyee" element={<Employee />} />
                        <Route path="/empolyee/add" element={<AddEmployee />} />
                        <Route path="/empolyee/view/1" element={<ViewEmployee />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
