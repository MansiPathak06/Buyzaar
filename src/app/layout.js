import "./globals.css";
import WhatsAppButton from './components/whatsappButton';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <WhatsAppButton/>
    
      </body>
    </html>
  );
}
