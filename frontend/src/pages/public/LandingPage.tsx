import ExistingProblems from "../../components/public/LandingPage/problems/ExistingProblems";
import PropertyFeatures from "../../components/public/LandingPage/features/PropertyFeatures";
import Hero from "../../components/public/LandingPage/hero/Hero";
import UrugoFixes from "../../components/public/LandingPage/fixes/UrugoFixes";

function LandingPage() {
  return (
    <div className="w-full  ">
      <Hero />
      <ExistingProblems />
      <UrugoFixes />
      <PropertyFeatures />
    </div>
  );
}

export default LandingPage;
