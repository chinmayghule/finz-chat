function FinzLogo({ scale = 1, position = '' }) {

  const finzLogoStyle = {
    display: 'grid',
    justifyContent: 'center',
    placeItems: 'center',
    padding: '1rem',
    aspectRatio: '1 / 1',
    border: '2px solid black',
    borderRadius: '50%',
    fontWeight: 'bold',
    transform: `scale(${scale})`,
    position: position
  };

  return (
    <div style={finzLogoStyle}>FINZ</div>
  );
}


export default FinzLogo;