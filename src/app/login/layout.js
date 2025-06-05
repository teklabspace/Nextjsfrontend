export default function LoginLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children} {/* No Navbar, No Sidebar */}
      </body>
    </html>
  );
}
