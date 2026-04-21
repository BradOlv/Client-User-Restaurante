import { Route, Routes, Navigate } from "react-router-dom";
import { ClientLoginPage } from "../../features/auth/pages/ClientLoginPage";
import { ClientPortalPage } from "../layouts/ClientPortalPage"; 
import { MenuView } from "../../features/menu/components/MenuView.jsx"; 
import { ClientContainer } from "../../shared/components/layout/ClientContainer";
import { CategoryView } from "../../features/menu/components/CategoryView";
import { CouponView } from "../../features/menu/components/CouponView";
import { ProfileView } from "../../features/menu/components/ProfileView";
import { CartView } from "../../features/menu/components/CartView";
import { ConfirmationView } from "../../features/menu/components/ConfirmationView";

// ESTA ES LA IMPORTACIÓN QUE FALTABA:
import { CheckoutView } from "../../features/menu/components/CheckoutView"; 

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<ClientLoginPage />} />

            {/* Rutas con Navbar */}
            <Route path="/portal" element={<ClientContainer />}>
                <Route index element={<ClientPortalPage />} />
                <Route path="menu" element={<MenuView />} />
                <Route path="menu/:categoryName" element={<CategoryView />} />
                <Route path="cupones" element={<CouponView />} />
                <Route path="perfil" element={<ProfileView />} />
                <Route path="carrito" element={<CartView />} />
                <Route path="checkout" element={<CheckoutView />} />
                <Route path="confirmacion" element={<ConfirmationView />} />
            </Route>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};