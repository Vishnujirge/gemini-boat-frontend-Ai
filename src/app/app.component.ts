import { Component } from '@angular/core';
import { GeminiService } from './shared/service/gemini.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  prompt = '';
  response = '';
  loading = false;

  constructor(private gemini: GeminiService) {}

  async send() {
    if (!this.prompt.trim()) return;

    this.loading = true;
    this.response = '';

    try {
      const result = await this.gemini.askGemini(this.prompt);
      this.response = result;
    } catch (error: any) {
      this.response = error?.message || 'API Error';
    } finally {
      this.loading = false;
    }
  }
}
