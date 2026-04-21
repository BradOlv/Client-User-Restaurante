import { Route, Routes, Navigate } from "react-router-dom";
import { ClientLoginPage } from "../../features/auth/pages/ClientLoginPage";
import { ClientPortalPage } from "../layouts/ClientPortalPage"; 
import { MenuView } from "../../features/menu/components/MenuView"; 
import { ClientContainer } from "../../shared/components/layout/ClientContainer";
import { CategoryView } from "../../features/menu/components/CategoryView";
import { CouponView } from "../../features/menu/components/CouponView";
import { ProfileView } from "../../features/menu/components/ProfileView";
import { CartView } from "../../features/menu/components/CartView";
import { ConfirmationView } from "../../features/menu/components/ConfirmationView";
import { CheckoutView } from "../../features/menu/components/CheckoutView"; 
import { ReservationPage } from "../../features/reservation/pages/ReservationPage";
import { EventPage } from "../../features/event/pages/EventPage";
import { OrderHistoryPage } from "../../features/order/pages/OrderHistoryPage";
import { OrderDetailPage } from "../../features/order/pages/OrderDetailPage";
import { ReviewPage } from "../../features/review/pages/ReviewPage";
import { TermsPage } from "../pages/TermsPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Ruta pública */}
            <Route path="/login" element={<ClientLoginPage />} />

            {/* Rutas con Navbar (Layout Principal) */}
            <Route path="/portal" element={<ClientContainer />}>
                {/* Al entrar a /portal, se muestra ClientPortalPage por defecto */}
                <Route index element={<ClientPortalPage />} />
                
                {/* Rutas hijas corregidas */}
                <Route path="menu" element={<MenuView />} />
                <Route path="menu/:categoryName" element={<CategoryView />} />
                <Route path="cupones" element={<CouponView />} />
                <Route path="perfil" element={<ProfileView />} />
                <Route path="carrito" element={<CartView />} />
                <Route path="checkout" element={<CheckoutView />} />
                <Route path="confirmacion" element={<ConfirmationView />} />
                <Route path="reservas" element={<ReservationPage />} />
                <Route path="eventos" element={<EventPage />} />
                <Route path="pedidos" element={<OrderHistoryPage />} />
                <Route path="pedido/:orderId" element={<OrderDetailPage />} />
                <Route path="resenas" element={<ReviewPage />} />
                <Route path="terminos" element={<TermsPage />} />
                <Route path="privacidad" element={<PrivacyPage />} />
            </Route>

            {/* Redirección inicial: Si entras a / te manda a /login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};