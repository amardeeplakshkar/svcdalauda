type Props = {
    size: number,
    color: string
}

export const BellIcon = ({ color, size }: Props) => {
    return (<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V8L15 10V12H1V10L3 8V5Z" fill={color} />
        <path d="M7.99999 16C6.69378 16 5.58254 15.1652 5.1707 14H10.8293C10.4175 15.1652 9.30621 16 7.99999 16Z" fill={color} />
    </svg>);
}


export const CalenderIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg fill={color} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z" /></svg>
        </div>
    );
}

export const DepartmentIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} fill="none" viewBox="0 0 15 15" id="college" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1&#xA; C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1&#xA; c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z" fill={color} />
            </svg>
        </div>
    );
}


export const MailIcon = ({ size, color }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z" fill={color} /></svg>
        </div>
    );
}

export const MailDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="injected-svg" data-src="https://cdn.hugeicons.com/icons/mail-open-01-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M14.8993 21.4641C12.9607 21.512 11.0393 21.512 9.10072 21.4641C5.95183 21.3863 4.37738 21.3473 3.24611 20.2241C2.11484 19.101 2.08186 17.5843 2.01592 14.551C1.98361 13.065 2.00049 11.5935 2.06656 10.0922L8.5 14.0001C9.4861 14.2339 10.9931 13.0565 12 13.0565C13.0069 13.0565 14.0139 14.2339 15 14.0001L21.9334 10.0922C21.9995 11.5935 22.0164 13.065 21.9841 14.551C21.9181 17.5843 21.8852 19.101 20.7539 20.2241C19.6226 21.3473 18.0482 21.3863 14.8993 21.4641Z" fill={color}></path>
                <path d="M2 19L8.91302 14.2905C11.4387 12.5698 12.5613 12.5698 15.087 14.2905L22 19" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path d="M2.01592 14.551C2.08186 17.5843 2.11484 19.1009 3.24611 20.2241C4.37738 21.3473 5.95183 21.3862 9.10072 21.4641C11.0393 21.512 12.9607 21.512 14.8993 21.4641C18.0482 21.3862 19.6226 21.3473 20.7539 20.2241C21.8852 19.1009 21.9181 17.5843 21.9841 14.551C22.0164 13.0649 21.9995 11.5934 21.9334 10.0921C21.8924 9.15964 21.8719 8.69341 21.6354 8.27984C21.3989 7.86628 20.9913 7.59935 20.176 7.0655L16.4152 4.60286C14.2742 3.20096 13.2038 2.5 12 2.5C10.7962 2.5 9.72577 3.20095 7.58483 4.60286L3.82397 7.0655C3.00869 7.59935 2.60106 7.86628 2.36459 8.27984C2.12812 8.69341 2.1076 9.15965 2.06656 10.0921C2.00049 11.5934 1.98361 13.0649 2.01592 14.551Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path d="M22 9.5L17.7346 12.6072C16.7004 13.3606 15.8504 14 14.5 14M2 9.5L6.26538 12.6072C7.29955 13.3606 8.14961 14 9.5 14" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}

export const DepartmentDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/departement-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M21 13.8829L20.9999 9.12817C20.9993 7.99289 20.999 7.42525 20.723 6.94931C20.447 6.47337 19.9544 6.19544 18.9692 5.63957L13.944 2.80421C12.9938 2.26807 12.5187 2 12 2C11.4813 2 11.0062 2.26807 10.056 2.80421L5.0308 5.63957C4.04562 6.19544 3.55303 6.47337 3.277 6.94931C3.00096 7.42525 3.00069 7.99289 3.00013 9.12817L3 13.8829C3 17.7094 3 19.6226 4.17157 20.8113C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8113C21 19.6226 21 17.7094 21 13.8829Z" fill={color}></path>
                <path d="M21 13.8829L20.9999 9.12817C20.9993 7.99289 20.999 7.42525 20.723 6.94931C20.447 6.47337 19.9544 6.19544 18.9692 5.63957L13.944 2.80421C12.9938 2.26807 12.5187 2 12 2C11.4813 2 11.0062 2.26807 10.056 2.80421L5.0308 5.63957C4.04562 6.19544 3.55303 6.47337 3.277 6.94931C3.00096 7.42525 3.00069 7.99289 3.00013 9.12817L3 13.8829C3 17.7094 3 19.6226 4.17157 20.8113C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8113C21 19.6226 21 17.7094 21 13.8829Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path>
                <path d="M10 13H8M16 13H14M10 9H8M10 17H8M16 9H14M16 17H14" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
        </div>
    );
}

