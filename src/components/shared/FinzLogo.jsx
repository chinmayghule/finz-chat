function FinzLogo({ scale = 1 }) {

  return (
    <div
      data-testid='finz-logo'
      style={{
        display: 'grid',
        justifyContent: 'center',
        placeItems: 'center',
        position: 'relative',
        transform: `scale(${scale})`,

        width: 'min-content',
        height: 'min-content',
        maxWidth: 'min-content',
        maxHeight: 'min-content',
        justifySelf: 'center',
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="87"
        height="87"
        viewBox="0 0 87 87"
        fill="none"

        position='absolute'
        style={{
          gridColumnStart: '1',
          gridColumnEnd: '2',
          gridRowStart: '1',
          gridRowEnd: '2',

          transform: `scale(${scale})`
        }}
      >
        <path d="M87 43.5C87 67.5244 67.5244 87 43.5 87C19.4756 87 0 67.5244 0 43.5C0 19.4756 19.4756 0 43.5 0C67.5244 0 87 19.4756 87 43.5Z" fill="url(#paint0_linear_50_6790)" />
        <defs>
          <linearGradient id="paint0_linear_50_6790" x1="0" y1="43.5" x2="87" y2="43.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0250C5" />
            <stop offset="1" stopColor="#D43F8D" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"

        style={{
          position: 'absolute',
          gridColumnStart: '1',
          gridColumnEnd: '2',
          gridRowStart: '1',
          gridRowEnd: '2',

          transform: `scale(${scale})`
        }}
      >
        <path d="M82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0C63.6437 0 82 18.3563 82 41Z" fill="#111111" />
      </svg>

      <img
        style={{
          position: 'absolute',
          width: '3rem',
          height: '0.875rem',

          gridColumnStart: '1',
          gridColumnEnd: '2',
          gridRowStart: '1',
          gridRowEnd: '2',

          transform: `scale(${scale})`
        }}
        src="/finz-logo-text.png"
      />
    </div>
  );

}


export default FinzLogo;