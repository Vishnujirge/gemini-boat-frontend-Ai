import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private genAI = new GoogleGenerativeAI(environment.geminiApiKey);

  // private model = this.genAI.getGenerativeModel({
  //   model: 'gemini-2.5-flash',
  //   generationConfig: {
  //     maxOutputTokens: 150,
  //     temperature: 0.7,
  //   },
  // });

  private model = this.genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    generationConfig: {
      maxOutputTokens: 1500, // increase this
      temperature: 0.7,
    },
  });

  async askGemini(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    return result.response.text();
  }
}
