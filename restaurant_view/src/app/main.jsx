import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "../styles/index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "#FFFFFF",
                        color: "#1A1A1A",
                        border: "2px solid #FF6B00",
                        borderRadius: "16px",
                        fontWeight: 600,
                        padding: "12px 16px",
                    },
                    success: {
                        iconTheme: { primary: "#FF6B00", secondary: "#fff" },
                    },
                    error: {
                        iconTheme: { primary: "#E60000", secondary: "#fff" },
                    },
                }}
            />
        </BrowserRouter>
    </StrictMode>
);
