import  * as THREE from "three"
import { extend ,useFrame,useThree,useLoader} from "@react-three/fiber" ;
import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useAnimations } from "@react-three/drei";
import { useEffect } from "react";

 const Model=()=>{
    const model=useLoader(GLTFLoader,"./model/dog.glb")//this is how we can load models using GLTFLoader
    //here model contains all the information of 
    // console.log(model)
    const animations=useAnimations(model.animations,model.scene)//useAnikmations take two parameter the
    //type of animation and scene in which we want to apply animations
   //  here the animations object  we have actions which contains all the type of animations to use
   //  .to use it we need to write like thid animations.actions.typeOfanimation.play() 
   useEffect(()=>{
//   animations.actions.Writing.play()
  animations.actions.ClickedOn.play()

   },[])
    return <>
    <ambientLight intensity={6}></ambientLight> 
    {/* ambient light us added so that light can distribute in scene uniformly */}
    <primitive object={model.scene}></primitive> 
    {/* this is how we can add models in the scene using the primitive tag */}
    </>

 }
 export default Model;