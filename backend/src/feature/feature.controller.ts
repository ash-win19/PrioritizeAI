import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { CreateFeatureDto, PrioritizeFeatureDto, RankFeaturesDto, RankFeaturesResponse } from './dto/create-feature.dto';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Post()
  async prioritize(@Body() body: PrioritizeFeatureDto) {
    return this.featureService.rankFeatures(body);
  }

  @Post('rank-features')
  async rankFeatures(@Body() body: RankFeaturesDto): Promise<RankFeaturesResponse> {
    return this.featureService.rankFeaturesForMVP(body);
  }
}

// Test Data for the new endpoint:
// {
//   "idea": "A comprehensive project management platform that helps teams deliver high-impact features efficiently",
//   "vision": "Reduce time-to-market by 30% while maintaining code quality and team satisfaction",
//   "featuresOfInterest": ["AI-Powered Sprint Planning", "Real-time Team Velocity Tracking"]
// }