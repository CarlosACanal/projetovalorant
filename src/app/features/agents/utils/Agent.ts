import { Ability } from "./Ability"
import { Role } from "./Role"

export interface Agent {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    releaseDate: string;
    characterTags: any;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role;
    recruitmentData: any;
    abilities: Ability[];
    voiceLine: any;
}

