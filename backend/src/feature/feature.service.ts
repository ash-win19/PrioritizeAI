import { Injectable } from '@nestjs/common';
import { CreateFeatureDto, PrioritizeFeatureDto } from './dto/create-feature.dto';
import { features } from 'process';

@Injectable()
export class FeatureService {
  async rankFeatures(request: PrioritizeFeatureDto) {
    const { productVision, goal, featureIdeas } = request;
    const rankedFeatures = featureIdeas.map((feature, index) => ({
      ...feature,
      score: Math.random() * 100,
      justification: `Feature ${index + 1} is ranked ${Math.random() * 100}`,
    }));
    return rankedFeatures.sort((a, b) => b.score - a.score);
    //return 'This action adds a new feature';
  }
}