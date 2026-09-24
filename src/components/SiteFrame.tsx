import { FloatingCTA } from "./FloatingCTA";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
