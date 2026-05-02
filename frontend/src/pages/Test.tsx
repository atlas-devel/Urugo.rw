// src/pages/LandingPage.tsx
import { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Shield,
  Sparkles,
  Building,
  Users,
  CreditCard,
  Search,
  MessageSquare,
  CheckCircle,
  Clock,
  Home,
  UserCheck,
  FileText,
  Bell,
  Star,
  ArrowRight,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Eye,
  Lock,
  AlertCircle,
  Navigation,
  Footprints,
  XCircle,
} from "lucide-react";

export default function TestPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<null | {
    title: string;
    location: string;
    price: number;
  }>(null);

  const handleViewDetails = (property: {
    title: string;
    location: string;
    price: number;
  }) => {
    setSelectedProperty(property);
    setShowSignupModal(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-black/80 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Urugo
              </span>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Features
              </a>
              <a
                href="#properties"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Properties
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Testimonials
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900">
                Sign In
              </button>
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-700 dark:text-gray-300 md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-black md:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <a
                href="#features"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
              >
                Features
              </a>
              <a
                href="#properties"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
              >
                Properties
              </a>
              <a
                href="#how-it-works"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300"
              >
                Testimonials
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium dark:border-gray-700">
                  Sign In
                </button>
                <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-950" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400 mb-6">
              <Sparkles size={14} className="mr-1" />
              AI-Powered Rental Management
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Manage Your Rental Properties with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Simplicity
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Urugo helps landlords collect rent online, vet tenants instantly,
              and manage properties from one dashboard. Tenants pay easily and
              build rental credit history.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900">
                Browse Properties
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  1,200+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Active Users
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  150+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Properties Listed
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  2,500+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Payments Processed
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  98%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Rental Management in Rwanda is Broken
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Here's what landlords and tenants face every day
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950">
                <Building className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                For Landlords
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  • Cash payment hassles
                </li>
                <li className="flex items-center gap-2">
                  • No way to check bad tenants
                </li>
                <li className="flex items-center gap-2">
                  • Manual tracking in notebooks
                </li>
                <li className="flex items-center gap-2">
                  • Communication issues
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-950">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                For Tenants
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  • Must visit landlord to pay
                </li>
                <li className="flex items-center gap-2">
                  • No payment history proof
                </li>
                <li className="flex items-center gap-2">
                  • Unclear lease terms
                </li>
                <li className="flex items-center gap-2">
                  • Trust and dispute problems
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                For Property Seekers
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  • Hard to find properties
                </li>
                <li className="flex items-center gap-2">
                  • No landlord reviews
                </li>
                <li className="flex items-center gap-2">• Hidden costs</li>
                <li className="flex items-center gap-2">
                  • Waste time visiting unsuitable places
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Urugo Fixes Everything
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              One platform. Three solutions for everyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Online Rent Collection
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Pay via MTN Mobile Money or Airtel Money. Automatic receipts. No
                cash. No travel.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tenant Blacklist System
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Check tenant history before renting. Report bad tenants. Build
                trusted community.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                AI Assistant
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Find properties by describing what you want. Calculate
                affordability. Get neighborhood guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Landlords */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400 mb-4">
                For Landlords
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Everything You Need to Manage Your Properties
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Stop using notebooks and Excel. Get a complete property
                management dashboard.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: TrendingUp,
                    text: "Dashboard Overview - See all properties and payment status at a glance",
                  },
                  {
                    icon: CreditCard,
                    text: "Online Payments - Tenants pay via mobile money, you receive in bank",
                  },
                  {
                    icon: Shield,
                    text: "Blacklist Check - Search tenant history before signing lease",
                  },
                  {
                    icon: Bell,
                    text: "Automated Reminders - SMS and email reminders before due date",
                  },
                  {
                    icon: FileText,
                    text: "Digital Lease Agreements - Sign online, store in cloud",
                  },
                  {
                    icon: TrendingUp,
                    text: "Tax Reports - Generate income reports with one click",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-950 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-20 rounded bg-gray-200 dark:bg-gray-700"></div>
                      <div className="flex gap-2">
                        <div className="h-2 w-8 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-2 w-8 rounded bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-20 rounded-lg bg-gray-100 dark:bg-gray-800"
                        ></div>
                      ))}
                    </div>
                    <div className="h-32 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Tenants */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
                  <div className="space-y-3">
                    <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
                    <div className="flex gap-2">
                      <div className="h-16 w-16 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600 dark:bg-green-950 dark:text-green-400 mb-4">
                For Tenants
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Rent Smarter, Not Harder
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Pay rent from anywhere. Build credit history. Never lose a
                receipt again.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: CreditCard,
                    text: "Pay Anywhere - Pay rent via mobile money from home, work, or traveling",
                  },
                  {
                    icon: TrendingUp,
                    text: "Build Credit History - Good payment record helps you rent better properties",
                  },
                  {
                    icon: FileText,
                    text: "Digital Receipts - Instant payment proof. No more disputes",
                  },
                  {
                    icon: Home,
                    text: "View Lease Online - Access your contract anytime from your phone",
                  },
                  {
                    icon: Clock,
                    text: "Fair Treatment - Standard grace period. Clear late fee calculation",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-950 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Previews Section */}
      <section id="properties" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400 mb-4">
              <Home size={14} className="mr-1" />
              Property Previews
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              See What's Available
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse properties near you. Sign up to contact landlords and see
              full details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Property Card 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-900">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                  alt="Modern Apartment in Kimironko"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                  Available
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm dark:bg-black/70 dark:text-white">
                  2 bedrooms
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Modern 2BR Apartment
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Kimironko, Kigali
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    150,000 RWF
                    <span className="text-xs font-normal text-gray-500">
                      /month
                    </span>
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Parking
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    WiFi
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Security
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <Star size={14} className="fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-xs text-gray-500">(24 reviews)</span>
                  </div>
                  <button
                    onClick={() =>
                      handleViewDetails({
                        title: "Modern 2BR Apartment",
                        location: "Kimironko, Kigali",
                        price: 150000,
                      })
                    }
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-900">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"
                  alt="Cozy Studio in Muhima"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                  Available
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm dark:bg-black/70 dark:text-white">
                  1 bedroom
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Cozy Studio Apartment
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Muhima, Kigali
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    80,000 RWF
                    <span className="text-xs font-normal text-gray-500">
                      /month
                    </span>
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Water Included
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Security
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">(18 reviews)</span>
                  </div>
                  <button
                    onClick={() =>
                      handleViewDetails({
                        title: "Cozy Studio Apartment",
                        location: "Muhima, Kigali",
                        price: 80000,
                      })
                    }
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-900">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560185009-8b9f5f98a3c2?w=400&h=300&fit=crop"
                  alt="Family House in Kanombe"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-green-600 px-2 py-1 text-xs font-medium text-white">
                  New
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm dark:bg-black/70 dark:text-white">
                  3 bedrooms
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Spacious Family House
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Kanombe, Kigali
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    250,000 RWF
                    <span className="text-xs font-normal text-gray-500">
                      /month
                    </span>
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Parking
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Garden
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    WiFi
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    Security
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <Star size={14} className="fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-xs text-gray-500">(32 reviews)</span>
                  </div>
                  <button
                    onClick={() =>
                      handleViewDetails({
                        title: "Spacious Family House",
                        location: "Kanombe, Kigali",
                        price: 250000,
                      })
                    }
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
              Browse All Properties
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Sign Up Prompt Banner */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
            <Lock size={24} className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">
              Want to see full property details?
            </h3>
            <p className="mt-2 text-blue-100">
              Create a free account to view landlord contact, schedule viewings,
              and apply for properties.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100">
                Sign Up Free
              </button>
              <button className="rounded-lg border border-white px-5 py-2 text-sm font-medium text-white hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600 dark:bg-purple-950 dark:text-purple-400 mb-4">
              <Sparkles size={14} className="mr-1" />
              AI-Powered Assistant
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Meet Your AI Rental Assistant
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              No forms. No complicated searches. Just describe what you want in
              plain English.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white">
                    I need 2 bedroom in Remera, around 200k
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-2 text-gray-800 dark:bg-gray-800 dark:text-white">
                    Found 8 apartments in Remera with 2 bedrooms under 200,000
                    RWF. Would you like to see:
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        → Cheapest first (starting at 150k)
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        → Best rated landlords
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        → Closest to Remera market
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white">
                    Best rated
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-2 text-gray-800 dark:bg-gray-800 dark:text-white">
                    Here are top 5 with 4.5+ star landlords. The best rated is a
                    2BR in Kimironko with 4.8 stars from 12 reviews.
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
                />
                <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white">
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {[
              "Property Search",
              "Budget Advisor",
              "Neighborhood Guide",
              "Move-in Calculator",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-white/50 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-900/50 dark:text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Get Started in 4 Easy Steps
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Sign Up",
                text: "Create your free account in 2 minutes",
              },
              {
                step: "2",
                title: "Add Properties",
                text: "Landlords list properties / Tenants browse",
              },
              {
                step: "3",
                title: "Add Tenants",
                text: "Create digital lease agreements",
              },
              {
                step: "4",
                title: "Get Paid",
                text: "Track payments from your dashboard",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              No hidden fees. No surprises.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Free
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                $0
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Forever free
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> Browse
                  properties
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> Basic
                  search
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> Save
                  favorites
                </li>
              </ul>
              <button className="mt-6 w-full rounded-lg border border-gray-300 py-2 text-sm font-medium dark:border-gray-700">
                Get Started
              </button>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 shadow-lg">
              <div className="rounded-xl bg-white p-6 dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Landlord
                </h3>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  2%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Per transaction
                </p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />{" "}
                    Unlimited properties
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Online
                    payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />{" "}
                    Blacklist check
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Digital
                    leases
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Tax
                    reports
                  </li>
                </ul>
                <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-sm font-medium text-white">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Enterprise
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                Custom
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contact sales
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> 50+
                  properties
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> Dedicated
                  support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> API
                  access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" /> Custom
                  integration
                </li>
              </ul>
              <button className="mt-6 w-full rounded-lg border border-gray-300 py-2 text-sm font-medium dark:border-gray-700">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Real stories from landlords and tenants who found their solution
              with Urugo
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 - Property Seeker */}
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Before Urugo, I used to run kilometers across Kigali with
                brokers. We would walk for hours, they would show me houses that
                didn't match what I wanted, and sometimes after that long run,
                I'd leave without finding anything. It was exhausting and
                frustrating. With Urugo's AI assistant, I described what I
                wanted from my phone, saw photos first, and only visited
                properties I actually liked. I found my apartment in Kimironko
                in just 3 days instead of 3 months!"
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Marie Claire
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Property Seeker, Found home in Kimironko
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <Footprints size={12} />
                  <span>Saved over 50km of unnecessary visits</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Landlord */}
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Urugo saved me hours of tracking payments manually across my 45
                properties. Before, I used notebooks and Excel, and I'd often
                forget who paid and who didn't. Now I see everything on my
                dashboard - green for paid, yellow for grace period, red for
                overdue. The automatic reminders to tenants have reduced late
                payments by 70%."
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Jean Mugisha
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Landlord, 45 properties
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={12} />
                  <span>70% reduction in late payments</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Tenant */}
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Paying rent used to be a nightmare. I had to take time off
                work, travel across town, and hope my landlord was available.
                Sometimes I'd find him closed and waste the whole day. Now I pay
                from my phone in 30 seconds. I get an instant receipt, and I'm
                building credit history for my next rental. No more blocked days
                and travel expenses."
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Alice Uwase
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tenant, Remera
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>Saves 4+ hours every month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional testimonial row - 2 more */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Testimonial 4 - Property Seeker with Broker story */}
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star size={16} className="fill-gray-200 text-gray-200" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "I spent 2 months walking with brokers who promised me 'the
                perfect house' but each time it was a disappointment. One broker
                made me walk from Remera to Kimironko under the sun, only to
                show me a house with no water. Urugo changed everything. I saw
                photos, read landlord reviews, and knew the price before leaving
                my house. I finally found a place in Kanombe that I love,
                without paying a single franc to a broker."
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Eric Nshuti
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Property Seeker, Found home in Kanombe
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <XCircle size={12} />
                  <span>Saved broker fees and countless hours</span>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Landlord with Blacklist story */}
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "The blacklist system saved me from a nightmare tenant. I
                checked a prospective tenant's history and discovered they had
                unpaid rent from their previous landlord. I avoided renting to
                them. Two months later, I heard that same tenant caused problems
                for another landlord. Urugo protected me from losing months of
                rent. Every landlord in Rwanda should use this."
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white">
                  John Doe
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Landlord, Nyarugenge
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <Shield size={12} />
                  <span>Saved from potential 6 months unpaid rent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Simplify Your Rental Management?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Join hundreds of landlords and tenants using Urugo to make renting
            easier. No more endless walks with brokers. No more cash payment
            hassles.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-lg hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="rounded-lg border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10">
              Browse Properties
            </button>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            No credit card required. Free for tenants forever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Urugo
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                AI-powered rental management platform for Rwanda. Making renting
                easier for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Product
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>AI Assistant</li>
                <li>How it works</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Company
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Legal
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Urugo. All rights reserved. Made
              in Rwanda.
            </p>
          </div>
        </div>
      </footer>

      {/* Sign Up Modal */}
      {showSignupModal && selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="mx-4 max-w-md w-full rounded-xl bg-white p-6 dark:bg-gray-900">
            <div className="text-center">
              <Lock size={40} className="mx-auto text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign up to view details
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                You're trying to view details for:
              </p>
              <div className="mt-2 rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-800">
                <p className="font-medium text-gray-900 dark:text-white">
                  {selectedProperty.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedProperty.location}
                </p>
                <p className="font-semibold text-blue-600">
                  {selectedProperty.price.toLocaleString()} RWF/month
                </p>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Create a free account to see landlord contact information,
                schedule viewings, and apply for properties.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-white">
                  Sign Up Free
                </button>
                <button
                  onClick={() => setShowSignupModal(false)}
                  className="flex-1 rounded-lg border border-gray-300 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-300"
                >
                  Cancel
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                Already have an account?{" "}
                <button className="text-blue-600">Sign in</button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
