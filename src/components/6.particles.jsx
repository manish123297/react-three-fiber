import  * as THREE from "three"
import { extend ,useFrame,useThree,useLoader} from "@react-three/fiber" ;
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
extend({OrbitControlsTag:OrbitControls})
 const Particles=()=>{
    const particleRef=useRef();
    const {gl,camera}=useThree()
    useFrame((state,delta)=>{
        // cubeRef.current.rotation.y+=0.02;
        // planeRef.current.rotation.x+=0.009;
        // planeRef.current.rotation.y+=0.001;
        // particleRef.current.position.z=5*Math.sin(Math.PI*state.clock.elapsedTime)
        // particleRef.current.rotation.z=Math.sin(Math.PI*state.clock.elapsedTime)


    })
    const texture=useLoader(THREE.TextureLoader,"./img/star.jpg")
    console.log(texture)

    const verticesAmount=2000 //no of vertices required
    const positionArray=new Float32Array(verticesAmount*3);//creating the array to store the
    //all 2000*3 points

    for(let i=0;i<verticesAmount*3;i++){
        //storing the random numbers in the positionArray so that
        //we can use all that as co-ordinate.
        positionArray[i]=(Math.random()-0.5)*10.0;
    }


    return <>
    <orbitControlsTag args={[camera,gl.domElement]}/>
    <points  ref={particleRef}>
        {/* this is how we can use points class .here since we are using the point class so sphere will
         be created of points */}
        <bufferGeometry>
            <bufferAttribute
            attach="attributes-position" // to specify position attribute
            count={positionArray.length} //total number of vertices
            itemSize={3}//each three pair should be treated as one vertex
            array={positionArray}//passing the actual array
            />
        </bufferGeometry>
        <pointsMaterial size={0.06}
        alphaMap={texture}
        transparent
        depthTest={false}
        >
            {/* size=0.02 means size of each point */}
            {/* alphaMap={texture} we are using instead of map={texture} becuz it makes the black part
            sourding the texture as transparent which helps us to see the particles
            behind the front particles */}
            {/* transparent is used to hide the black part of texture */}
            {/* depthTest={false} is used so that GPU should not confuse during
            two particles comes closer to decide that which one is in fron of other */}
        </pointsMaterial>

     </points>
    </>

 }
 export default Particles;