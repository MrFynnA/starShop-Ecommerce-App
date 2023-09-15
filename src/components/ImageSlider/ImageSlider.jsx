import { useEffect, useState,useMemo } from 'react'
import classes from './ImageSlider.module.css'
import LeftArrow from '../UI/LeftArrow'
import RightArrow from '../UI/RightArrow'

const ImageSlider=(props)=>{
    const[currentIndex,setcurrentIndex]=useState(0)
const sliderImages=props.slider


const slider=useMemo(()=>{
    return sliderImages
},[sliderImages])

useEffect(()=>{

   const sliderInt=setInterval(()=>{
    const nextCond=currentIndex===slider.length-1
    const newIndex=nextCond ? 0 : currentIndex+1
        
        setcurrentIndex(newIndex)
   },5000)
   
   return()=>{
    clearInterval(sliderInt)
   }
},[currentIndex,slider])
const onPreviousSlide=()=>{
const prevCond=currentIndex===0
const newIndex=prevCond? sliderImages.length-1:currentIndex-1
setTimeout(()=>{
    setcurrentIndex(newIndex)
},500)
}
const onNextSlide=()=>{
    const nextCond=currentIndex===sliderImages.length-1
    const newIndex=nextCond ? 0 : currentIndex+1
    setTimeout(()=>{
        setcurrentIndex(newIndex)
    },600)
}
const onPresentSlide=(slideIndex)=>{
    setcurrentIndex(slideIndex)
}
const siderDots=sliderImages.map((items,index)=><div key={index} className={classes.navCircles} style={{color:`${currentIndex===index?'rgb(0, 194, 233)':''}`}} onClick={()=>onPresentSlide(index)}>◉</div>)
return(
    <div className={classes.subParent}>
        <div className={classes.sliderArrows}>
            <span className={classes.LeftArrow} onClick={onPreviousSlide}><LeftArrow/></span><span className={classes.RightArrow} onClick={onNextSlide}><RightArrow/></span>
        </div>
        <div id='slide' className={`${classes.slider}`} style={{backgroundImage:`url(${sliderImages[currentIndex].url})`}}></div>
        <div className={classes.sliderDots}>
            {siderDots}
        </div>
    </div>
)
}
export default ImageSlider