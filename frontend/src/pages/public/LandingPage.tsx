import ExistingProblems from "../../components/public/LandingPage/problems/ExistingProblems";
import Hero from "../../components/public/LandingPage/hero/Hero";
import UrugoFixes from "../../components/public/LandingPage/fixes/UrugoFixes";
import ProcessFeaturesLandLord from "../../components/public/LandingPage/features/ProcessFeaturesLandLord";
import ProcessFeaturesTenants from "../../components/public/LandingPage/features/ProcessFeaturesTenants";
import AvailablePropeties from "../../components/public/LandingPage/properties/AvailablePropeties";

function LandingPage() {
  return (
    <div className="w-full  ">
      <Hero />
      <ExistingProblems />
      <UrugoFixes />
      <ProcessFeaturesLandLord />
      <ProcessFeaturesTenants />
      <AvailablePropeties />
    </div>
  );
}

export default LandingPage;
