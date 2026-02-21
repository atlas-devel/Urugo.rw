import React from "react";
import HeroServices from "../components/user/Home/LandlordServices";
import {
  Home as HomeIcon,
  CreditCard,
  BarChart2,
  FileText,
  Bell,
  Wallet,
  Search,
  Bot,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const LandLordFeatures = [
  {
    title: "Manage Properties",
    icon: HomeIcon,
    description:
      "Track multiple properties across different locations from one dashboard. Add units, set rent, manage details effortlessly.",
  },
  {
    title: "Track Payments",
    icon: CreditCard,
    description:
      "See who paid and who didn't in real-time. Automatic alerts for overdue rent with red status indicators.",
  },
  {
    title: "Calculate Taxes",
    icon: BarChart2,
    description:
      "Automatic annual tax calculations based on rental income. Stay compliant with Rwanda Revenue Authority requirements.",
  },
  {
    title: "Digital Contracts",
    icon: FileText,
    description:
      "Store and manage lease agreements securely. Both parties can access contracts anytime, anywhere.",
  },
  {
    title: "Payment Alerts",
    icon: Bell,
    description:
      "Automated reminders sent to renters before due dates. Reduce late payments and disputes.",
  },
];

const RentersFeatures = [
  {
    title: "Pay Online Securely",
    icon: Wallet,
    description:
      "Pay rent through Flutterwave with mobile money, cards, or bank transfer. Safe, fast, and convenient.",
  },
  {
    title: "Find Homes",
    icon: Search,
    description:
      "Browse available properties and filter by location, price, and amenities. Find your perfect home easily.",
  },
  {
    title: "AI-Powered Matching",
    icon: Bot,
    description:
      "Smart recommendations based on your preferences. Let AI find properties that match your needs.",
  },
  {
    title: "Payment History",
    icon: Smartphone,
    description:
      "Track all your rent payments in one place. Download receipts anytime you need them.",
  },
  {
    title: "View Contracts",
    icon: CheckCircle,
    description:
      "Access your lease agreement digitally. No more lost paper contracts or disputes.",
  },
];
function Home() {
  return (
    <section className="min-h-screen w-full ">
      <h1 className="block text-center pt-10 text-4xl font-bold text-blue-600">
        Our services
      </h1>
      <div className="grid md:grid-cols-2 gap-20 mt-12">
        <div>
          {" "}
          <h1 className="block text-center pt-3 text-3xl font-bold text-blue-600">
            For Landlord
          </h1>
          <div className="w-full  gap-4 py-12  grid max-sm:grid-cols-1 sm:grid-cols-2   ">
            {LandLordFeatures.map(({ title, icon: Icon, description }, idx) => (
              <HeroServices
                key={idx + 1}
                title={title}
                Icon={Icon}
                description={description}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="block text-center pt-3 text-3xl font-bold text-blue-600">
            For Renter
          </h1>
          <div className="w-full  gap-4  py-12  grid max-sm:grid-cols-1 sm:grid-cols-2   ">
            {RentersFeatures.map(({ title, icon: Icon, description }, idx) => (
              <HeroServices
                key={idx + 1}
                title={title}
                Icon={Icon}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
