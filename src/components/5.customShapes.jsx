import  * as THREE from "three"
import { extend ,useFrame,useThree,useLoader} from "@react-three/fiber" ;
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//here we are learning about creating custom  shapes and load something when some error or fallback occurs
//using useLoader this is similar to suspense in react. also this is how we add texture in our geometry
extend({OrbitControlsTag:OrbitControls})
 const CustomShapes=()=>{
    const planeRef=useRef();
    const {gl,camera}=useThree()
    useFrame((state,delta)=>{
        // cubeRef.current.rotation.y+=0.02;
        // planeRef.current.rotation.x+=0.02;
    })
    const texture=useLoader(THREE.TextureLoader,"./img/star.jpg")
    console.log(texture)

    const positionArray=new Float32Array([0,0,0,0,1,0,1,0,0])

    return <>
    <orbitControlsTag args={[camera,gl.domElement]}/>
    <mesh  ref={planeRef}>
        <bufferGeometry>
            <bufferAttribute attach={"attributes-position"} count={3} itemSize={3} array={positionArray}/>
            {/* 1.attach->what kind of attribute we are passing eh attribute-position,attribute-uv etc
                2.count->no of vertices
                3.itemSize->no of axes in which point/vertices is represented
                 4.array->array containing the co-ordinates*/}
            </bufferGeometry>
            {/* <meshBasicMaterial color="red" side={THREE.DoubleSide}></meshBasicMaterial>   */}
            {/* <planeGeometry args={[2,2]}></planeGeometry> */}
            <meshBasicMaterial side={THREE.DoubleSide} map={texture}></meshBasicMaterial>      

     </mesh>
    </>

 }
 export default CustomShapes;