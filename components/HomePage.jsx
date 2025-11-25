'use client'

import GradientText from './GradientText';
import FuzzyText from './FuzzyText';



export default function HomePage() {
  return (
    <div className="text-center  text-white z-3">
      <GradientText className="text-8xl font-bold mb-4" showBorder={false} colors={["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"]} animationSpeed={30}>Tord Lønn Bonnerud</GradientText>
      {/* <p className="text-3xl text-[#E3B2FF]">Welcome to my portfolio</p> */}
        <div className="mt-10 relative text-center justify-center items-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FuzzyText 
                baseIntensity={0.1} 

                // className="mt-10 text-2xl text-gray-300 cursor-pointer"
                className="mt-10 text-center mx-auto cursor-pointer w-fit"
                fontSize={28}>
                Explore my projects and skills!
            </FuzzyText>
            <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>
        </div>
    </div>
  );
}