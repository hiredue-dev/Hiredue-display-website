import Navbar from "@/components/Navbar";
import DashboardPreview from "@/components/DashboardPreview";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DashboardPreview />
      <EmailForm />
      <Footer />
    </main>
  );
}
