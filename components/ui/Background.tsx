export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Main background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[180px]" />

      {/* Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

    </div>
  );
}