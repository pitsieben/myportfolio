import { useState } from 'react'
import './App.css'
import LineSidebar from './components/LineSidebar/LineSidebar'
import ModelViewer from './components/ModelViewer/ModelViewer'
import FaultyTerminal from './components/FaultyTerminal/FaultyTerminal'
import ProjectsGallery from './components/ProjectsGallery/ProjectsGallery'

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#020617', // Deep slate/black base
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'monospace'
    }}>
      {/* Background Terminal Effect */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
        <FaultyTerminal
          scale={2.0}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.1}
          scanlineIntensity={1.5}
          glitchAmount={1.2}
          flickerAmount={0.8}
          curvature={0.05}
          tint="#10B981"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={1}
        />
      </div>

      {/* Top brand header */}
      <div style={{
        position: 'absolute',
        top: 32,
        left: 48,
        zIndex: 20,
        pointerEvents: 'none'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          color: '#ffffff',
          textTransform: 'uppercase',
          textShadow: '0 0 12px rgba(255, 255, 255, 0.6)'
        }}>
          Pit Siebenaler
        </h1>
        <p style={{
          margin: '6px 0 0',
          fontSize: '0.9rem',
          color: '#e2e8f0',
          letterSpacing: '0.05em',
          fontWeight: 600,
          textShadow: '0 0 8px rgba(226, 232, 240, 0.4)'
        }}>
          Robotics & Engineering
        </p>
      </div>

      {/* Left Sidebar */}
      <div style={{
        width: '320px',
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 10
      }}>
        <LineSidebar
          items={['Overview', 'Robotics', 'Projects', 'Experience', 'Contact']}
          accentColor="#ffffff"
          textColor="#f8fafc"
          markerColor="#94a3b8"
          showIndex
          showMarker
          proximityRadius={120}
          maxShift={28}
          falloff="smooth"
          markerLength={50}
          markerGap={4}
          tickScale={0.5}
          scaleTick
          itemGap={24}
          fontSize={1.1}
          smoothing={100}
          defaultActive={0}
          onItemClick={(index, label) => setActiveTab(index)}
          style={{ fontFamily: 'monospace', fontWeight: 600, textShadow: '0 0 6px rgba(0,0,0,0.8)' }}
        />
      </div>

      {/* Center Main Content Area */}
      <div style={{
        flex: 1,
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
      }}>
        {activeTab === 1 && (
          <ModelViewer
            url="/models/abb_robot.obj"
            width="100%"
            height="100%"
            autoFrame={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableMouseParallax={true}
            enableHoverRotation={true}
            enableManualRotation={true}
            enableManualZoom={true}
            defaultRotationX={-30}
            defaultRotationY={15}
            environmentPreset="studio"
            ambientIntensity={0.8}
            keyLightIntensity={2.0}
            fillLightIntensity={1.0}
            rimLightIntensity={1.5}
            showScreenshotButton={false}
          />
        )}
        
        {activeTab === 2 && (
          <ProjectsGallery />
        )}
        
        {/* Placeholder for other tabs so the user isn't looking at a blank space */}
        {activeTab !== 1 && activeTab !== 2 && (
          <div style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
            opacity: 0.8
          }}>
            {/* Displaying simple text for non-robotics tabs */}
            Select the 'Robotics' or 'Projects' tab to view content.
          </div>
        )}
      </div>
    </div>
  )
}

export default App
