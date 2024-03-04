// Canvas properties---------------------------------------------------
//1.we can set orthographic or any other kind of camera like this <Canvas orthographic={true}/>
//2.alpha=true  ->means  background of scene is transparent so whatever we will add(backgroud color)
// in parent of canvas that will the background of scene
// 3.<Canvas onCreated={someMethod}/> ->here some have one parameter like onChange called state .using
// this also we can change the background color (state.gl.setColor("red",0.5))-(0.5 is opacity)
// --------------------------------------------------------------------
<!-- helpers which we can use in Canvas component------------------- -->
{/* <axesHelper args={[1]}/>     */}
        <!-- {/* we can add axes helper anywhere in our canvas like in scene component which we created or  -->
        <!-- anywhere .args is to increase the length of each axess */} -->
        {/* <gridHelper  args={[20,20,"red","green"]}/> */}
        {/* grid is also one of the helper to see the floor of the scene 
        args={[size,numberOfDivision,centerLineColor,gridColor]} */}

<!-- ----------------------------------------------------------------- -->