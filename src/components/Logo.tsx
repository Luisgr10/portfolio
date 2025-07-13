const Logo = ({ size = 120 }) => (
  <svg
    width={size}
    height={size / 5}
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <text fontFamily="Roboto, Arial, sans-serif" fontWeight="bold" fontSize="22" y="19">
      <tspan fill="#C01229">{'{ '}</tspan>
      <tspan fill="#1E3F66">Luisgr</tspan>
      <tspan fill="#C01229">{' }'}</tspan>
    </text>
  </svg>
);

export default Logo; 