import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-app bg-cover">
      <Header />
      <div className="h-20"></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
