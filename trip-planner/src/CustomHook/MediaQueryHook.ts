import {useMediaQuery} from "react-responsive";

export function useIsMobileDevice() {
    return useMediaQuery({query: "(min-device-width: 480px)",})
}

export function useIsTabletDevice() {
    return useMediaQuery({query: "(min-device-width: 768px)",})
}

export function useIsLaptop() {
    return useMediaQuery({query: "(min-device-width: 1024px)",})
}

export function useIsDesktop() {
    return useMediaQuery({query: "(min-device-width: 1200px)",})
}

export function useIsBigScreen() {
    return useMediaQuery({query: "(min-device-width: 1201)",})
}