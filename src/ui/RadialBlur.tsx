
import "../styles/RadialBlur.css";

type RadialBlurProps = {
  className?: string;
};

export default function RadialBlur({
  className = "",
}: RadialBlurProps) {
  return (
    <div
      className={`radial-blur ${className}`}
      aria-hidden="true"
    >
      <div className="radial-blur__orb radial-blur__orb--blue" />
      <div className="radial-blur__orb radial-blur__orb--purple" />
      <div className="radial-blur__orb radial-blur__orb--pink" />
    </div>
  );
}