export const BellDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/notification-01-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V12.2558C19 13.0514 19.3161 13.8145 19.8787 14.3771L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z" fill={color}></path>
                <path d="M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V12.2558C19 13.0514 19.3161 13.8145 19.8787 14.3771L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}

export const CalenderDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/calendar-mortarboard-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M17.4642 18.8143L21.5358 17.1857C21.8161 17.0735 22 16.802 22 16.5C22 16.198 21.8161 15.9265 21.5358 15.8143L17.4642 14.1857C17.1576 14.063 16.8303 14 16.5 14C16.1697 14 15.8424 14.063 15.5358 14.1857L11.4642 15.8143C11.1839 15.9265 11 16.198 11 16.5C11 16.802 11.1839 17.0735 11.4642 17.1857L15.5358 18.8143C15.8424 18.937 16.1697 19 16.5 19C16.8303 19 17.1576 18.937 17.4642 18.8143Z" fill={color}></path>
                <path opacity="0.4" d="M12.0001 4H10.0001C6.22886 4 4.34324 4 3.17167 5.17157C2.22859 6.11466 2.04466 7.52043 2.00879 10H19.9914C19.9555 7.52043 19.7716 6.11466 18.8285 5.17157C17.657 4 15.7713 4 12.0001 4Z" fill={color}></path>
                <path d="M15 2V6M7 2V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 10H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.4642 18.8143L21.5358 17.1857C21.8161 17.0735 22 16.802 22 16.5C22 16.198 21.8161 15.9265 21.5358 15.8143L17.4642 14.1857C17.1576 14.063 16.8303 14 16.5 14C16.1697 14 15.8424 14.063 15.5358 14.1857L11.4642 15.8143C11.1839 15.9265 11 16.198 11 16.5C11 16.802 11.1839 17.0735 11.4642 17.1857L15.5358 18.8143C15.8424 18.937 16.1697 19 16.5 19C16.8303 19 17.1576 18.937 17.4642 18.8143Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M22 16.5V19.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13.5 18V20.1538C13.5 20.6435 13.8161 21.1131 14.3787 21.4593C14.9413 21.8055 15.7044 22 16.5 22C17.2956 22 18.0587 21.8055 18.6213 21.4593C19.1839 21.1131 19.5 20.6435 19.5 20.1538V18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}

export const ScienceDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/ai-chemistry-02-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path d="M14.9998 22H6.40743C5.07774 22 3.99982 20.9221 3.99982 19.5924C3.99982 19.2033 4.09413 18.8199 4.27469 18.4752L9.49982 8.5V2H14.4998V8.5L16.4998 12.3181" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7.99991 2H15.9999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7.99991 11.5H15.9999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18.4999 15L18.242 15.697C17.9038 16.611 17.7347 17.068 17.4013 17.4014C17.0679 17.7348 16.6109 17.9039 15.6969 18.2421L14.9999 18.5L15.6969 18.7579C16.6109 19.0961 17.0679 19.2652 17.4013 19.5986C17.7347 19.932 17.9038 20.389 18.242 21.303L18.4999 22L18.7578 21.303C19.096 20.389 19.2651 19.932 19.5985 19.5986C19.9319 19.2652 20.3889 19.0961 21.3029 18.7579L21.9999 18.5L21.3029 18.2421C20.3889 17.9039 19.9319 17.7348 19.5985 17.4014C19.2651 17.068 19.096 16.611 18.7578 15.697L18.4999 15Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path opacity="0.4" d="M6.40743 22.0254H17.5923C17.8948 22.0254 18.1842 21.9696 18.4509 21.8678L18.2419 21.303C17.9037 20.389 17.7346 19.932 17.4012 19.5986C17.0678 19.2652 16.6108 19.0961 15.6968 18.7579L14.9998 18.5L15.6968 18.2421C16.6108 17.9039 17.0678 17.7348 17.4012 17.4014C17.7346 17.068 17.9097 16.5947 18.2479 15.6808L18.2479 15.6807L16.0713 11.5254H7.92839L4.27469 18.5006C4.09413 18.8453 3.99982 19.2287 3.99982 19.6178C3.99982 20.9475 5.07774 22.0254 6.40743 22.0254Z" fill={color}></path>
            </svg>
        </div>
    );
}


