export class CreateFeatureDto {
    name: string;
    description: string;
}

export class PrioritizeFeatureDto {
    productVision: string;
    goal: string;
    featureIdeas: CreateFeatureDto[];
}
