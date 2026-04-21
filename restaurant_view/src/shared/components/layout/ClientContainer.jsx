import { Outlet } from "react-router-dom";
import { ClientNavbar } from "./ClientNavbar";
import { ClientFooter } from "./ClientFooter";

export const ClientContainer = () => {
    return (
        <div className="min-h-screen bg-[#FDFCF0] flex flex-col"> 
            <ClientNavbar />
            <main className="flex-1">
                <Outlet /> {/* Aquí se renderiza ClientPortalPage o MenuView */}
            </main>
            <ClientFooter />
        </div>
    );
};