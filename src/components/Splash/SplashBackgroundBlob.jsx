function SplashBackgroundBlob() {
  return (
    <svg
      className="splash-background-blob"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs><linearGradient id="b" gradientTransform="rotate(-30 .5 .5)"><stop offset="0%" stopColor="#D43F8D" /><stop offset="100%" stopColor="#0bc5ea" /></linearGradient>
        <clipPath id="a"><path fill="currentColor" d="M831.5 707.5Q739 915 514.5 889T150 681.5Q10 500 150 318t362.5-203.5q222.5-21.5 317 182t2 411Z" /></clipPath></defs><g clipPath="url(#a)"><path fill="url(#b)" d="M831.5 707.5Q739 915 514.5 889T150 681.5Q10 500 150 318t362.5-203.5q222.5-21.5 317 182t2 411Z" /></g>
    </svg>
  );
}

export default SplashBackgroundBlob;