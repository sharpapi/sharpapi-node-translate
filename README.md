![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Advanced Text Translator API for Node.js

## 🌐 Translate text with context-aware AI — powered by SharpAPI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-translate.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-translate.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Advanced Text Translator** provides context-aware translation that understands nuances, idioms, and industry-specific terminology. Supports multiple languages with high accuracy.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-translate
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiTranslateService } = require('@sharpapi/sharpapi-node-translate');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiTranslateService(apiKey);

const text = 'Hello, how are you today?';
const targetLanguage = 'Spanish';

async function translateText() {
  try {
    // Submit translation job
    const statusUrl = await service.translate(text, targetLanguage);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Translation:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

translateText();
```

---

## API Documentation

### Methods

#### `translate(text: string, targetLanguage: string, sourceLanguage?: string, context?: string): Promise<string>`

Translates text from source language to target language with optional context.

**Parameters:**
- `text` (string, required): The text to translate
- `targetLanguage` (string, required): The target language (e.g., 'Spanish', 'French', 'Japanese')
- `sourceLanguage` (string, optional): The source language (auto-detected if not specified)
- `context` (string, optional): Additional context to improve translation accuracy

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.translate(
  'The company is growing fast',
  'Spanish',
  'English',
  'Business context'
);
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns the translated text:

```json
{
  "translated_text": "Hola, ¿cómo estás hoy?",
  "source_language": "English",
  "target_language": "Spanish",
  "confidence": 0.98
}
```

---

## Examples

### Basic Translation

```javascript
const { SharpApiTranslateService } = require('@sharpapi/sharpapi-node-translate');

const service = new SharpApiTranslateService(process.env.SHARP_API_KEY);

const englishText = 'Welcome to our website. We are glad you are here!';

service.translate(englishText, 'French')
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const translation = result.getResultJson();
    console.log('Original:', englishText);
    console.log('Translation:', translation.translated_text);
  })
  .catch(error => console.error('Translation failed:', error));
```

### Translation with Context

```javascript
const service = new SharpApiTranslateService(process.env.SHARP_API_KEY);

const technicalText = 'The API returns a 404 error when the resource is not found.';

const statusUrl = await service.translate(
  technicalText,
  'German',
  'English',
  'Software development and API documentation'
);

const result = await service.fetchResults(statusUrl);
console.log('Technical translation:', result.getResultJson().translated_text);
```

### Batch Translation

```javascript
const service = new SharpApiTranslateService(process.env.SHARP_API_KEY);

const phrases = [
  'Good morning',
  'Thank you',
  'How much does it cost?',
  'Where is the nearest station?'
];

const translations = await Promise.all(
  phrases.map(async (phrase) => {
    const statusUrl = await service.translate(phrase, 'Japanese');
    const result = await service.fetchResults(statusUrl);
    return {
      original: phrase,
      translated: result.getResultJson().translated_text
    };
  })
);

console.log('Translations:', translations);
```

---

## Use Cases

- **Website Localization**: Translate website content for international audiences
- **Customer Support**: Provide multilingual customer service
- **E-commerce**: Translate product descriptions and reviews
- **Content Marketing**: Adapt marketing materials for different regions
- **Documentation**: Translate technical documentation and user guides
- **Mobile Apps**: Localize app content for global markets

---

## Supported Languages

SharpAPI supports translation between 100+ languages including:

English, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese, Korean, Arabic, Hindi, Dutch, Swedish, Polish, Turkish, and many more.

---

## API Endpoint

**POST** `/content/translate`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVb)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/advanced-text-translator)

---

## Related Packages

- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text) - Text summarization
- [@sharpapi/sharpapi-node-paraphrase](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase) - Text paraphrasing
- [@sharpapi/sharpapi-node-proofread](https://www.npmjs.com/package/@sharpapi/sharpapi-node-proofread) - Grammar checking
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
