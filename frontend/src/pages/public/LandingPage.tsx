import ExistingProblems from "../../components/public/LandingPage/problems/ExistingProblems";
import Hero from "../../components/public/LandingPage/hero/Hero";
import UrugoFixes from "../../components/public/LandingPage/fixes/UrugoFixes";
import ProcessFeaturesLandLord from "../../components/public/LandingPage/features/ProcessFeaturesLandLord";
import ProcessFeaturesTenants from "../../components/public/LandingPage/features/ProcessFeaturesTenants";

function LandingPage() {
  return (
    <div className="w-full  ">
      <Hero />
      <ExistingProblems />
      <UrugoFixes />
      <ProcessFeaturesLandLord />
      <ProcessFeaturesTenants />
    </div>
  );
}

export default LandingPage;
