

const PlusIcon = ({ width = 32, height = 32, color = '#D3D3D3', stroke = '#F2F2F2' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke={stroke} />
      <path d="M20.6653 15.1313H17.2022V11.6683C17.2022 10.3329 15.1312 10.3329 15.1312 11.6683V15.1313H11.668C10.333 15.1313 10.333 17.2022 11.668 17.2022H15.1312V20.6652C15.1312 22.0006 17.2022 22.0006 17.2022 20.6652V17.2022H20.6653C22.0006 17.2022 22.0006 15.1313 20.6653 15.1313Z" fill={color} />
    </svg>
  );
};

export default PlusIcon;
