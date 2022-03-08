import React from 'react';
import { GrReactjs,GrNode } from 'react-icons/gr';
import { BsBootstrap} from 'react-icons/bs';
import { FaGit,FaUbuntu,FaWindows,FaGithub,FaFigma} from 'react-icons/fa';

import { SiMongodb} from 'react-icons/si';
import { IoLogoJavascript,IoLogoHtml5,IoLogoCss3,IoLogoSass } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Technologies</PricingHeading>
          <PricingContainer>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  < GrReactjs/>
                </PricingCardIcon>
                <PricingCardPlan>React.js</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoLogoJavascript/>
                </PricingCardIcon>
                <PricingCardPlan>Javascript</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>


            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoLogoHtml5/>
                </PricingCardIcon>
                <PricingCardPlan>HTML5</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoLogoCss3/>
                </PricingCardIcon>
                <PricingCardPlan>CSS3</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoLogoSass />
                </PricingCardIcon>
                <PricingCardPlan>SASS</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaGithub/>
                </PricingCardIcon>
                <PricingCardPlan>Github</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>


            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiMongodb />
                </PricingCardIcon>
                <PricingCardPlan>MongoDB</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>



            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GrNode />
                </PricingCardIcon>
                <PricingCardPlan>Node.js</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsBootstrap />
                </PricingCardIcon>
                <PricingCardPlan>Bootstrap</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaGit/>
                </PricingCardIcon>
                <PricingCardPlan>Git</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaUbuntu />
                </PricingCardIcon>
                <PricingCardPlan>Ubuntu</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaWindows />
                </PricingCardIcon>
                <PricingCardPlan>Microsoft</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to=''>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaFigma />
                </PricingCardIcon>
                <PricingCardPlan>Figma</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>

           {/*  <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> */}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
