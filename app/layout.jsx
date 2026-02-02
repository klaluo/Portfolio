import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "Kayla Luo",
    description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
