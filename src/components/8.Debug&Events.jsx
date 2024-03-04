import  * as THREE from "three"
import { extend ,useFrame,useThree,useLoader} from "@react-three/fiber" ;
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { button,useControls} from 'leva';//this provide us tools to menupulate  mesh
//like color,position etc
extend({OrbitControlsTag:OrbitControls})




// --------in three.js if we want to listen to an event we have to raycaster class.but here in 
//  react-three-fiber we can directly listen to the events onClick,onPointerOut etc..
//1.onClick(()=>{})->when we click(leftclick) on  mesh
//2.onCotextMenu(()=>{})->when we right click on mesh
//3.onDoubleClick(()=>{})->when we double click on mesh.
//4.onWheel(()=>{})->when will start spinning the mouse wheel.
//5.onPointerDown(())->when we will click and hold on the mesh
//6.onPointerUp(()=>{})->when we will click on mesh and release ,so after release this event get triggered
//this is oposite of pointerDown event.
//7.onPointerOver(()=>{})->whe we will start hovering on the mesh. 
//8.onPointerOut(()=>{})->when will stop hovering on the mesh
//9/onPointerMissed(()=>{})->this will get triggered when we will click on outside the mesh . 
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

  <mesh position={[2,2,2]}
   onClick={(event)=>{event.stopPropagation()}} //assume 2nd(have onclick event) mesh is behind 1st mesh.  
     // if we will click on 1st mesh still 2nd mesh onClick will be triggered so to stop that we are using 
     //this event method stopPropagation() .
  >
    <boxGeometry></boxGeometry>
    <meshNormalMaterial color="red" wireframe={wireframe}></meshNormalMaterial>
  </mesh>
    </>

 }
 export default DebugAndEvents;