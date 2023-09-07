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
  ///////마우스로 조절///////
  //const mousePos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGL1Renderer({
        canvas: canvasRef.current,
        antialias: true,
      });

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enable = true;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 300);

      // 배경 평면 생성
      const planeGeometry = new THREE.PlaneGeometry(1000, 1000);

      // 배경 평면에 텍스처 매핑을 위한 재질 생성
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/Group35798.png");
      const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });

      // 배경 메시 생성
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

      // 카메라와 마우스 움직임과 동기화하기 위해 회전 설정
      planeMesh.rotation.x = -Math.PI / 2;

      scene.add(planeMesh);

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
            child.castShadow = true;
            child.receiveShadow = true;
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
    <div>
      <div className="home-content"></div>
      <div className="donut">
        <canvas ref={canvasRef} id="canvas" width={500} height={500} />
        <div className="big-logo">
          <Image
            src={"/image/BigLogo.png"}
            fill
            style={{
              objectFit: "contain",
              alignItems: "center",
              padding: 20,
            }}
            quality={100}
          />
        </div>
      </div>
      <div className="home-main">
        <Home_First />
        <Home_Second />
        <Home_Third />
        <Home_Fourth />
        <Home_Fifth />
        <Home_Sixth />
      </div>
    </div>
  );
}
