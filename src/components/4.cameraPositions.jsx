import { useFrame,extend,useThree } from "@react-three/fiber";
import { useRef } from "react";
import  * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//here we will learn different way to place camera and camera properties
// 1.we can pass camera object having all the required properties in
//  <Canvas camera={{fov:45,near:0.1,far:100,position:[2,2,5]}}> itself.fov(angle)-filed of view 
//2.camera properties we can change using useThree hook also as it also returns camera object. 
//3.inside the useFrame hook which gives access to two objects "state" and "delta".in state object we
// have camera object
extend({OrbitControlsTag:OrbitControls})
 const CameraPositions=()=>{
    const cubeRef=useRef();
    const planeRef=useRef();
    const {gl,camera}=useThree()
    // camera.position.z=20
    useFrame((state,delta)=>{
        cubeRef.current.rotation.y+=0.02;
        planeRef.current.rotation.x+=0.02;
        // console.log(state,delta)
        // state.camera.position.x=Math.sin(state.clock.elapsedTime)
        // state.camera.position.y=Math.sin(state.clock.elapsedTime)*1.5
        // state.camera.rotation.z=1-Math.sin(state.clock.elapsedTime)


    })

    return <>
    <orbitControlsTag args={[camera,gl.domElement]}/>
    <mesh position-x={-2} ref={planeRef}>
      <planeGeometry args={[2,2]}></planeGeometry>
       <meshNormalMaterial color="orange" side={THREE.DoubleSide}/>
     </mesh>
     <mesh ref={cubeRef} position={[2,0,0]} rotation-y={Math.PI*0.25}>
      <boxGeometry ></boxGeometry>
       <meshNormalMaterial color="green"/>
     </mesh>
    </>

 }
 export default CameraPositions;