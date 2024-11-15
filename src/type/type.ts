export interface HighEntropyValues {
    architecture?: string;
    bitness?: string;
    formFactor?: string;
    fullVersionList?: Array<{ brand: string; version: string }>;
    model?: string;
    platform?: string;
    platformVersion?: string;
    uaFullVersion?: string;
    wow64?: boolean;
}

export interface NavigatorUAData {
    getHighEntropyValues: (hints: string[]) => Promise<HighEntropyValues>;
    mobile: boolean;
    platform: string;
}

export type TNavigator = {
    userAgentData?: NavigatorUAData;
} & Navigator
