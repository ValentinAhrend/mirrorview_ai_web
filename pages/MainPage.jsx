import Traffic2 from "../data/traffic2.png";
import Traffic1 from "../data/traffic1.png";
import Traffic3 from "../data/traffic3.png";
import Car from "../data/image.svg";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import gsap from "gsap";
import { amethyst, celadon, chrysler_blue, honeydew, tea_green } from "../style/theme";

const MainPage = () => {
    
    useEffect(()=>{
        new Promise(x => setTimeout(x, 109)).then(x => {
            const path = document.querySelector('.infinity');
            const path2 = document.querySelector('.infinity2');
            const path3 = document.querySelector('.infinity3');
            const path4 = document.querySelector('.infinity4');
            const path5 = document.querySelector('.infinity5');
            const path6 = document.querySelector('.infinity6');
            const path7 = document.querySelector('.infinity7');
            const circle = document.querySelector('.circle');
            const circle1 = document.querySelector('.circle1');
            const circle2 = document.querySelector('.circle2');
            const circle3 = document.querySelector('.circle3');
            const circle4 = document.querySelector('.circle4');
            const circle5 = document.querySelector('.circle5');
            const circle6 = document.querySelector('.circle6');
            const circle7 = document.querySelector('.circle7');
            const circle8 = document.querySelector('.circle8');
            const circle9 = document.querySelector('.circle9');
            const circle10 = document.querySelector('.circle10');
            const circle11 = document.querySelector('.circle11');

            const circle12 = document.querySelector('.circle12');
            const circle13 = document.querySelector('.circle13');
            const circle14 = document.querySelector('.circle14');

            const circle15 = document.querySelector('.circle15');
            const circle16 = document.querySelector('.circle16');
            const circle17 = document.querySelector('.circle17');

            const circle18 = document.querySelector('.circle18');
            const circle19 = document.querySelector('.circle19');
            const circle20 = document.querySelector('.circle20');
            // Create an object that gsap can animate
            const val = { distance: 0 };
            const val1 = { distance: 0 };
            const val2 = { distance: 0 };

            const val3 = { distance: path2.getTotalLength() };
            const val4 = { distance: path2.getTotalLength() };
            const val5 = { distance: path2.getTotalLength() };

            const val6 = { distance: 0 };
            const val7 = { distance: 0 };
            const val8 = { distance: 0 };

            const val9 = { distance: path4.getTotalLength() };
            const val10 = { distance: path4.getTotalLength() };
            const val11 = { distance: path4.getTotalLength() };

            const val12 = { distance: 0 };
            const val13 = { distance: 0 };
            const val14 = { distance: 0 };

            const val15 = { distance: 0 };
            const val16 = { distance: 0 };
            const val17 = { distance: 0 };

            const val18 = { distance: 0 };
            const val19 = { distance: 0 };
            const val20 = { distance: 0 };
            // Create a tween
            gsap.to(val, {
              // Animate from distance 0 to the total distance
              distance: path.getTotalLength(),
              // Loop the animation
              repeat: -1,
              // Make the animation lasts 5 seconds
              duration: 5,
              delay: 0,
              repeatDelay: 20,
              // Function call on each frame of the animation
              onUpdate: () => {
                // Query a point at the new distance value
                const point = path.getPointAtLength(val.distance);
                // Update the circle coordinates
                circle.setAttribute('cx', point.x);
                circle.setAttribute('cy', point.y);

              }
            });
            gsap.to(val1, {
                // Animate from distance 0 to the total distance
                distance: path.getTotalLength(),
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 4,
                delay: 7,
                repeatDelay: 10,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path.getPointAtLength(val1.distance);
                  // Update the circle coordinates
                  circle1.setAttribute('cx', point.x);
                  circle1.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val2, {
                // Animate from distance 0 to the total distance
                distance: path.getTotalLength(),
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 10,
                delay: 9,
                repeatDelay: 30,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path.getPointAtLength(val2.distance);
                  // Update the circle coordinates
                  circle2.setAttribute('cx', point.x);
                  circle2.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val3, {
                // Animate from distance 0 to the total distance
                distance: 0,
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 6,
                delay: 3,
                repeatDelay: 20,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path2.getPointAtLength(val3.distance);
                  // Update the circle coordinates
                  circle3.setAttribute('cx', point.x);
                  circle3.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val4, {
                // Animate from distance 0 to the total distance
                distance: 0,
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 10,
                delay: 5,
                repeatDelay: 5,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path2.getPointAtLength(val4.distance);
                  // Update the circle coordinates
                  circle4.setAttribute('cx', point.x);
                  circle4.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val5, {
                // Animate from distance 0 to the total distance
                distance: 0,
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 15,
                delay: 6,
                repeatDelay: 4,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path2.getPointAtLength(val5.distance);
                  // Update the circle coordinates
                  circle5.setAttribute('cx', point.x);
                  circle5.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val6, {
                // Animate from distance 0 to the total distance
                distance: path3.getTotalLength(),
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 10,
                delay: 0,
                repeatDelay: 2,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path3.getPointAtLength(val6.distance);
                  // Update the circle coordinates
                  circle6.setAttribute('cx', point.x);
                  circle6.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val7, {
                  // Animate from distance 0 to the total distance
                  distance: path.getTotalLength(),
                  // Loop the animation
                  repeat: -1,
                  // Make the animation lasts 5 seconds
                  duration: 5,
                  delay: 7,
                  repeatDelay: 10,
                  // Function call on each frame of the animation
                  onUpdate: () => {
                    // Query a point at the new distance value
                    const point = path3.getPointAtLength(val7.distance);
                    // Update the circle coordinates
                    circle7.setAttribute('cx', point.x);
                    circle7.setAttribute('cy', point.y);
    
                  }
                });
                gsap.to(val8, {
                  // Animate from distance 0 to the total distance
                  distance: path.getTotalLength(),
                  // Loop the animation
                  repeat: -1,
                  // Make the animation lasts 5 seconds
                  duration: 9,
                  delay: 9,
                  repeatDelay: 3,
                  // Function call on each frame of the animation
                  onUpdate: () => {
                    // Query a point at the new distance value
                    const point = path3.getPointAtLength(val8.distance);
                    // Update the circle coordinates
                    circle8.setAttribute('cx', point.x);
                    circle8.setAttribute('cy', point.y);
    
                  }
                });

              gsap.to(val9, {
                // Animate from distance 0 to the total distance
                distance: 0,
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 6,
                delay: 0,
                repeatDelay: 20,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path4.getPointAtLength(val9.distance);
                  // Update the circle coordinates
                  circle9.setAttribute('cx', point.x);
                  circle9.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val10, {
                // Animate from distance 0 to the total distance
                distance: 0,
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 4,
                delay: 6,
                repeatDelay: 10,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path4.getPointAtLength(val10.distance);
                  // Update the circle coordinates
                  circle10.setAttribute('cx', point.x);
                  circle10.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val11, {
                // Animate from distance 0 to the total distance
                distance: 0,
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 5,
                delay: 2,
                repeatDelay: 4,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path4.getPointAtLength(val11.distance);
                  // Update the circle coordinates
                  circle11.setAttribute('cx', point.x);
                  circle11.setAttribute('cy', point.y);
  
                }
              });

              gsap.to(val12, {
                // Animate from distance 0 to the total distance
                distance: path5.getTotalLength(),
                // Loop the animation
                repeat: -1,
                // Make the animation lasts 5 seconds
                duration: 4,
                delay: 0,
                repeatDelay: 2,
                // Function call on each frame of the animation
                onUpdate: () => {
                  // Query a point at the new distance value
                  const point = path5.getPointAtLength(val12.distance);
                  // Update the circle coordinates
                  circle12.setAttribute('cx', point.x);
                  circle12.setAttribute('cy', point.y);
  
                }
              });
              gsap.to(val13, {
                  // Animate from distance 0 to the total distance
                  distance: path5.getTotalLength(),
                  // Loop the animation
                  repeat: -1,
                  // Make the animation lasts 5 seconds
                  duration: 5,
                  delay: 2,
                  repeatDelay: 10,
                  // Function call on each frame of the animation
                  onUpdate: () => {
                    // Query a point at the new distance value
                    const point = path5.getPointAtLength(val13.distance);
                    // Update the circle coordinates
                    circle13.setAttribute('cx', point.x);
                    circle13.setAttribute('cy', point.y);
    
                  }
                });
                gsap.to(val14, {
                  // Animate from distance 0 to the total distance
                  distance: path5.getTotalLength(),
                  // Loop the animation
                  repeat: -1,
                  // Make the animation lasts 5 seconds
                  duration: 9,
                  delay: 8,
                  repeatDelay: 3,
                  // Function call on each frame of the animation
                  onUpdate: () => {
                    // Query a point at the new distance value
                    const point = path5.getPointAtLength(val14.distance);
                    // Update the circle coordinates
                    circle14.setAttribute('cx', point.x);
                    circle14.setAttribute('cy', point.y);
    
                  }
                });
                gsap.to(val15, {
                    // Animate from distance 0 to the total distance
                    distance: path6.getTotalLength(),
                    // Loop the animation
                    repeat: -1,
                    // Make the animation lasts 5 seconds
                    duration: 5,
                    delay: 0,
                    repeatDelay: 2,
                    // Function call on each frame of the animation
                    onUpdate: () => {
                      // Query a point at the new distance value
                      const point = path6.getPointAtLength(val15.distance);
                      // Update the circle coordinates
                      circle15.setAttribute('cx', point.x);
                      circle15.setAttribute('cy', point.y);
      
                    }
                  });
                  gsap.to(val16, {
                      // Animate from distance 0 to the total distance
                      distance: path6.getTotalLength(),
                      // Loop the animation
                      repeat: -1,
                      // Make the animation lasts 5 seconds
                      duration: 7,
                      delay: 7,
                      repeatDelay: 10,
                      // Function call on each frame of the animation
                      onUpdate: () => {
                        // Query a point at the new distance value
                        const point = path5.getPointAtLength(val16.distance);
                        // Update the circle coordinates
                        circle16.setAttribute('cx', point.x);
                        circle16.setAttribute('cy', point.y);
        
                      }
                    });
                    gsap.to(val17, {
                      // Animate from distance 0 to the total distance
                      distance: path5.getTotalLength(),
                      // Loop the animation
                      repeat: -1,
                      // Make the animation lasts 5 seconds
                      duration: 9,
                      delay: 9,
                      repeatDelay: 3,
                      // Function call on each frame of the animation
                      onUpdate: () => {
                        // Query a point at the new distance value
                        const point = path5.getPointAtLength(val17.distance);
                        // Update the circle coordinates
                        circle17.setAttribute('cx', point.x);
                        circle17.setAttribute('cy', point.y);
        
                      }
                    });
            
                    gsap.to(val18, {
                        // Animate from distance 0 to the total distance
                        distance: path7.getTotalLength(),
                        // Loop the animation
                        repeat: -1,
                        // Make the animation lasts 5 seconds
                        duration: 5,
                        delay: 0,
                        repeatDelay: 2,
                        // Function call on each frame of the animation
                        onUpdate: () => {
                          // Query a point at the new distance value
                          const point = path7.getPointAtLength(val15.distance);
                          // Update the circle coordinates
                          circle18.setAttribute('cx', point.x);
                          circle18.setAttribute('cy', point.y);
          
                        }
                      });
                      gsap.to(val19, {
                          // Animate from distance 0 to the total distance
                          distance: path7.getTotalLength(),
                          // Loop the animation
                          repeat: -1,
                          // Make the animation lasts 5 seconds
                          duration: 7,
                          delay: 7,
                          repeatDelay: 10,
                          // Function call on each frame of the animation
                          onUpdate: () => {
                            // Query a point at the new distance value
                            const point = path7.getPointAtLength(val19.distance);
                            // Update the circle coordinates
                            circle19.setAttribute('cx', point.x);
                            circle19.setAttribute('cy', point.y);
            
                          }
                        });
                        gsap.to(val20, {
                          // Animate from distance 0 to the total distance
                          distance: path7.getTotalLength(),
                          // Loop the animation
                          repeat: -1,
                          // Make the animation lasts 5 seconds
                          duration: 9,
                          delay: 9,
                          repeatDelay: 3,
                          // Function call on each frame of the animation
                          onUpdate: () => {
                            // Query a point at the new distance value
                            const point = path7.getPointAtLength(val20.distance);
                            // Update the circle coordinates
                            circle20.setAttribute('cx', point.x);
                            circle20.setAttribute('cy', point.y);
            
                          }
                        });
        });
    }, []);
    

    return <div class={"mainpage"}>
        <div class={"road-section"}>
        <img class={"road-1"} src={Traffic2}></img>
        <img class={"road-2"} src={Traffic1}></img>
        <img class={"road-3"} src={Traffic3}></img>
        <div class={"car-box"}></div>
        <div class={"car-x"}>
            <svg width="218" height="555" viewBox="0 0 218 555" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 549.5H123C123 549.5 167 549 189.5 526C212 503 212 476.5 212 476.5V306V117.5V0" stroke="transparent" vector-effect="non-scaling-stroke" class="infinity"/>
                <circle stroke="white" r="5" cx="0" cy="0" fill="#5603AD" class="circle" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#8367C7" class="circle1" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#B3E9C7" class="circle2" />
            </svg>
        </div>
        <div className="car-y">
        <svg width="218" height="555" viewBox="0 0 218 555" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 549.5H123C123 549.5 177.317 549.5 194 530.5C210.683 511.5 212 476.5 212 476.5V306V117.5V0" stroke="transparent" vector-effect="non-scaling-stroke" class="infinity2"/>
                <circle stroke="white" r="5" cx="0" cy="0" fill="#C2F8CB" class="circle3" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#F0FFF1" class="circle4" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#5603AD" class="circle5" />
            </svg>
        </div>
        <div className="car-z">
        <svg width="358" height="177" viewBox="0 0 358 177" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.5 150.5C-0.5 150.5 54.1037 151.177 76.5 129.5C93.071 113.461 99 101 101.5 76C104 51 105.755 45.3805 119 33C134.813 18.2185 151.354 20.3643 173 20.5C194.075 20.6321 209.684 19.07 225.5 33C239.337 45.187 243.5 54 245 76C246.5 98 252.5 109 268.5 129.5C284.5 150 333.5 150 333.5 150H357.5" stroke="transparent" vector-effect="non-scaling-stroke" class="infinity3"/>
            <circle stroke="white" r="5" cx="0" cy="0" fill="#C2F8CB" class="circle6" />
            <circle stroke="white" r="5" cx="0" cy="0" fill="#F0FFF1" class="circle7" />
            <circle stroke="white" r="5" cx="0" cy="0" fill="#5603AD" class="circle8" />
        </svg>
        </div>
        <div className="car-a">
        <svg width="358" height="153" viewBox="0 0 358 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 147C2 147 47.075 148.542 65 130.5C77.3805 118.039 82.5 109 83.5 89.5C84.5 70 91.012 51.8906 107.5 36C126.351 17.8318 144.821 14.8483 171 14.5C199.464 14.1213 219.958 17.7857 240 38C255.565 53.6985 262.5 72 263.5 89.5C264.5 107 268.193 118.294 280.5 130.5C295.545 145.422 332.5 146 332.5 146H360.5" stroke="transparent" vector-effect="non-scaling-stroke" class="infinity4"/>
                <circle stroke="white" r="5" cx="0" cy="0" fill="#B3E9C7" class="circle9" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#8367C7" class="circle10" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#C2F8CB" class="circle11" />
            </svg>
        </div>
        <div className="car-b">
        <svg width="1371" height="478" viewBox="0 0 1371 478" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1371 141H377.499C377.499 141 342.09 139.983 326.999 126C314.055 114.006 308.999 102.5 307.999 85.0001C306.999 67.5001 301.172 47.7329 284.999 32.0001C263.926 11.5001 219.5 11.5001 219.5 11.5001H164H108C101.5 11.5001 65.5324 12.0002 44.4995 34.5001C23.4667 57 22.4995 87.5001 22.4995 87.5001V140.5V478" stroke="transparent" vector-effect="non-scaling-stroke" class="infinity5"/>
                <circle stroke="white" r="5" cx="0" cy="0" fill="#B3E9C7" class="circle12" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#8367C7" class="circle13" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#C2F8CB" class="circle14" />
</svg>
        </div>
        <div className="car-b">
        <svg width="1371" height="478" viewBox="0 0 1371 478" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39 471.013V85.0131C39 85.0131 39 59.0131 57 43.5131C75 28.0131 110 29.0131 110 29.0131H224C224 29.0131 257.5 29.0131 271 43.0131C284.5 57.0131 290.5 67.0131 290.5 84.5131C290.5 102.013 292 118.013 313.5 138.513C335 159.013 376 159.013 376 159.013H486.5C486.5 159.013 515 159.013 524 172.013C533 185.013 533 201.513 533 201.513V544.513" stroke="transparent" vector-effect="non-scaling-stroke" class="infinity6"/>
            <circle stroke="white" r="5" cx="0" cy="0" fill="#C2F8CB" class="circle15" />
            <circle stroke="white" r="5" cx="0" cy="0" fill="#F0FFF1" class="circle16" />
            <circle stroke="white" r="5" cx="0" cy="0" fill="#5603AD" class="circle17" />
</svg>

        </div>
        <div className="car-b">
        <svg width="1371" height="478" viewBox="0 0 1371 478" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M551.5 533.5V193C551.5 193 553.574 173.976 561.5 166C571.548 155.888 597 157.5 597 157.5H1388" stroke="transparent"  vector-effect="non-scaling-stroke" class="infinity7"/>
                <circle stroke="white" r="5" cx="0" cy="0" fill="#5603AD" class="circle18" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#8367C7" class="circle19" />
                <circle stroke="white" r="5" cx="0" cy="0" fill="#B3E9C7" class="circle20" />
</svg>

        </div>
        </div>
        
        <div class={"main-container"}>
        <div class={"main-sector"} style={{"background": "#FFFFFF33", "backdropFilter": "blur(8px)", "borderRadius": "12px"}}>
            <p>{"Digitale Verkehrsanalyse mit Objekt-Detektion und Klassifizierung"}</p>
            <div style={{"marginLeft": "2px", "fontFamily": "Arial", "fontSize": "16px", "color": "#AAA"}}><span><span>{"Powered by "}</span><span style={{"color": "gray", "textDecoration": "underline", "fontFamily": "Arial", "cursor": "pointer"}}>{"Adaptive Algorithmen"}</span><span>{" und "}</span><span style={{"color": "gray", "textDecoration": "underline", "fontFamily": "Arial", "cursor": "pointer"}}>{"Künstlicher Intelligenz"}</span></span></div>
            <div style={{"display": "flex", "gap": "16px", "marginTop": "38px"}}>
                {["Self-hosted", "Einmalige Zahlung", "Individuelle Integration", "Anpassungen"].map((element,x)=>{
                    let colors = [chrysler_blue, amethyst, celadon, tea_green, honeydew];
                    let color = colors[x]
                    let cc = x < 2 ? "white" : "black"
                    return <div class="tag-front" style={{"fontSize": "16px", "padding": "8px", "cursor": "pointer", "fontFamily": "Arial", "borderRadius": "3px", "background": color + "FF", "color": cc, "transition": "0.3333s"}}>{element}</div>
                })}
            </div>
        </div>
        </div>
        
    </div>
};
export default MainPage;