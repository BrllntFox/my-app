import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
