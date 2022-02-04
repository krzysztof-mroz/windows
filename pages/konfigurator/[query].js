import React, {Suspense, useRef, useState, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
    ContactShadows,
    Environment,
    useGLTF,
    OrbitControls,
    useTexture,
    useDepthBuffer,
  } from "@react-three/drei";
  import { proxy, useSnapshot } from "valtio";
  import * as THREE from "three";


function konfigurator() {
    return (
        <h3>konfigurator</h3>
    )
}

export default konfigurator;