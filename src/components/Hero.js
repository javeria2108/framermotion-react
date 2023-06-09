import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import PlanetOne from '../components/images/planet.svg';
import PlanetTwo from '../components/images/planet-2.svg';
import PlanetThree from '../components/images/planet-3.svg';
import PlanetFour from '../components/images/planet-4.svg';
const Section=styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background:#058240;
`
const Container=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height:100vh;
padding: 3rem calc((100vw-1300px)/2);

@media screen and (max-width: 786px){
    grid=grid-template-columns: 1fr
}
`
const LeftCol=styled.div`
display:flex;
color:#ADCACB;
flex-direction:column;
justify-content: center;
align-items:flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom:0.5rem;
    font-size:2rem;
}
p{
    margin:2rem 0;
    font-size:4rem;
    line-height: 1.1;
}
`
const Button=styled(motion.button)`
padding: 1rem 3rem;
font-size:1rem;
border: 2px solid #ADCACB;
border-radius:15px;
outline:none;
cursor:pointer;
background:transparent;

color:#ADCACB



`
const Image=styled(motion.img)`
    position:absolute;
    width:100%;
    height:100%;
    max-width:200px;
    max-height:200px;
    padding:10px;


`
const RightCol=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
position:relative;
${Image}:nth-child(1){
    top:1px;
    left:10px;
}
${Image}:nth-child(2){
    top:200px;
    left:-50px;
}
${Image}:nth-child(3){
    top:400px;
    left:50px;
}
${Image}:nth-child(4){
    top:200px;
    left:200px;
}
`
const Hero = () => {
    const fadeLeft={
        hidden:{opacity:0, x: -100},
        visible:{opacity:1,x:0}
    }
  return (
    <Section>
        <Container>
            <LeftCol>
                <motion.h1 initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}>Welcome to space</motion.h1>
                <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration:1}}>
                    Journey to Mars
                </motion.p>
                <Button
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95 , backgroundColor:'darkgreen'}}
                initial={{opacity:0}}
                animate={{opacity:1,transition:1.5}}
                >
                    Explore</Button>
            </LeftCol>
            <RightCol>
                <Image src={PlanetOne} alt="planet" 
                whileTap={{scale:0.9}}
                drag={true}
                dragConstraints={{left:0,right:250,top:0,bottom:50}}
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0,transition:{duration:1}}}
                />
                <Image src={PlanetTwo} alt="planet"
                whileTap={{scale:0.9}}
                drag={true}
                dragConstraints={{left:50,right:0,top:0,bottom:50}}
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0,transition:{duration:1}}}/>
                <Image src={PlanetThree} alt="planet"
                whileTap={{scale:0.9}}
                drag={true}
                dragConstraints={{left:0,right:250,top:0,bottom:50}}
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0,transition:{duration:1}}}/>
                <Image src={PlanetFour} alt="planet" 
                whileTap={{scale:0.9}}
                drag={true}
                dragConstraints={{left:0,right:0,top:0,bottom:0}}
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0,transition:{duration:1}}}/>

            </RightCol>
        </Container>
    </Section>
  )
}

export default Hero