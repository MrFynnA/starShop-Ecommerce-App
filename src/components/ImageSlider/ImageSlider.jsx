import { useEffect, useState,useMemo } from 'react'
import classes from './ImageSlider.module.css'
import LeftArrow from '../UI/LeftArrow'
import RightArrow from '../UI/RightArrow'

const ImageSlider=(props)=>{
    const[currentIndex,setcurrentIndex]=useState(0)
    // const[index,setIndex]=useState()
    // const[direction,setDirection]=useState(0)
const sliderImages=props.slider
// console.log(sliderImages[currentIndex].url)

const slider=useMemo(()=>{
    return sliderImages
},[sliderImages])

// const slide=document.getElementById('slide')
useEffect(()=>{
// if(currentIndex===3){
//     return
// }
// slide.addEventListener('mouseenter',()=>{
//     return
// })

   const sliderInt=setInterval(()=>{
    const nextCond=currentIndex===slider.length-1
    const newIndex=nextCond ? 0 : currentIndex+1
    // setIndex(newIndex)
    // setDirection('fade')
    // setTimeout(()=>{
        
        setcurrentIndex(newIndex)
    // },1000)
   },5000)
   
   return()=>{
    clearInterval(sliderInt)
   }
},[currentIndex,slider])
const onPreviousSlide=()=>{
const prevCond=currentIndex===0
const newIndex=prevCond? sliderImages.length-1:currentIndex-1
// setIndex(newIndex)
// setDirection('left')
setTimeout(()=>{
    setcurrentIndex(newIndex)
},500)
}
const onNextSlide=()=>{
    const nextCond=currentIndex===sliderImages.length-1
    const newIndex=nextCond ? 0 : currentIndex+1
    // setIndex(newIndex)
    // setDirection('right')
    setTimeout(()=>{
        setcurrentIndex(newIndex)
    },600)
}
const onPresentSlide=(slideIndex)=>{
    setcurrentIndex(slideIndex)
}
// let fadeClasses;
// const fadeSliderLeft=currentIndex===index && direction==='left'
// const fadeSliderRight=currentIndex===index && direction==='right'
// const fadeSliderIN=currentIndex===index && direction==='fade'
// if(fadeSliderLeft){
//     fadeClasses=classes.fadeSlideLeft
// }else if(fadeSliderRight){
//     fadeClasses=classes.fadeSlideRight
// }else if(fadeSliderIN){
//     fadeClasses=classes.fadeInSlide
// }
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