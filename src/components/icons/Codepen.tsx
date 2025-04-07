import React from "react";

type Props = {
  className: string;
};

const Codepen = (props: Props) => {
  return (
    <svg className={props.className} width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector"
        d="M27.4687 8.73379L14.6718 0.202516C14.235 -0.0662736 13.7689 -0.0687345 13.3281 0.202516L0.531233 8.73379C0.203109 8.95249 0 9.34318 0 9.73376V18.265C0 18.6556 0.203109 19.0463 0.531288 19.265L13.3281 27.7975C13.7649 28.0663 14.2311 28.0687 14.6719 27.7975L27.4687 19.265C27.7968 19.0463 28 18.6556 28 18.265V9.73376C27.9999 9.34318 27.7968 8.95249 27.4687 8.73379ZM15.2031 3.45244L24.625 9.73376L20.4219 12.5463L15.2031 9.06187V3.45244ZM12.7969 3.45244V9.06187L7.57809 12.5463L3.37498 9.73376L12.7969 3.45244ZM2.40625 11.9838L5.42187 13.9994L2.40625 16.015V11.9838ZM12.7969 24.5464L3.37498 18.265L7.57809 15.4525L12.7969 18.9369V24.5464ZM14 16.8432L9.74994 13.9994L14 11.1556L18.25 13.9994L14 16.8432ZM15.2031 24.5464V18.9369L20.4219 15.4525L24.625 18.265L15.2031 24.5464ZM25.5937 16.015L22.5781 13.9994L25.5937 11.9838V16.015Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Codepen;
