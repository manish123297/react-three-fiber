import { useFrame,extend,useThree } from "@react-three/fiber";
import { useRef } from "react";
import  * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//here we learnt tthat how we can add the orbotControl
extend({OrbitControlsTag:OrbitControls})//extend is used to  create the component(declarative tag
// similar like mesh,meshNormalMaterial etc) from the   third party object 
// declarative tag or component are those componenets which we can use without importing (but we have to
// install the npm package of that library but don't have to import before using it as we do for the 
//useRef,extend,useFrame etc.)
 const ControlingOrbit=()=>{
    const cubeRef=useRef();
    const planeRef=useRef();
    const {gl,camera}=useThree()//This hook gives us access to the state model which contains the
    //  default renderer, the scene, our camera, and so on. It also gives us the current size of the
    //  canvas in screen and viewport coordinates.
    //The hook is reactive, if we resize the browser for instance, we get fresh measurements,
    //  same applies to any of the state objects that may change.
    // gl->webGl Rendered 
    console.log(useThree())
    useFrame(()=>{
        //this arrow function will run for each frame render(how many times it renders that depends on device),
        // so here we can add the animation if any we want
        cubeRef.current.rotation.y+=0.02;
        planeRef.current.rotation.x+=0.02;
        cubeRef.current.rotation.x+=0.02;
        planeRef.current.rotation.y+=0.02;
    })

    return <>
    <orbitControlsTag args={[camera,gl.domElement]}/>
    {/* here similar to the mesh, orbitControlstag also takes the args .order in which the elements will be 
    passed in the args prop of orbitControl see the the documentation. */}
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
 export default ControlingOrbit;