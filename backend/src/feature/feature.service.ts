import { Injectable } from '@nestjs/common';
import { CreateFeatureDto, PrioritizeFeatureDto, RankFeaturesDto, RankedFeature, RankFeaturesResponse } from './dto/create-feature.dto';
import { OpenAI } from 'openai';

@Injectable()
export class FeatureService {
  private readonly openai: OpenAI;
  
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async rankFeatures(request: PrioritizeFeatureDto) {
    const { productVision, goal, featureIdeas } = request;
    const rankedFeatures = featureIdeas.map((feature, index) => ({
      ...feature,
      score: Math.random() * 100,
      justification: `Feature ${index + 1} is ranked ${Math.random() * 100}`,
    }));
    return rankedFeatures.sort((a, b) => b.score - a.score);
  }

  async rankFeaturesForMVP(request: RankFeaturesDto): Promise<RankFeaturesResponse> {
    const { idea, vision, featuresOfInterest } = request;
    
    // Construct the prompt for the LLM
    const prompt = this.constructPrompt(idea, vision, featuresOfInterest);
    
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a product strategy expert who helps startups prioritize features for their MVP. You analyze product ideas and visions to identify the most critical features that should be built first. Always respond with valid JSON in the exact format specified."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const responseContent = completion.choices[0]?.message?.content;
      
      if (!responseContent) {
        throw new Error('No response from OpenAI');
      }

      // Parse the JSON response
      const parsedResponse = JSON.parse(responseContent);
      
      // Validate and return the response
      if (!parsedResponse.features || !Array.isArray(parsedResponse.features)) {
        throw new Error('Invalid response format from OpenAI');
      }

      return {
        features: parsedResponse.features.map((feature: any) => ({
          feature: feature.feature,
          score: Math.max(1, Math.min(10, feature.score)), // Ensure score is between 1-10
          explanation: feature.explanation
        }))
      };
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw new Error('Failed to rank features. Please try again.');
    }
  }

  private constructPrompt(idea: string, vision: string, featuresOfInterest?: string[]): string {
    const featuresOfInterestText = featuresOfInterest && featuresOfInterest.length > 0 
      ? `- Features of interest: ${featuresOfInterest.join(', ')}`
      : '- Features of interest: None specified';

    return `A startup has the following vision and idea:
- Idea: ${idea}
- Vision: ${vision}
${featuresOfInterestText}

Based on this, list and rank 5 to 10 product features that are most important for a first MVP. Assign a custom score between 1–10 for each, and give a 1-line explanation.

Respond with valid JSON in this exact format:
{
  "features": [
    {
      "feature": "Feature name",
      "score": 8,
      "explanation": "Brief explanation of why this feature is important for the MVP"
    }
  ]
}

Focus on features that:
1. Address the core value proposition
2. Can be built quickly to validate the concept
3. Provide immediate user value
4. Support the product vision
5. Are essential for the MVP to function`;
  }
}