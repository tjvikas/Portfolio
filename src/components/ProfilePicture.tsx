import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";

const ProfilePicture = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    
    // Simulate loading completion since we don't have a 3D model to load
    setTimeout(() => {
      progress.loaded();
    }, 800);
  }, [setLoading]);

  return (
    <div className="character-container" style={{ position: 'fixed', height: '100vh', width: '100vw', top: 0, left: 0, pointerEvents: 'none', zIndex: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '10vw' }}>
      <div 
        className="profile-float"
        style={{
          width: 'clamp(200px, 25vw, 350px)', 
          height: 'clamp(200px, 25vw, 350px)',
          borderRadius: '50%', 
          overflow: 'hidden', 
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 0 40px rgba(0, 200, 255, 0.2), inset 0 0 20px rgba(255,255,255,0.1)',
          pointerEvents: 'auto',
          marginTop: '5vh'
        }}
      >
        <img 
          src="/images/profile.jpg" 
          alt="Profile" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.webp';
          }}
        />
      </div>
      <style>{`
        .profile-float {
          animation: float 6s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .profile-float:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 80px rgba(100, 100, 255, 0.3);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 1024px) {
          .profile-float {
            margin-right: 0;
            margin-top: 5rem;
            width: 250px !important;
            height: 250px !important;
          }
          .character-container {
            position: relative !important;
            height: 50vh !important;
            min-height: 400px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePicture;
