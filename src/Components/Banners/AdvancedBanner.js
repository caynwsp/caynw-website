import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import foregroundimage from '../../Images/mountains-foreground.jpg';
import backgroundimage from '../../Images/mountains-background.jpg';

const AdvancedBannerTop = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: backgroundimage, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1]"
    />
  );
};
  
  /** const background: BannerLayer = {
      image:backgroundimage,
      translateY: [0, 50],
      opacity: [1, 0.3],
      scale: [1.05, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true

    };
  
    const headline: BannerLayer = {
      translateY: [0, 30],
      scale: [1, 1.05, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="inset center">
          <h1 className="headline white">Hello World!</h1>
        </div>
      )
    };
  
    const foreground: BannerLayer = {
      image: foregroundimage,
      translateY: [0, 15],
      scale: [1, 1.1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true
    };
  
    const gradientOverlay: BannerLayer = {
      opacity: [0, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: <div className="gradient inset" />
    };
  
    return (
      <div className= 'container-body'>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="aspect-[2/1]"
      />
    </div>
    );
  };
**/
  export default AdvancedBannerTop;