import { Fragment, MouseEventHandler } from "react";

const Icon = ({
    all = false, onClick, type, searchTerms = ""
}: {
    type: string,
    onClick?: (e?: MouseEventHandler<any>, icon?: string) => void,
    searchTerms?: string,
    all?: boolean
}) => {
    // console.log(props);
    // const { all, onClick, type, searchTerms } = props;

    let icons = [
        {

            type: "interrogationPoint",
            names: ["unknown"],
            outHtml: (
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className='filled'>
                    <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 0 9 0ZM9 14.4C8.822 14.4 8.64799 14.3472 8.49999 14.2483C8.35198 14.1494 8.23663 14.0089 8.16851 13.8444C8.10039 13.68 8.08257 13.499 8.1173 13.3244C8.15202 13.1498 8.23774 12.9895 8.36361 12.8636C8.48947 12.7377 8.64984 12.652 8.82442 12.6173C8.999 12.5826 9.17996 12.6004 9.34442 12.6685C9.50887 12.7366 9.64943 12.852 9.74832 13C9.84722 13.148 9.9 13.322 9.9 13.5C9.9 13.7387 9.80518 13.9676 9.6364 14.1364C9.46762 14.3052 9.2387 14.4 9 14.4ZM9.9 9.756V10.8C9.9 11.0387 9.80518 11.2676 9.6364 11.4364C9.46762 11.6052 9.2387 11.7 9 11.7C8.76131 11.7 8.53239 11.6052 8.36361 11.4364C8.19482 11.2676 8.1 11.0387 8.1 10.8V9C8.1 8.7613 8.19482 8.53238 8.36361 8.3636C8.53239 8.19482 8.76131 8.1 9 8.1C9.26701 8.1 9.52801 8.02082 9.75002 7.87248C9.97203 7.72414 10.1451 7.5133 10.2472 7.26662C10.3494 7.01994 10.3762 6.7485 10.3241 6.48663C10.272 6.22475 10.1434 5.9842 9.9546 5.7954C9.76579 5.6066 9.52525 5.47803 9.26337 5.42594C9.0015 5.37385 8.73006 5.40058 8.48338 5.50276C8.2367 5.60494 8.02586 5.77797 7.87752 5.99998C7.72918 6.22198 7.65 6.48299 7.65 6.75C7.65 6.98869 7.55518 7.21761 7.3864 7.38639C7.21762 7.55518 6.9887 7.65 6.75 7.65C6.51131 7.65 6.28239 7.55518 6.11361 7.38639C5.94482 7.21761 5.85 6.98869 5.85 6.75C5.84765 6.16527 6.0081 5.59143 6.31338 5.09272C6.61867 4.594 7.05674 4.19011 7.57856 3.92625C8.10037 3.6624 8.68533 3.54899 9.26795 3.59873C9.85056 3.64848 10.4078 3.8594 10.8774 4.2079C11.3469 4.5564 11.7102 5.02871 11.9265 5.57196C12.1428 6.1152 12.2037 6.70794 12.1022 7.28381C12.0008 7.85967 11.741 8.39594 11.3521 8.83256C10.9632 9.26918 10.4604 9.58893 9.9 9.756Z" />
                </svg>
            )
        },
        {
            type: "kebab",
            names: [],
            outHtml: (
                <svg viewBox="0 0 24 24" className="outlined" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="18" r="1.5" />
                </svg>

            )
        },
        {
            type: "round",
            names: [],
            outHtml: (
                <svg viewBox="0 0 8 9" className="filled" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.817871" width="8" height="8" rx="4" />
                </svg>
            )
        },
        {
            type: "link",
            names: [],
            outHtml: (
                <svg viewBox="0 0 175 140" className="filled" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M174.294 75.7536C174.369 62.3134 173.95 50.5581 173.013 39.817C171.701 24.78 163.339 16.4959 148.833 15.8542C142.673 15.582 136.402 15.7895 130.338 15.9839C127.581 16.074 124.73 16.168 121.929 16.2146C121.023 16.2295 120.123 16.2249 119.346 16.221H118.93C118.614 15.3168 118.311 14.4354 118.013 13.5708C117.284 11.4533 116.59 9.4499 115.833 7.46527C115.805 7.3661 115.778 7.2657 115.75 7.16718C115.393 5.79388 114.656 4.54941 113.625 3.57703C111.718 1.35971 109.084 0.28303 105.74 0.367937C101.201 0.486548 96.5835 0.5708 92.1183 0.651819C85.2767 0.776264 78.2016 0.904681 71.2455 1.16135C67.5099 1.29876 65.4653 1.95092 64.1417 3.61342C63.2705 4.13049 62.557 4.87616 62.0783 5.77023C60.421 9.30076 59.4689 13.122 59.2755 17.0188H58.1521C56.3675 17.0188 54.7193 17.0139 53.0705 17.0242C51.0957 17.0352 49.1202 17.0352 47.1448 17.0359C42.3381 17.0359 37.3669 17.0358 32.4788 17.2005C26.5242 17.4203 20.6635 18.7557 15.1998 21.1378C7.51144 24.4434 3.6685 29.8741 3.45051 37.7336C3.30304 43.075 3.09608 48.5059 2.89621 53.7572C2.72286 58.3085 2.54324 63.0149 2.40287 67.6465C2.32784 70.138 2.3237 72.6716 2.31917 75.1216C2.31141 79.4273 2.30317 83.88 1.90795 88.2097C0.907289 99.1666 1.0838 107.959 2.46351 115.878C3.71062 123.033 7.05605 128.816 12.1402 132.601C16.7689 136.145 22.3892 138.147 28.2118 138.326C31.2536 138.412 34.2952 138.506 37.3367 138.607C44.8937 138.85 52.7074 139.101 60.399 139.161C76.6964 139.291 91.9793 139.356 106.652 139.356C113.375 139.356 119.983 139.342 126.475 139.316C133.812 139.286 141.741 138.947 150.717 138.278C162.037 137.436 169.729 131.214 172.957 120.279C174.056 116.619 174.642 112.822 174.698 109.001C174.73 103.442 174.612 97.7945 174.498 92.3325C174.38 86.8959 174.26 81.2777 174.294 75.7536ZM164.808 93.4448C164.867 98.7349 164.929 104.026 164.994 109.317C165.044 113.435 164.081 117.503 162.188 121.159C160.464 124.529 157.919 126.53 154.604 127.101C150.96 127.832 147.264 128.266 143.551 128.401C130.412 128.499 117.051 128.484 104.128 128.472C99.4593 128.467 94.7917 128.464 90.1241 128.462C85.3524 128.462 80.5826 128.464 75.8147 128.467C64.2942 128.476 52.384 128.486 40.671 128.421C36.271 128.388 31.8758 128.123 27.5039 127.624C19.3841 126.709 13.6163 121.041 12.0761 112.463C10.3646 102.936 10.5607 93.1609 10.7496 83.7109C10.7826 82.0613 10.8144 80.4131 10.839 78.7655C10.8782 75.9811 10.9372 73.1869 11.0162 70.3843C12.7533 70.7265 14.5139 70.9372 16.2828 71.0137C20.5067 71.155 24.7997 71.1433 28.9524 71.1323C30.9304 71.1277 32.9077 71.1213 34.8838 71.1323C35.6516 71.1368 36.4096 71.1809 37.2874 71.2314C37.5228 71.2457 37.7642 71.2593 38.0138 71.2729C38.0138 72.0656 38.0089 72.8369 38.005 73.5926C37.9953 75.6667 37.9854 77.6254 38.0261 79.5874C38.1135 83.7776 39.8476 85.7739 43.8243 86.2633C47.5834 86.6729 51.3629 86.8648 55.144 86.8382H55.2779C62.5568 86.8382 65.304 84.033 65.3952 76.5326C65.4114 75.2104 65.4071 73.8863 65.4025 72.5368V71.2904H114.003C114.003 71.4486 114.003 71.6048 114.003 71.7584C113.998 72.5653 113.993 73.3139 114.015 74.058C114.055 75.4237 114.095 76.5618 114.214 77.7421C114.66 82.1806 116.607 84.07 120.941 84.2631C124.398 84.4174 128.102 84.3927 131.947 84.1834C135.704 83.9812 137.98 81.863 138.527 78.0571C138.764 76.4069 138.867 74.7204 138.975 72.9367C139.015 72.2788 139.056 71.5996 139.104 70.8912L144.521 70.8944C149.863 70.8976 155.089 70.9022 160.313 70.8769C161.722 70.8847 163.13 70.8199 164.533 70.6825C164.636 78.3313 164.722 85.9613 164.808 93.4448ZM77.4842 9.33252C81.9571 9.16724 86.4934 9.10508 90.9456 9.06036C95.6566 9.17638 100.496 9.29181 105.269 9.367C105.668 9.3659 106.065 9.40757 106.454 9.49138C106.907 9.97658 107.199 10.5911 107.287 11.2497C107.589 12.5576 107.981 13.8427 108.463 15.0953C108.552 15.6596 108.65 16.2234 108.756 16.7869H68.2583C69.8942 9.61446 70.0022 9.60993 77.4875 9.33317L77.4842 9.33252ZM130.158 71.2826C130.133 71.492 130.109 71.6994 130.085 71.9062C129.992 72.9445 129.824 73.9744 129.584 74.9887C129.423 75.4107 129.107 75.7555 128.701 75.9519C126.747 76.1625 124.775 76.2559 122.689 76.355C122.136 76.381 121.577 76.4075 121.008 76.4367L120.425 71.2826H130.158ZM55.9962 71.3546V77.5489H45.9667L45.1524 71.6767C47.2611 70.9074 52.3738 70.7505 55.9994 71.3546H55.9962ZM163.639 61.0711C163.421 61.0866 163.205 61.1015 162.987 61.1106C161.852 61.1573 160.718 61.2122 159.582 61.2673C157.119 61.3865 154.57 61.5092 152.069 61.5423C140.438 61.697 128.807 61.8405 117.176 61.9727C106.795 62.0959 96.414 62.2228 86.0335 62.3538C66.1296 62.613 46.2259 62.8853 26.323 63.1709L11.2224 63.3823C11.3847 58.5536 11.5737 53.7443 11.7606 49.0154C11.8589 46.5356 11.9559 44.0564 12.0512 41.5779C12.4095 32.1396 14.1338 29.9345 22.9075 27.6984C28.3113 26.3008 33.8613 25.5493 39.4414 25.4596C51.0237 25.319 62.8033 25.3386 74.1963 25.3567C83.4746 25.3723 93.0705 25.3885 102.508 25.3172C107.877 25.2777 113.322 25.0319 118.59 24.7947C122.78 24.6061 127.112 24.411 131.37 24.3216C137.209 24.1978 143.248 24.0707 149.168 24.6871C157.849 25.59 161.846 29.6318 162.964 38.6365C163.647 43.5527 164.075 48.5014 164.245 53.4623C164.293 55.978 164.338 58.5003 164.379 61.0289C164.132 61.038 163.884 61.0555 163.642 61.0711H163.639Z" />
                    </g>
                </svg>

            )
        },
        {
            type: "phone",
            names: [],
            outHtml: (
                <svg viewBox="0 0 144 145" className="filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.84 53.9137C47.6685 52.8538 48.5004 51.7968 49.3359 50.7431C51.4683 48.0434 53.6725 45.2512 55.7493 42.4341C58.4321 38.792 58.2492 37.111 54.819 33.8783C54.5337 33.61 54.2327 33.358 53.9311 33.1071C53.6996 32.9123 53.4635 32.7173 53.2366 32.5132L50.5526 30.0856C47.9728 27.7524 45.305 25.3396 42.7031 22.9457C40.7262 21.127 38.7569 19.3014 36.7951 17.4684C34.1747 15.0299 31.4653 12.5076 28.7731 10.0553C25.7632 7.30927 24.0401 7.314 21.1008 10.075C18.3005 12.7048 15.4729 15.3987 12.7385 18.003C10.2936 20.332 7.84433 22.6563 5.3909 24.9764C4.3144 25.9774 3.45732 27.1908 2.87373 28.5393C2.29013 29.8877 1.99267 31.3423 2.00014 32.8113C2.02096 35.1176 2.31373 37.4135 2.87242 39.6514C4.29228 45.7579 7.33864 51.2332 10.2855 56.5315L11.0148 57.8458C18.6599 71.6518 26.9325 82.6664 36.3123 91.5188C38.0488 93.1566 39.6926 94.969 41.2844 96.7218C43.4066 99.1683 45.694 101.467 48.1307 103.601C55.2688 109.564 63.1034 115.62 72.0804 122.118C79.4703 127.466 85.9722 131.337 92.5355 134.3C97.334 136.534 102.557 137.714 107.852 137.76C110.12 137.76 112.382 137.529 114.603 137.073L114.954 137.001C118.327 136.313 121.814 135.601 124.749 133.252C126.207 132.086 127.797 131.015 129.334 129.979C130.141 129.435 130.947 128.892 131.74 128.332C132.45 127.832 133.177 127.35 133.904 126.867C135.699 125.743 137.4 124.477 138.991 123.08C143.393 118.997 142.471 116.169 139.389 112.664C136.02 108.832 132.733 104.807 129.549 100.916C128.283 99.3666 127.013 97.819 125.741 96.2743C124.741 95.0638 123.746 93.8486 122.758 92.6276C120.848 90.28 118.874 87.8525 116.859 85.5216C113.031 81.0916 111.409 80.9494 106.657 84.6267C103.371 87.1704 100.058 89.7828 96.8483 92.3114C94.8277 93.9041 92.8053 95.4945 90.7805 97.0831C90.1716 97.56 89.5332 98.0034 88.9156 98.4324L88.5289 98.7006C87.2914 97.4091 86.0562 96.1182 84.8244 94.8273C72.2639 81.698 59.287 68.1282 45.0994 56.0257C45.2447 55.8522 45.3848 55.6856 45.5185 55.5255C46.0116 54.9341 46.4348 54.4299 46.84 53.9137ZM38.6305 57.7752C47.4287 67.2131 56.2218 76.657 65.0101 86.1061L77.423 99.444C77.9439 100.005 78.4747 100.558 79.0049 101.111C79.8946 102.036 80.8143 102.998 81.6716 103.975C84.4337 107.122 87.6173 107.518 92.3185 105.296C93.8014 104.518 95.1865 103.566 96.4449 102.462C96.8703 102.118 97.2946 101.775 97.7241 101.445C101.002 98.9324 104.265 96.4027 107.593 93.8249L111.24 90.9991L133.529 118.175C132.386 118.971 131.241 119.796 130.128 120.599C127.048 122.917 123.829 125.046 120.49 126.976C117.844 128.431 114.504 128.895 111.309 129.248C104.537 129.995 98.377 128.843 92.9911 125.833L91.9492 125.249C86.6124 122.266 81.0939 119.183 76.0315 115.653C69.0428 110.853 62.3197 105.678 55.8917 100.151C52.7642 97.3299 49.7808 94.3533 46.9528 91.2321C44.9379 89.0821 42.856 86.8593 40.7016 84.7782C35.153 79.4221 29.9192 72.9467 24.2316 64.398C19.1837 56.8139 15.3177 48.8639 12.2007 42.0885C11.0159 39.5119 9.85887 36.4483 10.2554 33.2578C10.3344 32.019 10.7617 30.828 11.4883 29.8208C14.934 25.914 18.5447 22.0294 22.0361 18.2734C23.0306 17.2044 24.0242 16.1342 25.0171 15.0628C32.8816 23.9465 41.4656 32.2962 49.6056 40.0127C47.0066 43.5748 43.9758 46.8016 40.5823 49.6191C40.3699 49.7926 40.151 49.9574 39.9323 50.1233C39.5031 50.4373 39.0913 50.7745 38.6988 51.1332C36.4003 53.3086 36.3795 55.3611 38.6305 57.7752Z" />
                </svg>

            )
        },
        {
            type: "mail",
            names: [],
            outHtml: (
                <svg viewBox="0 0 178 144" className="filled" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M176.582 68.1415C176.193 60.8736 175.883 53.4759 175.581 46.3229C175.288 39.3568 174.985 32.1533 174.609 25.0713C174.065 14.7867 168.774 7.29417 159.308 3.40359C155.965 2.0307 151.852 1.30472 146.741 1.18222C133.204 0.860342 119.439 0.711559 106.126 0.56691C101.387 0.515217 96.649 0.46112 91.9115 0.40465C91.7922 0.305737 91.6424 0.251378 91.4875 0.251299H80.4525C71.4852 0.251299 62.5185 0.253954 53.5531 0.258298C51.9122 0.258298 50.266 0.254587 48.6257 0.250025C43.6943 0.233084 38.5944 0.219024 33.5787 0.401468C26.7308 0.649721 21.4578 1.98858 16.9854 4.61576C7.92797 9.93791 3.09649 17.5349 2.62514 27.1972C2.37682 32.2854 2.29317 37.4607 2.21277 42.4661L2.16026 45.6C2.08765 49.801 2.01178 54.001 1.93268 58.2003C1.67788 72.0374 1.414 86.3455 1.30962 100.423C1.26747 106.027 1.55015 112.656 3.96137 119.34C7.52729 129.227 14.1048 135.618 24.07 138.88C33.3414 141.843 43.0098 143.363 52.7388 143.384C76.9223 143.698 102.288 143.846 132.141 143.846H137.94C143.426 143.94 148.903 143.344 154.242 142.073C166.482 138.926 173.735 131.387 175.801 119.662C176.458 115.685 176.914 111.676 177.168 107.652C178.062 95.4416 177.391 83.0674 176.742 71.0991L176.582 68.1415ZM63.4885 132.736C53.0131 132.704 41.8199 132.306 30.9451 129.625C26.5694 128.547 23.4398 127.284 20.9391 125.576L74.9078 75.696L76.4146 77.325C77.9162 78.9494 79.4664 80.6259 81.0322 82.2874C85.5641 87.0981 90.0105 87.4923 95.0223 83.5293C97.073 81.9089 99.0213 80.0753 100.905 78.3082C101.619 77.6371 102.34 76.9614 103.071 76.2889L155.893 129.871C154.067 131.379 151.86 131.695 149.535 132.028L148.867 132.124C146.37 132.458 143.852 132.613 141.332 132.587L126.557 132.641C105.884 132.718 84.5106 132.799 63.4885 132.736ZM145.959 21.38C138.055 28.5507 129.883 35.9648 122.091 43.5212C114.315 51.0613 106.691 58.9635 99.317 66.6077C96.2652 69.7718 93.1142 73.0388 90.0027 76.2264L24.3676 11.5338C24.8374 11.4082 25.3036 11.2814 25.7661 11.1532C27.5555 10.6639 29.2458 10.2004 30.9723 9.85959C39.5572 8.16547 48.3961 8.39587 56.9447 8.62197C58.8541 8.67149 60.7628 8.72049 62.6709 8.75176C65.5742 8.79737 68.5293 8.89466 71.386 8.98914C73.8672 9.07058 76.4327 9.15529 78.9594 9.20546C86.0647 9.34666 93.1699 9.48219 100.276 9.61211C115.635 9.90011 131.517 10.1989 147.134 10.5755C149.33 10.6973 151.513 11.0061 153.657 11.4988C154.499 11.6675 155.373 11.8407 156.24 11.9919V12.0135C152.824 15.1509 149.335 18.3175 145.957 21.3826L145.959 21.38ZM35.4148 100.077C28.8321 106.367 22.0329 112.866 15.4579 119.507C12.7271 113.032 11.3117 107.718 10.8903 102.389C9.72326 87.6069 10.2082 72.8929 10.8086 59.0891C11.0829 52.7942 11.1924 46.3916 11.2988 40.1996C11.3714 35.9904 11.4466 31.6377 11.5724 27.3633C11.702 22.8296 13.2107 19.6483 16.5848 16.8367L67.8693 67.4697C57.429 79.036 46.2384 89.7318 35.411 100.082L35.4148 100.077ZM164.703 118.401C164.463 119.7 164.142 120.982 163.742 122.24C163.598 122.728 163.454 123.217 163.318 123.706L163.112 123.775L108.749 70.5361C127.542 51.0534 145.364 34.4378 163.19 19.7771C163.266 20.1218 163.344 20.4573 163.421 20.7844C163.738 21.9717 163.949 23.1849 164.051 24.4102C164.652 36.7407 165.142 48.9096 165.502 58.1347C165.84 66.7915 166.128 75.3324 166.358 83.5222C166.647 93.8921 166.679 106.148 164.699 118.404L164.703 118.401Z" />
                    </g>
                </svg>


            )
        },
        {
            type: "linkedin",
            names: [],
            outHtml: (
                <svg viewBox="0 0 161 160" className="filled" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M112.307 53.906C104.571 46.3706 94.6231 45.5574 86.3447 51.7847C83.0905 54.2322 79.9611 57.6681 76.7779 62.2861C72.7243 68.1721 71.6781 75.3472 70.756 81.6763C69.123 92.8734 70.374 103.992 71.583 114.74C71.7621 116.328 72.1737 119.981 75.7422 119.981C75.8564 119.981 75.9745 119.978 76.0959 119.97C79.6402 119.743 79.6533 116.711 79.6618 114.704C79.6618 114.511 79.6618 114.323 79.6671 114.139C79.7117 111.733 79.6533 109.288 79.5962 106.926C79.5155 103.549 79.4308 100.058 79.6526 96.6585C80.0642 89.5267 80.901 82.4258 82.1585 75.3931C83.252 69.511 86.5291 64.2592 91.3328 60.6914C96.4385 56.8079 100.996 57.2666 105.271 62.09C108.508 65.7115 110.666 70.1667 111.501 74.9514C112.449 80.5113 113.102 86.2253 113.733 91.753C113.979 93.9071 114.225 96.0625 114.488 98.2133L114.376 98.2284C114.221 98.2494 114.079 98.3223 113.973 98.4358C113.866 98.5494 113.802 98.6958 113.791 98.8507C113.724 99.826 113.656 100.801 113.585 101.777C113.416 104.124 113.241 106.553 113.119 108.946L113.104 109.237C112.96 110.971 112.978 112.715 113.155 114.447C113.568 117.51 115.723 119.712 118.518 119.926C121.209 120.131 123.711 118.308 124.74 115.392C124.974 114.701 125.119 113.983 125.173 113.255C126.199 101.59 126.784 86.2372 122.16 70.9327C120.022 63.853 116.798 58.2818 112.307 53.906Z" />
                        <path d="M48.2102 113.282C48.2529 115.375 48.7742 117.431 49.7343 119.292C50.3368 120.456 52.3393 121.06 53.5765 121.06C53.6165 121.06 53.6552 121.06 53.6939 121.06C54.8557 121.023 56.2912 119.625 56.6076 118.549C57.0937 116.767 57.2908 114.918 57.1916 113.073C56.7978 102.277 56.3442 91.3014 55.9071 80.6877L55.0362 59.4604C54.9706 57.8438 54.8466 54.8337 51.1862 54.5318C51.0659 54.5233 50.9453 54.5459 50.8362 54.5975C48.0245 55.9607 48.1132 58.525 48.1848 60.5859C48.1972 60.9383 48.2096 61.2887 48.2083 61.6306C48.1571 75.7816 48.1085 94.4413 48.2102 113.282Z" />
                        <path d="M51.3855 33.6173C50.9411 33.2754 50.4818 32.9222 50.0781 32.5547C49.9845 32.4686 49.8682 32.4111 49.7431 32.3887C49.6179 32.3662 49.4889 32.3799 49.3712 32.4281C44.9251 34.2271 44.6416 37.3228 45.1864 39.6029C45.4543 40.5147 45.9129 41.3593 46.5319 42.0806C47.1508 42.8017 47.9159 43.3832 48.7765 43.7864C49.0325 43.8796 49.3036 43.9242 49.576 43.9178C50.9877 43.9178 52.8925 42.9372 53.5108 41.9363C53.9815 41.1155 54.273 40.2044 54.3662 39.2629C54.4596 38.3214 54.3526 37.3709 54.0522 36.4738C53.5685 35.2983 52.4586 34.445 51.3855 33.6173Z" />
                        <path d="M157.399 26.6781C155.064 7.50644 138.931 -0.1891 123.984 0.696299C115.114 1.21678 106.329 1.49438 95.8674 1.75035C86.3892 1.98269 76.6695 2.1824 68.0944 2.35829C55.7895 2.61164 43.0651 2.87409 30.4312 3.22326C15.9261 3.62494 4.23025 12.9686 1.98098 25.9464C1.07786 31.1544 1.05157 36.4104 1.10736 42.2472C1.27079 59.2929 1.5202 76.516 1.7637 93.1719L1.79061 94.9755C1.88731 101.676 1.98175 108.377 2.07408 115.078C2.08983 116.207 2.12921 117.339 2.1699 118.47L2.17327 118.561C2.3383 121.365 2.31048 124.177 2.08994 126.977C1.30956 134.454 4.17184 142.427 9.74745 148.302C15.9452 154.833 24.7289 158.154 34.4873 157.656C45.1357 157.105 55.9975 157.211 66.5015 157.312L67.2622 157.319C79.7274 157.438 92.4039 157.756 104.679 158.064L110.869 158.218C111.911 158.281 112.945 158.437 113.959 158.687C114.49 158.8 115.022 158.912 115.552 159.003C115.628 159.016 115.705 159.023 115.782 159.023H122.498C122.564 159.023 122.63 159.018 122.695 159.008C124.037 158.812 125.386 158.634 126.73 158.458L126.831 158.445C129.845 158.051 132.962 157.645 135.999 156.985C149.102 154.138 160.204 140.549 160.24 127.311C160.25 124.19 160.261 121.07 160.273 117.95L160.279 116.384C160.345 99.2824 160.417 81.598 160.049 64.1852C159.78 51.5198 158.889 38.9004 157.399 26.6781ZM150.114 126.387C150.154 136.612 141.235 146.186 129.809 148.182C121.054 149.711 112.105 149.191 103.449 148.69C100.237 148.504 96.9142 148.311 93.6129 148.224C89.8645 148.125 86.0479 147.931 82.3357 147.743L82.0075 147.727C80.41 147.646 78.8111 147.565 77.2254 147.493H77.1519C73.1128 147.493 69.073 147.488 65.0333 147.478C60.3458 147.47 55.5853 147.462 50.7999 147.462C44.5089 147.462 39.337 147.475 34.5228 147.504H34.3108C27.2446 147.504 21.4158 145.408 17.4541 141.441C13.3349 137.316 11.1854 131.156 11.2399 123.624C11.3672 105.914 11.2904 87.9848 11.2155 70.645C11.1735 60.7441 11.1302 50.5071 11.125 40.3923C11.0264 34.5669 12.3441 28.8047 14.9646 23.6012C17.9365 17.8858 23.2449 14.8528 31.6697 14.0567C43.4916 12.9409 53.0309 12.3331 61.69 12.1447C86.6885 11.5973 105.927 11.4037 124.068 11.5159C137.3 11.598 144.939 17.8228 147.433 30.5465C150.19 44.6512 150.15 59.1486 150.108 73.1759L150.105 74.3652C150.045 94.262 150.049 110.793 150.112 126.387H150.114Z" />
                    </g>
                </svg>

            )
        },
        {
            type: "arrowRight",
            names: [],
            outHtml: (
                <svg viewBox="0 0 145 145" className="filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M92.4688 72.9206C87.0212 68.6104 82.174 64.7459 77.2968 60.9142C69.3098 54.639 61.2034 48.5093 53.3589 42.0634C50.0883 39.3725 47.3364 36.0502 44.3993 32.9667C43.1385 31.6429 42.0364 29.9382 43.5322 28.3427C45.1921 26.5706 47.0035 27.6864 48.3891 29.0647C63.2938 43.894 81.7455 54.0745 98.1204 66.9788C102.946 70.7816 103.575 73.9831 99.4889 78.6884C98.2242 80.1964 96.8514 81.6103 95.381 82.9185C84.6925 92.0955 74.0736 101.362 63.1745 110.283C59.6749 113.147 55.4296 115.119 51.4397 117.347C50.7597 117.727 48.9686 117.573 48.8622 117.264C48.4684 116.126 48.0367 114.462 48.5847 113.638C50.7388 110.395 52.8864 106.989 55.7217 104.389C62.5647 98.1174 69.8068 92.2819 76.8604 86.2377C81.0085 82.683 85.0968 79.0579 89.2278 75.4822C90.1316 74.6998 91.1043 73.9944 92.4688 72.9206Z" />
                </svg>
            )
        },

    ];
    icons.forEach(icon => {
        // console.log("icons props", icon);

        let outHtml = {
            ...icon.outHtml
        };
        let htmlProps = {
            ...outHtml.props
        }
        // class 
        let className = htmlProps.className;
        className += " icon";
        className += " " + icon.type;
        className += " " + icon.names.join(" ");
        className += " " + type;

        htmlProps.className = className;

        // onclick
        if (onClick) {

            htmlProps.onClick = (e: any) => {
                onClick(e, icon.type);
            }
        }

        // out
        outHtml.props = htmlProps;

        let newIcon = icon;
        newIcon.outHtml = outHtml;

        // console.log("newIcon", newIcon);
        return newIcon
    });



    if (all) {
        if (searchTerms !== "") {
            icons = icons.filter(x => {
                let output = false;
                // console.log("x", x);
                const conditionForType = x.type.toLowerCase().includes(searchTerms.toLowerCase());
                const conditionForNames = x.names.some(name => name.toLowerCase().includes(searchTerms.toLowerCase()));
                if (conditionForType || conditionForNames) {
                    output = true;
                }

                return output;
            });

            // console.log("icons after Filter", icons);
        }
        const outHtml = (
            <Fragment>
                {
                    icons.map((icon, index) => {
                        // console.log("icon coucou", icon);
                        return (
                            <div className="iconWrapper" key={index} onClick={(e: any) => { onClick && onClick(e, icon.type) }}>
                                {icon.outHtml}
                                <h3>{icon.type}</h3>
                                {
                                    icon.names.length > 0 &&
                                    <h4>
                                        {
                                            icon.names.map((name, index) => (
                                                <span key={index}>{name}</span>
                                            ))
                                        }
                                    </h4>
                                }
                            </div>
                        )
                    })
                }
            </Fragment>
        );
        // console.log("outHtml", outHtml);

        return outHtml;
    } else {
        let icon = icons.find(icon => icon.type === type || icon.names.includes(type));
        // console.log("icon", icon); 
        return icon && icon !== undefined ? icon.outHtml : icons[0].outHtml;
    }

}

export default Icon;