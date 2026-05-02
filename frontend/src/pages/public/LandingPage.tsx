import ExistingProblems from "../../components/public/ExistingProblems/ExistingProblems";
import PropertyFeatures from "../../components/public/Features/PropertyFeatures";
import Hero from "../../components/public/hero/Hero";
import UrugoFixes from "../../components/public/UrugoFixes/UrugoFixes";

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
