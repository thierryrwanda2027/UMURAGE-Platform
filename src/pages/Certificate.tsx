import { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';

export function Certificate() {
  const { user } = useAuth();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !user) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = "#F4F7F6"; ctx.fillRect(0, 0, 600, 400);
    ctx.fillStyle = "white"; ctx.fillRect(20, 20, 560, 360);
    ctx.strokeStyle = "#004C97"; ctx.lineWidth = 8; ctx.strokeRect(10, 10, 580, 380);
    ctx.strokeStyle = "#28A745"; ctx.lineWidth = 2; ctx.strokeRect(24, 24, 552, 352);

    ctx.fillStyle = "#004C97"; ctx.font = 'bold 32px Arial'; ctx.textAlign = "center";
    ctx.fillText("UMURAGE E-ACADEMY", 300, 80);
    
    ctx.fillStyle = "#555"; ctx.font = '20px Arial';
    ctx.fillText("This certifies that", 300, 130);
    
    ctx.fillStyle = "#333"; ctx.font = "italic bold 28px Georgia";
    ctx.fillText(user.email, 300, 180);
    
    ctx.fillStyle = "#555"; ctx.font = '18px Arial';
    ctx.fillText("has successfully completed the requirements to be a", 300, 230);
    
    ctx.fillStyle = "#004C97"; ctx.font = 'bold 24px Arial';
    ctx.fillText("Certified Peer Health Educator", 300, 270);
    
    ctx.fillStyle = "#333"; ctx.font = '16px Arial';
    ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, 150, 340);
    
    ctx.fillStyle = "#28A745"; ctx.font = 'bold 18px Arial';
    ctx.fillText("Principal Niyonkuru Thierry", 450, 330);
    
    ctx.beginPath(); ctx.moveTo(350, 340); ctx.lineTo(550, 340);
    ctx.strokeStyle = "#333"; ctx.lineWidth = 1; ctx.stroke();
  }, [user]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "Umurage_Peer_Certificate.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-8">Certification Complete</h2>
      
      <div className="shadow-lg border border-gray-200 p-2 bg-gray-50 rounded-lg mb-8">
        <canvas ref={canvasRef} width="600" height="400" className="max-w-full h-auto bg-white" />
      </div>

      <button 
        onClick={handleDownload}
        className="bg-[var(--color-growth-green)] text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors shadow-sm"
      >
        Download Certificate
      </button>
    </div>
  );
}
