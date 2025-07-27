export class CreateFeatureDto {
    name: string;
    description: string;
}

export class PrioritizeFeatureDto {
    productVision: string;
    goal: string;
    featureIdeas: CreateFeatureDto[];
}

// New DTOs for the updated feature ranking system
export class RankFeaturesDto {
    idea: string;
    vision: string;
    featuresOfInterest?: string[];
}

export class RankedFeature {
    feature: string;
    score: number;
    explanation: string;
}

export class RankFeaturesResponse {
    features: RankedFeature[];
}
