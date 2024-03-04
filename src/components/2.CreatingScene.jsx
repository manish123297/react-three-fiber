 import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import  * as THREE from "three"
 const Scene=()=>{
    //React fiber hooks we can use only inside the Canvas component.and since here Scene component is
    //  inside Canvas component hence we can use here the hooks. 
    const cubeRef=useRef();//we are using this useRef so that when mesh-2(boxGeometry) will rerender 
    // because of animation in that mesh-1(planeGeometry) should not render. and use cubeRef.current to get
    //the actual elememt .
    const planeRef=useRef();
    useFrame(()=>{
        //this arrow function will run for each frame render(how many times it renders that depends on device),
        // so here we can add the animation if any we want
        cubeRef.current.rotation.y+=0.02;//in the first frame cube rotate 0.02  then in next frame 0.02 
        // and so on in this way we will get the animation . 
        planeRef.current.rotation.x+=0.02;




    })

    return <>
    <mesh position-x={-2} ref={planeRef}>
      <planeGeometry args={[2,2]}></planeGeometry>
      {/* args prop is to pass the length and width of the plane. */}
       <meshNormalMaterial color="orange" side={THREE.DoubleSide}/>
       {/* side prop is passed to tell that we want to render both side of the plane .by default 
       "side" props value is FrontSide */}
     </mesh>
     <mesh ref={cubeRef} position={[2,0,0]} rotation-y={Math.PI*0.25}>
      <boxGeometry ></boxGeometry>
       <meshNormalMaterial color="green"/>
     </mesh>
    </>



 }
 export default Scene;