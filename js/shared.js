import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.138.0/build/three.module.js';

let scene, camera, renderer, uniforms;

function initBackground() {
  scene = new THREE.Scene();
  
  camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    1,
    1000
  );
  camera.position.z = 1;

  const canvas = document.getElementById('threejs-bg');
  
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  
  uniforms = {
    u_time: { type: "f", value: 0.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  };

  const fragmentShader = `
    precision mediump float;
    uniform float u_time;
    uniform vec2 u_resolution;

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      uv.x += sin(u_time * 0.02) * 0.02;  // Subtle horizontal movement
      uv.y += cos(u_time * 0.015) * 0.02; // Subtle vertical movement

      // Keep the original pastel colors
      vec3 color1 = vec3(219.0/255.0, 147.0/255.0, 195.0/255.0); // #db93c3 (pink)
      vec3 color2 = vec3(122.0/255.0, 140.0/255.0, 207.0/255.0); // #7a8ccf (blue)
      vec3 color3 = vec3(142.0/255.0, 123.0/255.0, 189.0/255.0); // #8e7bbd (purple)
      vec3 color4 = vec3(187.0/255.0, 112.0/255.0, 202.0/255.0); // #bb70ca (violet)
      
      // Create artistic transitions while maintaining pastel colors
      float noiseScale = 4.0;
      float noiseStrength = 0.5;
      
      // Add some noise to the UV coordinates to create more interesting patterns
      float noise = sin(uv.x * noiseScale) * sin(uv.y * noiseScale) * noiseStrength;
      uv = uv + vec2(noise * 0.1, noise * 0.1);
      
      // Create a starker gradient with sharper transitions
      float xTransition = smoothstep(0.3, 0.7, uv.x); // Sharper horizontal transition
      float yTransition = smoothstep(0.3, 0.7, uv.y); // Sharper vertical transition
      
      vec3 gradient = mix(
        mix(color1, color2, xTransition), 
        mix(color3, color4, xTransition), 
        yTransition
      );
      
      gl_FragColor = vec4(gradient, 1.0);
    }
  `;

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragmentShader
  });

  const geometry = new THREE.PlaneGeometry(window.innerWidth * 1.5, window.innerHeight * 1.5);
  
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  animate();
  
  window.addEventListener("resize", onWindowResize, false);
  
  document.addEventListener('fullscreenchange', onFullScreenChange);
  document.addEventListener('webkitfullscreenchange', onFullScreenChange);
  document.addEventListener('mozfullscreenchange', onFullScreenChange);
  document.addEventListener('MSFullscreenChange', onFullScreenChange);
}

function animate() {
  uniforms.u_time.value += 0.02;
  
  renderer.render(scene, camera);
  
  requestAnimationFrame(animate);
}

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  camera.left = width / -2;
  camera.right = width / 2;
  camera.top = height / 2;
  camera.bottom = height / -2;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
  
  const canvas = document.getElementById('threejs-bg');
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  
  uniforms.u_resolution.value.set(width, height);
  
  renderer.render(scene, camera);
}

function onFullScreenChange() {
  setTimeout(onWindowResize, 100);
}

function initPage() {
  initBackground();
  
  setTimeout(onWindowResize, 100);
}

export { initPage, onWindowResize };