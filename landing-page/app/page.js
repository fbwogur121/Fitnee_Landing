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
import Link from "next/link";

export default function Home() {
  const canvasRef = useRef(null);
  ///////마우스로 조절///////
  //const mousePos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGL1Renderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true,
      });

      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enable = true;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 300);

      const light1 = new THREE.DirectionalLight("#6d55ff", 5);
      light1.position.set(-100, 300, 0);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight("#8457f1", 10);
      light2.position.set(-50, 0, 10);
      scene.add(light2);

      const material = new MeshStandardMaterial({
        color: "#fff",
        roughness: 0,
        matalness: 0.8,
        transparent: true,
        transmission: 0.9,
      });

      const loader = new GLTFLoader();

      ///////마우스로 조절///////
      // canvasRef.current.addEventListener("mousemove", (event) => {
      //   mousePos.current.x = (event.clientX / window.innerWidth) * Math.PI * 2;
      //   mousePos.current.y =
      //     -(event.clientY / window.innerHeight) * Math.PI * 2;
      // });

      loader.load("/circle.glb", (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });
        scene.add(gltf.scene);
        console.log(gltf.scene);

        function animate() {
          requestAnimationFrame(animate);
          gltf.scene.rotation.x += 0.008;
          gltf.scene.rotation.y += 0.003;
          gltf.scene.rotation.z += 0.005;
          ///////마우스로 조절///////
          //gltf.scene.rotation.z = mousePos.current.x;
          //gltf.scene.rotation.x = mousePos.current.y;
          renderer.render(scene, camera);
          renderer.shadowMap.needsUpdate = true;
        }
        animate();
      });
    }
  }, [canvasRef]);

  return (
    <div className="home-container">
      <div className="donut">
        <canvas ref={canvasRef} id="canvas" width={500} height={500} />
        <div className="big-logo">
          <Image
            src={"/BigLogo.svg"}
            fill
            style={{
              objectFit: "contain",
              alignItems: "center",
            }}
            quality={100}
          />
        </div>
      </div>
      <div className="arrow-container">
        <Image
          className="arrow"
          src={"/image/arrow.png"}
          width={82}
          height={28}
          style={{ justifyContent: "center", alignItems: "center" }}
          quality={100}
        />
      </div>
      <div className="home-main">
        <Home_First />
        <Home_Second />
        <Home_Third />
        <Home_Fourth />
        <Home_Fifth />
        <div className="gradient" />
        <Home_Sixth />
      </div>
    </div>
  );
}
