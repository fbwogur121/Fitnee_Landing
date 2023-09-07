"use client";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial } from "three";
import Home_First from "@/component/home-first";
import Home_Second from "@/component/home-second";
import Home_Third from "@/component/home-third";
import Home_Fourth from "@/component/home-fourth";
import Home_Fifth from "@/component/home-fifth";
import Home_Sixth from "@/component/home-sixth";
import Image from "next/image";

export default function Home() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGL1Renderer({
        canvas: canvasRef.current,
        antialias: true,
      });

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 300);

      scene.background = new THREE.Color("#f8f6fa");

      const light1 = new THREE.DirectionalLight("#6d55ff", 5);
      light1.position.set(-100, 300, 0);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight("#8457f1", 10);
      light2.position.set(-50, 0, 10);
      scene.add(light2);

      const material = new MeshStandardMaterial({
        color: "#f3f6fa",
        roughness: 0,
        matalness: 0.8,
      });

      const onWindowResize = () => {
        // 카메라와 렌더러 업데이트
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onWindowResize);
      const loader = new GLTFLoader();

      canvasRef.current.addEventListener("mousemove", (event) => {
        mousePos.current.x = (event.clientX / window.innerWidth) * Math.PI * 2;
        mousePos.current.y =
          -(event.clientY / window.innerHeight) * Math.PI * 2;
      });

      loader.load("/circle.glb", (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
          }
        });
        scene.add(gltf.scene);
        console.log(gltf.scene);

        function animate() {
          requestAnimationFrame(animate);
          gltf.scene.rotation.z = mousePos.current.x;
          gltf.scene.rotation.x = mousePos.current.y;
          renderer.render(scene, camera);
        }
        animate();
      });
    }
    // return () => {
    //   // 컴포넌트 언마운트 시 resize 이벤트 리스너 제거
    //   window.removeEventListener("resize", onWindowResize);
    // };
  }, [canvasRef]);

  return (
    <div>
      <div className="home-content"></div>
      {/* <div className="donut">
        <canvas ref={canvasRef} id="canvas" width={500} height={500} />
      </div> */}
      <div className="home-main">
            <Home_First/>
            <Home_Second/>
            <Home_Third/>
            <Home_Fourth/>
            <Home_Fifth/>
            <div className="gradient"/>
            <Home_Sixth/>
      </div>
    </div>
  );
}
