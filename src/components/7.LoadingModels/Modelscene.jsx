import  * as THREE from "three"
import { extend ,useFrame,useThree,useLoader} from "@react-three/fiber" ;
import { useRef ,Suspense} from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Model from "./Model"
import Bike from "./Bike";
//we are using the both model Bike and Model here in this component itself

extend({OrbitControlsTag:OrbitControls})

// sespence tag(lazy loading)->
 const Modelscene=()=>{
    const {gl,camera}=useThree()
    return <>
    <orbitControlsTag args={[camera,gl.domElement]}/>
    <Suspense fallback={<mesh>
      <boxGeometry>
      </boxGeometry>
         <meshBasicMaterial wireframe ></meshBasicMaterial>
    </mesh>}>
      {/* this fallback mesh will be loaded  in case the actual model takes time in loading till model
       gates loaded  */}
    <Model></Model>
    <ambientLight intensity={2}></ambientLight>
    {/* <Bike position={[0,2,0]}></Bike> */}
    {/* this is how we can use a downloaded model */}
    </Suspense>

    </>

 }
 export default Modelscene;