const SelectIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" rx="8" fill="url(#paint0_linear_27_204)" />
      <g clipPath="url(#clip0_27_204)">
        <g filter="url(#filter0_d_27_204)">
          <path
            d="M19.6567 11.6207C19.8393 11.4363 20.0875 11.3318 20.347 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0593 12.9954L15.8327 19.5294C15.7429 19.626 15.6345 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4193 19.556L10.954 16.092C10.7699 15.9078 10.6664 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9543 14.703C11.1386 14.5189 11.3884 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3433 14.7034L15.084 17.4447L19.6307 11.6514C19.6389 11.6408 19.6478 11.6308 19.6573 11.6214L19.6567 11.6207Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_27_204"
          x="10.6665"
          y="11.3298"
          width="10.6697"
          height="10.5132"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_27_204"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_27_204"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_27_204"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#89F09C" />
          <stop offset="1" stopColor="#3CC755" />
        </linearGradient>
        <clipPath id="clip0_27_204">
          <rect
            width="10.6667"
            height="10.6667"
            fill="white"
            transform="translate(10.6667 10.6667)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SelectIcon;
