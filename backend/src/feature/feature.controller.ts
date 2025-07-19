import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { CreateFeatureDto, PrioritizeFeatureDto } from './dto/create-feature.dto';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Post()
  async prioritize(@Body() body: PrioritizeFeatureDto) {
    return this.featureService.rankFeatures(body);
  }
}

// Test Data:
// {
//   "productVision": "A comprehensive project management platform that helps teams deliver high-impact features efficiently",
//   "goal": "Reduce time-to-market by 30% while maintaining code quality and team satisfaction",
//   "featureIdeas": [
//     {
//       "name": "AI-Powered Sprint Planning",
//       "description": "Machine learning algorithm that analyzes historical data to suggest optimal sprint capacity and task distribution"
//     },
//     {
//       "name": "Real-time Team Velocity Tracking",
//       "description": "Dashboard showing live updates on team progress, bottlenecks, and predictive completion dates"
//     },
//     {
//       "name": "Automated Code Review System",
//       "description": "AI that scans pull requests for common issues, security vulnerabilities, and code quality standards"
//     },
//     {
//       "name": "Stakeholder Feedback Integration",
//       "description": "Centralized system to collect, categorize, and prioritize feedback from customers, product managers, and executives"
//     },
//     {
//       "name": "Resource Allocation Optimizer",
//       "description": "Tool that suggests optimal team member assignments based on skills, availability, and project requirements"
//     },
//     {
//       "name": "Risk Assessment Engine",
//       "description": "Predictive analytics to identify potential project risks, delays, and mitigation strategies"
//     }
//   ]
// }