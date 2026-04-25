import { Outlet } from "react-router-dom";
import { ClientNavbar } from "./ClientNavbar";
import { ClientFooter } from "./ClientFooter";

export const ClientContainer = () => {
    return (
        <div className="min-h-screen bg-kfc-cream flex flex-col font-sans">
            <ClientNavbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <ClientFooter />
        </div>
    );
};
