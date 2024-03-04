
import {Canvas} from "@react-three/fiber"

// here we have learnt how we can create canvas,mesh,material and render it on screen (similar to three.js)
//in recatFiber class names is converted into components (in camelCase).for example in three We have
//MeshNormalMaterial but in reactFiber it converted into component like this <meshNormalMaterial/>
//here also we can use the all property by pasing it as prop the components.
function Basics() {
// -------------------------------mesh properties--------------------------------------------------------
  // position-x={2} ->to move mesh on x axes similarlt we can do for y axes-> 
  //  rotation-x={Math.PI*0.25} ->to rotate about x axes 
  // scale={k} ->scaling k times in each axes x,y and z
  //scale={[l,m,n]}  ->scaling l amount ,m amount and n amount in x ,y and z axes respectively
// ------------------------------------------------------------------------------------------------------
// we can wrap multiple mesh in a group(<group/>) to apply propertis on all the mesh of group- like position
//  ,rotation ,scale

  return (
    <div >
     {/* 1.creating the canvas -Canvas takes size of its parent-control canvas by controling its parent*/}
      <Canvas>
         {/*2.creating the mesh/object  */}
         <group  position={[5,0,0]}>
      <mesh>
        {/* 3.creating the geometry */}
      <torusKnotGeometry/>
      {/* 4.adding the material of the geometry */}
       <meshNormalMaterial/>
     </mesh>
     <mesh position={[4,0,0]}>
      {/* this is how we can define the position of the mesh */}
      <torusKnotGeometry/> 
       <meshNormalMaterial/>
     </mesh>
         </group>
      </Canvas>
    </div>
  );
}

export default Basics;
