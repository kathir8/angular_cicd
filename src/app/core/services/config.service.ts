import { Injectable } from '@angular/core';

interface AppConfig {
  prod: boolean;
  appName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config!: AppConfig;

  async loadConfig(): Promise<void> {
    const response = await fetch('config/config.json');

    this.config = await response.json();
  }

  getConfig(): AppConfig {
    return this.config;
  }
}