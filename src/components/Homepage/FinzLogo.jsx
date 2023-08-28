function FinzLogo() {

  const finzLogoStyle = {
    display: 'grid',
    justifyContent: 'center',
    placeItems: 'center',
    padding: '1rem',
    aspectRatio: '1 / 1',
    border: '2px solid black',
    borderRadius: '50%',
    fontWeight: 'bold'
  };

  return (
    <div style={finzLogoStyle}>FINZ</div>
  );
}


export default FinzLogo;