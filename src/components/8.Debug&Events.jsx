import  * as THREE from "three"
import { extend ,useFrame,useThree,useLoader} from "@react-three/fiber" ;
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { button,useControls} from 'leva';//this provide us tools to menupulate  mesh
//like color,position etc
extend({OrbitControlsTag:OrbitControls})
 const DebugAndEvents=()=>{
    const {gl,camera}=useThree()
    // --------------debuging(using leva) ---------------------------------------------------
    //leva provide a GUI on browser to control the mesh for that we have to pass the object in useControl
    // hook  as we have done below.
        const {position,color,wireframe,scale}=useControls({
            position:{
                value:{
                    x:0,
                    y:0,
                    z:0
                },
                min:-10,
                max:10,
                step:0.01
            },
            color:"#ffffff",
            wireframe:false,
            click:button(()=>{
                console.log("clicked")
            }),
            scale:{options:[1,2,3]}
        });
        console.log(scale)

    // ----------------------------------------------------------------------------
    // ------------------Events in react fiber-------------------------------------



    // ------------------------------------------------------------------------------
  
    return <>
    <orbitControlsTag args={[camera,gl.domElement]}/>
  <mesh position={[position.x,position.y,position.z]}>
    <boxGeometry></boxGeometry>
    <meshNormalMaterial color={color} wireframe={wireframe}></meshNormalMaterial>
  </mesh>
    </>

 }
 export default DebugAndEvents;