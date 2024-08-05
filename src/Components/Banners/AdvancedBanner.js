import React from "react";
import './AdvancedBanner.css';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import foregroundimage from '../../Images/mountains1.png';
import backgroundimage from '../../Images/sky1.png';

const AdvancedBannerTop = () => {
  return (
    <div className = 'parallax-image-container'> 
    <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="parallax-container" >
      <ParallaxBannerLayer image= {foregroundimage} speed={-15} style={{zIndex:2}} className="foreground" />
        <ParallaxBannerLayer style={{zIndex:2}} scale={[0,1,'easeOutCubic']} children= {[<div className="overlay-content">
      <h1 className="text">Hi, I'm Cayn Williard</h1>
      </div>]}>
        </ParallaxBannerLayer>
      <ParallaxBannerLayer image= {backgroundimage} speed={-30} style={{zIndex:1}} className="background"/>
  </ParallaxBanner>
  </div>
  );
};

/**const AdvancedBannerTop = () => {
   const background: ParallaxBannerLayer = {
      image:backgroundimage,
      translateY: [0, 50],
      opacity: [1, 0.3],
      scale: [1.05, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true

    };
  
    const headline: ParallaxBannerLayer = {
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
  
    const foreground: ParallaxBannerLayer = {
      image: foregroundimage,
      translateY: [0, 15],
      scale: [1, 1.1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true
    };
  
    const gradientOverlay: ParallaxBannerLayer = {
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
}; */

export default AdvancedBannerTop;