export const ArtsDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/books-02-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M7 15H3V21H14.7857C15.7842 21 16.2834 21 16.6772 20.8478C17.2022 20.6448 17.6194 20.2554 17.8369 19.7654C18 19.3978 18 18.9319 18 18C18 17.0681 18 16.6022 17.8369 16.2346C17.6194 15.7446 17.2022 15.3552 16.6772 15.1522C16.2834 15 15.7842 15 14.7857 15H13V15.1905C13 16.3045 13 16.8616 12.6735 16.9803C12.3469 17.0991 11.9782 16.6761 11.2407 15.8303L10.7593 15.278C10.6662 15.1713 10.5854 15.0786 10.5126 15H9.48736C9.41462 15.0786 9.33382 15.1713 9.24074 15.278L8.75926 15.8303C8.02179 16.6761 7.65305 17.0991 7.32653 16.9803C7 16.8616 7 16.3045 7 15.1905V15Z" fill={color}></path>
                <path opacity="0.4" d="M3 3H14C14.9319 3 15.3978 3 15.7654 3.15224C16.2554 3.35523 16.6448 3.74458 16.8478 4.23463C17 4.60218 17 5.06812 17 6C17 6.93188 17 7.39782 16.8478 7.76537C16.6448 8.25542 16.2554 8.64477 15.7654 8.84776C15.3978 9 14.9319 9 14 9H3V3Z" fill={color}></path>
                <path d="M3 9H18C18.9319 9 19.3978 9 19.7654 9.15224C20.2554 9.35523 20.6448 9.74458 20.8478 10.2346C21 10.6022 21 11.0681 21 12C21 12.9319 21 13.3978 20.8478 13.7654C20.6448 14.2554 20.2554 14.6448 19.7654 14.8478C19.3978 15 18.9319 15 18 15H13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6 15H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13 15H15C15.9319 15 16.3978 15 16.7654 15.1522C17.2554 15.3552 17.6448 15.7446 17.8478 16.2346C18 16.6022 18 17.0681 18 18C18 18.9319 18 19.3978 17.8478 19.7654C17.6448 20.2554 17.2554 20.6448 16.7654 20.8478C16.3978 21 15.9319 21 15 21H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 3H14C14.9319 3 15.3978 3 15.7654 3.15224C16.2554 3.35523 16.6448 3.74458 16.8478 4.23463C17 4.60218 17 5.06812 17 6C17 6.93188 17 7.39782 16.8478 7.76537C16.6448 8.25542 16.2554 8.64477 15.7654 8.84776C15.3978 9 14.9319 9 14 9H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13 9L13 15.1905C13 16.3045 13 16.8616 12.6735 16.9803C12.3469 17.0991 11.9782 16.6761 11.2407 15.8303L10.7593 15.278C10.4064 14.8733 10.23 14.6709 10 14.6709C9.77003 14.6709 9.5936 14.8733 9.24074 15.278L8.75926 15.8303C8.02179 16.6761 7.65305 17.0991 7.32653 16.9803C7 16.8616 7 16.3045 7 15.1905L7 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}


