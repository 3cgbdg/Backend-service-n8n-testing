import { Body, Controller, Post, BadRequestException } from '@nestjs/common';

@Controller('webhook')
export class AppController {

  @Post('analyze')
  analyzeRequest(@Body() body: { text: string; userId: number }) {
    console.log('Received data:', body);

    if (!body.text) {
      throw new BadRequestException('Text is required');
    }

    const isUrgent = body.text.toLowerCase().includes('now');
    const sentiment = body.text.length > 20 ? 'Detailed' : 'Short';

    // returning json file
    return {
      status: 'success',
      analysis: {
        isUrgent,
        sentiment,
        processedAt: new Date().toISOString(),
        server: 'NestJS core'
      }
    };
  }
}