"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

<<<<<<< HEAD
// Dynamically import Spline with proper error handling
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="text-4xl mb-4">🎨</div>
        <div className="text-gray-500">Loading 3D Scene...</div>
      </div>
    </div>
  ),
});
=======
// Graceful fallback with error boundary
const SplineWithFallback = dynamic(
  () =>
    import("@splinetool/react-spline")
      .then((mod) => ({ default: mod.default || mod }))
      .catch(() => ({ default: () => null })), // Return null component on import failure
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="text-4xl mb-4">🎨</div>
          <div className="text-gray-500">Loading 3D Scene...</div>
        </div>
      </div>
    ),
  }
);
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91

const SplineRat: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    setIsMounted(true);
=======
  const [splineAvailable, setSplineAvailable] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // Check if Spline is available
    import("@splinetool/react-spline").catch(() => {
      setSplineAvailable(false);
      setHasError(true);
    });
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91
  }, []);

  const handleLoad = () => {
    console.log("Spline scene loaded successfully");
  };

  const handleError = (error: any) => {
    console.error("Spline loading error:", error);
    setHasError(true);
  };

  // Don't render anything until mounted
  if (!isMounted) {
    return (
      <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎨</div>
          <div className="text-gray-500">Initializing...</div>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  // Show error state if Spline fails to load
  if (hasError) {
=======
  // Show error state if Spline fails to load or isn't available
  if (hasError || !splineAvailable) {
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91
    return (
      <div className="relative w-full h-[400px] bg-gradient-to-br from-red-50 to-pink-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            3D Scene Unavailable
          </h3>
          <p className="text-gray-500">
            The interactive 3D scene is currently unavailable.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
<<<<<<< HEAD
      <Spline
=======
      <SplineWithFallback
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91
        scene="/carex.splinecode"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default SplineRat;
