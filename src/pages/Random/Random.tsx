import "./style.css";

export const Random = () => {
  return (
    <div>
      <div>
        <h2>Typewriter Effect</h2>
        <div className="typewriter-container">
          <div>
            <p className="typewriter-text">Texto de exemplo</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Pulse Effect</h2>
        <div className="pulse"></div>
      </div>
    </div>
  );
};
