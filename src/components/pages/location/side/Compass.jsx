import React from 'react';

const Compass = () => {
    return (
        <div className={'vie-compass-container'}>
            <div className={'compass-inner-container'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="122" viewBox="0 0 120 122" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M60.2346 20.2665C60.0876 20.3872 57.4794 26.4595 54.4388 33.7604C50.3234 43.6419 48.9361 47.1257 49.0106 47.3907C49.1749 47.9743 49.5421 48.3122 50.0123 48.3122C50.2594 48.3122 52.7549 47.207 55.6651 45.8086L60.8755 43.3048L66.086 45.8086C68.9962 47.207 71.4917 48.3122 71.7388 48.3122C72.209 48.3122 72.5761 47.9743 72.7405 47.3907C72.815 47.1257 71.4277 43.6419 67.3123 33.7604C64.2717 26.4595 61.6635 20.3872 61.5165 20.2665C61.1738 19.9854 60.5773 19.9854 60.2346 20.2665ZM59.6462 37.7367L59.6059 41.2181L56.1062 42.9048C54.1813 43.8325 52.5793 44.5622 52.5462 44.5265C52.5132 44.4906 54.088 40.608 56.046 35.8985L59.6059 27.3357L59.6462 30.7955C59.6684 32.6983 59.6684 35.8219 59.6462 37.7367ZM65.7311 35.9183C67.6814 40.61 69.2472 44.4806 69.2109 44.52C69.1744 44.5593 67.5698 43.8325 65.6449 42.9048L62.1452 41.218L62.1062 34.2341C62.0848 30.393 62.0938 27.2812 62.1262 27.3194C62.1586 27.3573 63.7809 31.2269 65.7311 35.9183Z"
                          fill="#8C523A"/>
                    <path
                        d="M60.5255 11.393C58.9537 11.393 57.7036 10.9025 56.7753 9.92143C55.847 8.92981 55.3828 7.52151 55.3828 5.69651C55.3828 3.87152 55.847 2.46849 56.7753 1.48742C57.7036 0.495807 58.9537 0 60.5255 0C61.7492 0 62.7514 0.300649 63.532 0.901948C64.3126 1.50325 64.8665 2.33663 65.1935 3.40208H63.1364C62.63 2.29443 61.7597 1.7406 60.5255 1.7406C59.555 1.7406 58.7849 2.08345 58.2152 2.76914C57.6456 3.44428 57.3608 4.42007 57.3608 5.69651C57.3608 6.97295 57.6456 7.95402 58.2152 8.63971C58.7849 9.31485 59.555 9.65243 60.5255 9.65243C61.7597 9.65243 62.63 9.0986 63.1364 7.99094L65.1935 7.99094C64.8665 9.0564 64.3126 9.88978 63.532 10.4911C62.7514 11.0924 61.7492 11.393 60.5255 11.393Z"
                        fill="#8C523A"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M21.3359 50.1443C24.3892 36.4093 34.7102 25.1711 48.0768 21.0268C49.951 20.4458 50.3863 20.4299 50.9473 20.9226C51.3069 21.2385 51.3558 22.1727 51.0356 22.6101C50.9142 22.7758 49.7417 23.2714 48.4301 23.7111C38.8247 26.9317 31.1159 33.6584 26.786 42.5982C24.5873 47.1375 23.3259 51.8921 23.1286 56.3842L23.082 57.4442L24.2007 57.5332C25.4116 57.6295 25.82 57.9305 25.82 58.7262C25.82 59.3688 25.5299 59.7726 24.9141 59.9873C24.1843 60.2417 16.3094 60.2516 15.6449 59.9989C14.6799 59.632 14.393 58.6262 15.0517 57.9192C15.3887 57.5572 15.5689 57.5325 17.8638 57.5325H20.316L20.4257 56.34C20.667 53.7186 20.9116 52.053 21.3359 50.1443ZM69.2297 22.7068C68.7971 22.1893 68.8448 21.5524 69.3542 21.0431C69.5927 20.8046 69.9264 20.6094 70.0958 20.6094C70.6345 20.6094 73.2499 21.4701 75.2226 22.2967C84.9171 26.359 92.7898 34.3692 96.6152 44.0628C97.9029 47.3263 99.2641 52.6892 98.997 53.4475C98.7913 54.0317 98.3578 54.3525 97.7742 54.3525C97.0268 54.3525 96.532 53.8702 96.3796 52.9933C93.9734 39.1564 84.7323 28.2426 71.6585 23.7971C70.3984 23.3687 69.4134 22.9265 69.2297 22.7068ZM94.1767 59.4689C93.8986 58.9494 93.9763 58.2665 94.357 57.8858C94.6932 57.5496 94.9458 57.5325 99.5611 57.5325C104.324 57.5325 104.418 57.5396 104.772 57.9192C105.18 58.3566 105.232 59.064 104.891 59.5131C104.496 60.0336 103.764 60.1825 101.601 60.1825H99.5051L99.4033 61.1983C98.3179 72.0309 94.8544 79.6547 87.8244 86.6855C83.2347 91.2758 78.2333 94.3823 72.2768 96.3424C69.2876 97.3261 66.8724 97.7928 62.3407 98.2624L61.325 98.3677V100.344C61.325 103.167 61.0079 103.984 59.9118 103.984C58.8158 103.984 58.4987 103.167 58.4987 100.344V98.3677L57.483 98.2631C51.6796 97.6662 47.9366 96.7399 43.7825 94.8725C39.2041 92.8146 35.6262 90.3342 31.9886 86.6961C27.4562 82.163 24.3821 77.221 22.4007 71.2827C21.7203 69.2433 20.8676 65.6165 20.8266 64.5869C20.7917 63.7123 21.2511 63.1858 22.0495 63.1858C22.798 63.1858 23.2929 63.6693 23.4409 64.5451C24.0371 68.0676 25.2107 71.7179 26.7814 74.9341C29.7133 80.9375 33.9896 85.8257 39.5267 89.5032C44.8008 93.0061 50.4281 94.927 57.3947 95.6027L58.4987 95.7098L58.5086 95.0386C58.5248 93.9553 58.8769 93.1605 59.4261 92.9677C60.5327 92.5796 61.2905 93.4059 61.3151 95.0271L61.325 95.6868L62.429 95.5886C71.8069 94.7545 79.6256 91.1832 85.9736 84.8344C92.3216 78.4856 95.8924 70.6658 96.7263 61.2866L96.8245 60.1825H96.1471C95.2536 60.1825 94.3915 59.8701 94.1767 59.4689ZM58.248 119.778C59.1235 120.612 60.2365 121.028 61.5867 121.028C63.0531 121.028 64.2346 120.532 65.1312 119.541C66.0385 118.549 66.4921 117.146 66.4921 115.332C66.4921 113.517 66.0385 112.114 65.1312 111.123C64.2346 110.131 63.0531 109.635 61.5867 109.635C60.247 109.635 59.1341 110.057 58.248 110.901C57.3724 111.735 56.8607 112.921 56.7131 114.461H55.099V109.793H53.1211V120.87H55.099V116.202H56.7131C56.8607 117.753 57.3724 118.945 58.248 119.778ZM61.5867 119.288C60.7112 119.288 60.0044 118.955 59.4664 118.291C58.9284 117.616 58.6594 116.629 58.6594 115.332C58.6594 114.034 58.9284 113.053 59.4664 112.389C60.0044 111.713 60.7112 111.376 61.5867 111.376C62.4623 111.376 63.1691 111.713 63.7071 112.389C64.2451 113.053 64.5141 114.034 64.5141 115.332C64.5141 116.629 64.2451 117.616 63.7071 118.291C63.1691 118.955 62.4623 119.288 61.5867 119.288ZM112.744 62.458H115.75C116.246 62.458 116.631 62.3262 116.905 62.0624C117.19 61.7987 117.332 61.4295 117.332 60.9548C117.332 60.4906 117.19 60.1267 116.905 59.8629C116.631 59.5887 116.246 59.4515 115.75 59.4515H112.744V62.458ZM110.766 64.1986V53.1221H115.829C116.884 53.1221 117.702 53.3963 118.282 53.9449C118.862 54.4935 119.152 55.2477 119.152 56.2077C119.152 56.7351 119.015 57.2098 118.741 57.6318C118.477 58.0538 118.139 58.3702 117.728 58.5812C118.192 58.7922 118.572 59.1192 118.867 59.5623C119.163 59.9948 119.31 60.5117 119.31 61.113C119.31 62.073 119.02 62.8272 118.44 63.3758C117.86 63.9243 117.042 64.1986 115.987 64.1986H110.766ZM112.744 57.8692H115.592C116.077 57.8692 116.462 57.7373 116.747 57.4736C117.032 57.1993 117.174 56.8301 117.174 56.3659C117.174 55.9018 117.032 55.5378 116.747 55.2741C116.462 54.9998 116.077 54.8627 115.592 54.8627H112.744V57.8692ZM1.25007 63.6461C2.02015 64.2263 3.02759 64.5164 4.27238 64.5164C5.64377 64.5164 6.69868 64.221 7.43711 63.6303C8.17555 63.029 8.54477 62.2695 8.54477 61.3517C8.54477 60.7082 8.37598 60.1649 8.03841 59.7218C7.71139 59.2788 7.2736 58.9518 6.72505 58.7408C7.22086 58.572 7.62172 58.2766 7.92765 57.8547C8.23357 57.4221 8.38653 56.9 8.38653 56.2881C8.38653 55.3387 8.03314 54.5739 7.32635 53.9937C6.61956 53.4135 5.60157 53.1234 4.27238 53.1234C3.08034 53.1234 2.12564 53.4135 1.4083 53.9937C0.690966 54.5633 0.274277 55.3809 0.158236 56.4464H2.13619C2.21004 55.94 2.44212 55.5497 2.83243 55.2754C3.22275 55.0011 3.70273 54.864 4.27238 54.864C4.93698 54.864 5.45916 55.0064 5.83893 55.2912C6.21869 55.5761 6.40858 55.9611 6.40858 56.4464C6.40858 56.9105 6.22924 57.2797 5.87057 57.554C5.52245 57.8177 4.98972 57.9496 4.27238 57.9496H3.24385V59.6902H4.27238C5.802 59.6902 6.56681 60.1913 6.56681 61.1934C6.56681 61.6893 6.37693 62.0796 5.99716 62.3644C5.61739 62.6387 5.04247 62.7758 4.27238 62.7758C3.67109 62.7758 3.15418 62.6439 2.72167 62.3802C2.2997 62.1165 2.0518 61.7209 1.97796 61.1934H0C0.0738437 62.2484 0.490533 63.0659 1.25007 63.6461Z"
                          fill="#181D23"/>
                </svg>
            </div>
        </div>
    );
};

export default Compass;