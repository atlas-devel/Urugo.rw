function LandingPageFooter() {
  return (
    <div className="bg-gray-50 w-full p-6 pb-0 lg:px-30 md:pt-10 max-w-500 mx-auto ">
      <div className="border-b border-gray-300 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Urugo</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI-powered rental management platform for Rwanda. Making renting
            easier for everyone.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                AI Assistant
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                How it works
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 py-6  ">
        © 2026 Urugo. All rights reserved. Made in Rwanda.
      </p>
    </div>
  );
}

export default LandingPageFooter;
