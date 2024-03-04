import './App.css';
import './styles.css'
// import Basics from './components/1.BasicsOFreactFiber';
// import Scene from './components/2.CreatingScene'; 
// import ControlingOrbit from './components/3.orbitControl';
// import CameraPositions from "./components/4.cameraPositions"
// import CustomShapes from "./components/5.customShapes"
// import Particles from './components/6.particles';
// import Modelscene from './components/7.LoadingModels/Modelscene';
 import DebugAndEvents from './components/8.Debug&Events';

import {Canvas} from "@react-three/fiber"
import { Perf } from 'r3f-perf' //Easily monitor the performances of your @react-three/fiber application.
//add it anywhere in the canvas




function App() {
  return (
    <div className="root">
      <Canvas>
        <Perf  position="bottom-left"></Perf>
       <DebugAndEvents></DebugAndEvents>
        <axesHelper args={[1]}/>
        {/* we can add axes helper anywhere in our canvas like in scene component which we created or 
        anywhere .args is to increase the length of each axess */}
        <gridHelper  args={[20,20,"red","green"]}/>
        {/* grid is also one of the helper to see the floor of the scene 
        args={[size,numberOfDivision,centerLineColor,gridColor]} */}
      </Canvas>
    
    </div>
  );
}

export default App;
