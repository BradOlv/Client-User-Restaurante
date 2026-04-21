import { Outlet } from "react-router-dom";
import { ClientNavbar } from "./ClientNavbar";

export const ClientContainer = () => {
    return (
        <div className="min-h-screen bg-[#FDFCF0]"> 
            <ClientNavbar />
            <main>
                <Outlet /> {/* Aquí se renderiza ClientPortalPage o MenuView */}
            </main>
        </div>
    );
};