let mouse = {x: 0, y: 0};
$('body').on('mousemove', function(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
});  

function doIt() {



    // THREE START

	let camera, scene, renderer;



	let textureCube, sphereMesh, sphereMaterial;

			init();
			animate();

			function init() {

				// CAMERAS

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 100000 );
				camera.position.set( 0, 0, 1000 );

				// SCENE

				scene = new THREE.Scene();

				// Lights

				const ambient = new THREE.AmbientLight( 0xffffff );
				scene.add( ambient );

				// Textures

				const loader = new THREE.CubeTextureLoader();
				loader.setPath( '/js/lib/textures/glxy/' );

				textureCube = loader.load( [ 'dark-s_px.jpg', 'dark-s_nz.jpg', 'dark-s_py.jpg', 'dark-s_ny.jpg', 'dark-s_pz.jpg', 'dark-s_nz.jpg'] );
				textureCube.encoding = THREE.sRGBEncoding;

				const textureLoader = new THREE.TextureLoader();

				scene.background = textureCube;

				//

				const geometry = new THREE.IcosahedronGeometry( 400, 15 );
				sphereMaterial = new THREE.MeshLambertMaterial( { envMap: textureCube } );
				sphereMesh = new THREE.Mesh( geometry, sphereMaterial );
				scene.add( sphereMesh );

				//

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.outputEncoding = THREE.sRGBEncoding;
				document.body.appendChild( renderer.domElement );

				//

                scene.background = textureCube;

                sphereMaterial.envMap = textureCube;
                sphereMaterial.needsUpdate = true;

				//


				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

                camera.position.set( mouse.x / 2, mouse.y / 2, 1000 );

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.lookAt( scene.position );
				renderer.render( scene, camera );

			}


    // THREE END



};

function revolve() {
    (window['THREE'] !== undefined) ? doIt() : setTimeout(revolve, 100)
};

setTimeout(revolve(), 500);

