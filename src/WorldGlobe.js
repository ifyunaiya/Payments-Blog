import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const WorldGlobe = () => {
  const globeRef = useRef();

  // Example payment routes
  const paymentRoutes = [
    {
      startLat: 51.5074,
      startLng: -0.1278, // London
      endLat: 40.7128,
      endLng: -74.0060, // New York
    },
    {
      startLat: 40.7128,
      startLng: -74.0060, // New York
      endLat: 35.6762,
      endLng: 139.6503, // Tokyo
    },
    {
      startLat: 25.2048,
      startLng: 55.2708, // Dubai
      endLat: 51.5074,
      endLng: -0.1278, // London
    },
    {
      startLat: 1.3521,
      startLng: 103.8198, // Singapore
      endLat: 35.6762,
      endLng: 139.6503, // Tokyo
    },
  ];

  // Important financial cities
  const cities = [
    {
      lat: 51.5074,
      lng: -0.1278,
    },
    {
      lat: 40.7128,
      lng: -74.0060,
    },
    {
      lat: 35.6762,
      lng: 139.6503,
    },
    {
      lat: 25.2048,
      lng: 55.2708,
    },
    {
      lat: 1.3521,
      lng: 103.8198,
    },
  ];

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    // Automatic rotation
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;

    // Prevent zooming too close
    controls.minDistance = 240;
    controls.maxDistance = 340;

    // Smooth interaction
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
  }, []);

  return (
    <div className="globe-wrapper">

      <Globe
        ref={globeRef}

        width={520}
        height={520}

        // Completely transparent canvas
        backgroundColor="rgba(0, 0, 0, 0)"

        // Earth
        globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"

        // Subtle atmosphere
        showAtmosphere={true}
        atmosphereColor="#3b82f6"
        atmosphereAltitude={0.12}

        // =========================
        // PAYMENT ROUTES
        // =========================

        arcsData={paymentRoutes}

        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"

        arcColor={() => ["#3b82f6", "#f59e0b"]}

        arcAltitude={0.25}
        arcStroke={0.8}

        // Moving payment animation
        arcDashLength={0.4}
        arcDashGap={2}
        arcDashInitialGap={1}
        arcDashAnimateTime={1800}

        // =========================
        // CITY POINTS
        // =========================

        pointsData={cities}

        pointLat="lat"
        pointLng="lng"

        pointColor={() => "#f59e0b"}

        pointRadius={0.5}
        pointAltitude={0.02}

        // =========================
        // PULSING RINGS
        // =========================

        ringsData={cities}

        ringLat="lat"
        ringLng="lng"

        ringColor={() => "#3b82f6"}

        ringMaxRadius={3}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1800}
      />

    </div>
  );
};

export default WorldGlobe;