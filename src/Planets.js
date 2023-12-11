export const Planets = (planets) => {
  const {name, isGasPlanet} = planets;

  return (
    <div className="info-container">
      <div className="label">
        {name}
      </div>
      <div className="value">{isGasPlanet ? 'A gas planet' : 'Not a gas planet'}</div>
    </div>
  );
}