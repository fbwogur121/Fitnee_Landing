"use client";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial } from "three";
import Link from "next/link";
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
    return () => {
      // 컴포넌트 언마운트 시 resize 이벤트 리스너 제거
      window.removeEventListener("resize", onWindowResize);
    };
  }, [canvasRef]);

  return (
    <div>
      <div className="home-content"></div>
      <div className="donut">
        <canvas ref={canvasRef} id="canvas" width={500} height={500} />
      </div>
      <div className="home-main">
        <div className="first">
          <div className="first-text">
            <div className="point-text">루틴 생성</div>
            <div className="home-title">
              <span>
                간단한 질문만으로
                <br/>
                맞춤 헬스 루틴을 만들 수 있다면
              </span>
            </div>
            <div className="home-subtitle">
              <span>
                4가지 질문과 회원가입 시 가입하신 신체정보를
                <br/>
                기반으로 유저에게 딱 맞는 루틴을 생성해요.
              </span>
            </div>
          </div>
          <div className="first-img-container">
            <Image
              src={'/phone/1_1RM.svg'}
              width={240}
              height={491}
              style={{marginRight: 30, alignSelf: 'flex-start'}}
            />
            <Image
              src={'/phone/1_createRoutine.svg'}
              width={240}
              height={491}
              style={{paddingTop: 50, alignSelf: 'flex-end'}}
            />
          </div>
        </div>

        <div className="second">
            <Image
                src={'/phone/2_mainScreen.svg'}
                width={383}
                height={531}
                style={{marginRight: 30, alignSelf: 'flex-start'}}
                />
            <div className="second-text">
                <div className="point-text">운동 사전</div>
                <div className="home-title" style={{marginBottom: 8}}>
                    <span>캐릭터로 쉽게 배우는 운동자세</span> 
                </div>
                <div className="home-subtitle">
                    <span>
                        30개의 캐릭터 모션을 통해 혼자서 감 잡기 어려웠던 운동 자세를 재미있게 배울 수 있어요. 
                    </span>
                </div>
            </div>
        </div>

        <div className="third">
            <div className="third-text">
                <div className="point-text">루틴 커스텀</div>
                <div className="home-title" style={{textAlign: 'center'}}>
                    <span>커스텀 페이지에서 상황에 맞게<br/>루틴을 수정할 수 있어요</span> 
                </div>
                <div className="home-subtitle" style={{textAlign: 'center'}} >
                    <span>
                        운동, 세트 수, 무게량, 횟수 등 운동하는 데에 있어<br/>필요한 모든 요소들을 커스텀할 수 있어요. 
                    </span>
                </div>
            </div>
            <div className="third-img-container">
                <Image
                src={'/phone/3_list.svg'}
                width={220}
                height={445}
                style={{marginRight: 65}}
                />
                <Image
                src={'/phone/3_custom.svg'}
                width={220}
                height={445}
                style={{marginRight: 65}}
                />
                <Image
                src={'/phone/3_edit.svg'}
                width={220} 
                height={445}
                />
          </div>

        </div>

        <div className="fourth">
            <div className="fourth-text">
                <div className="point-text">운동 과정</div>
                <div className="text-group">
                    <div className="home-title" id="fourth-title">
                        <span>운동 전 과정을<br/>트래킹하고 있어요</span> 
                    </div>
                    <div className="home-subtitle" id="fourth-subtitle">
                        <span>
                            운동, 운동대체, 휴식, 세트 건너뛰기 등<br/>실제 운동상황에 맞는 UI를 구현했어요.
                        </span>
                    </div>
                </div>
            </div>
            <div className="fourth-img-container">
                <Image
                src={'/phone/4_start.svg'}
                width={220}
                height={445}
                id="fourth-img"
                />
                <Image
                src={'/phone/4_timer.svg'}
                width={220}
                height={445}
                id="fourth-img"
                />
                <Image
                src={'/phone/4_exercise.svg'}
                width={220} 
                height={445}
                id="fourth-img"
                />
                <Image
                src={'/phone/4_finish.svg'}
                width={220} 
                height={445}
                id="fourth-img"
                />
                <Image
                src={'/phone/4_analysis.svg'}
                width={220} 
                height={445}
                /> 
            </div>
            <div className="line"/>
        </div>

        <div className="fifth">
            <Image
                src={'/phone/5_calendar.svg'}
                width={327}
                height={300}
                id="fifth-img"
            />
            <Image
                src={'/phone/5_graph.svg'}
                width={436}
                height={300}
                id="fifth-img"
                className="graph"
            />
            <Image
                src={'/phone/5_analysis.svg'}
                width={327} 
                height={194}
                id="fifth-img"
             />
            <div className="fifth-text">
                <div className="point-text">마이페이지</div>
                <div className="home-title">
                        <span>기록, 분석, 루틴 내용<br/>모두 자동으로 업데이트 돼요</span> 
                    </div>
                    <div className="home-subtitle">
                        <span>
                            캘린더와 그래프를 통해 한눈에 나의 운동 현황을<br/>분석할 수 있어요.
                        </span>
                </div> 
            </div>
        </div>

        <div className="sixth">
            <div className="sixth-text">
                <div className="point-text" style={{textAlign: 'center'}}>루틴 커스텀</div>
                <div className="home-title" style={{textAlign: 'center'}}>
                        <span>다크모드까지<br/>디테일하게 지원해요</span> 
                </div>
                <div className="home-subtitle" style={{textAlign: 'center'}}>
                    <span>
                        사용자의 선호에 따라<br/>라이트모드와 다크모드를 모두 지원하고 있어요
                    </span>
                </div>
            </div>
            <Image
                src={'/phone/6_darkmode.svg'}
                width={220}
                height={445}
                id="sixth-img"
                />
        </div>
      </div> 
    </div>
  );
}