export const BusinessDuoIcon = ({ color, size }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/briefcase-06-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M22 14V13.5C22 12.5498 22 11.7363 21.9755 11.0353C21.6946 11.43 18.9611 15 12 15C5.03888 15 2.3054 11.43 2.02448 11.0353C2 11.7363 2 12.5498 2 13.5V14C2 17.2998 2 18.9497 3.02513 19.9748C4.05025 21 5.70017 21 8.99999 21H9H15H15C18.2998 21 19.9497 21 20.9749 19.9748C22 18.9497 22 17.2998 22 14Z" fill={color}></path>
                <path d="M8.5 6.5C8.5 5.09554 8.5 4.39331 8.83706 3.88886C8.98298 3.67048 9.17048 3.48298 9.38886 3.33706C9.89331 3 10.5955 3 12 3C13.4045 3 14.1067 3 14.6111 3.33706C14.8295 3.48298 15.017 3.67048 15.1629 3.88886C15.5 4.39331 15.5 5.09554 15.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M22 14V13.5C22 10.2002 22 8.55025 20.9749 7.52513C19.9497 6.5 18.2998 6.5 15 6.5H9C5.70017 6.5 4.05025 6.5 3.02513 7.52513C2 8.55025 2 10.2002 2 13.5V14C2 17.2998 2 18.9497 3.02513 19.9749C4.05025 21 5.70017 21 9 21H15C18.2998 21 19.9497 21 20.9749 19.9749C22 18.9497 22 17.2998 22 14Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 11C2 11 4.63158 15 12 15C19.3684 15 22 11 22 11" stroke={color} strokeWidth="1.5" strokeLinejoin="round"></path>
                <path d="M12 12H12.009" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}

export const MortarboardDuoIcon = ({ size, color }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-src="https://cdn.hugeicons.com/icons/mortarboard-02-duotone-rounded.svg?v=1.0.1" role="img" color={color}>
                <path opacity="0.4" d="M2.00195 8C2.00195 9.34178 10.1082 13 12.002 13C13.8958 13 22.002 9.34178 22.002 8C22.002 6.65822 13.8958 3 12.002 3C10.1082 3 2.00195 6.65822 2.00195 8Z" fill={color}></path>
                <path opacity="0.4" d="M20.502 16.5078C20.1938 17.2882 19.4037 18.3736 19.0734 19.764C18.8354 20.7661 19.1889 21.0006 20.1866 21.0006H20.8174C21.8151 21.0006 22.1686 20.7661 21.9306 19.764C21.6003 18.3736 20.8102 17.2882 20.502 16.5078Z" fill={color}></path>
                <path d="M2.00195 8C2.00195 9.34178 10.1082 13 12.002 13C13.8958 13 22.002 9.34178 22.002 8C22.002 6.65822 13.8958 3 12.002 3C10.1082 3 2.00195 6.65822 2.00195 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6.00195 11L6.2474 16.6299C6.25231 16.7426 6.26451 16.8555 6.29723 16.9635C6.39834 17.2973 6.5847 17.6006 6.86902 17.8044C9.09357 19.3985 14.9104 19.3985 17.1349 17.8044C17.4193 17.6006 17.6056 17.2973 17.7067 16.9635C17.7394 16.8555 17.7516 16.7426 17.7566 16.6299L18.002 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20.4793 9.49951V16.5006M20.4793 16.5006C19.6883 17.9471 19.3385 18.7221 18.9832 20.0011C18.9061 20.4562 18.9673 20.6855 19.2805 20.8891C19.4078 20.9718 19.5607 21.0012 19.7123 21.0012H21.2309C21.3923 21.0012 21.5552 20.9675 21.6882 20.8757C21.9793 20.6747 22.0542 20.4541 21.9753 20.0011C21.6639 18.8135 21.2672 18.0016 20.4793 16.5006Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}

export const MicDuoIcon = ({ size, color }: Props) => {
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" color={color}>
                <path opacity="0.4" d="M14.9263 2.91103L8.27352 6.10452C8.02311 6.22472 7.76432 6.30086 7.5 6.33267V12.6673C7.76432 12.6991 8.02312 12.7753 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z" fill={color}></path>
                <path d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7.5 12.5V6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    );
}