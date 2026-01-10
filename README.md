![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Advanced Text Translator API for Node.js

## 🌐 Translate text with context-aware AI — powered by SharpAPI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-translate.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-translate.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Advanced Text Translator** provides context-aware translation that understands nuances, idioms, and industry-specific terminology. Supports 80+ languages with high accuracy and customizable voice tones.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

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

const text = 'Hello, world!';
const targetLanguage = 'Spanish';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.translate(text, targetLanguage);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsRP).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiTranslateService } = require('@sharpapi/sharpapi-node-translate');

const service = new SharpApiTranslateService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/advanced-text-translator).

---

## Use Cases

- **Website Localization**: Translate website content for international audiences
- **Customer Support**: Provide multilingual customer service
- **E-commerce**: Translate product descriptions and reviews
- **Content Marketing**: Adapt marketing materials for different regions
- **Documentation**: Translate technical documentation and user guides
- **Mobile Apps**: Localize app content for global markets

---

## API Endpoint

**POST** `/content/translate`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsRP)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/advanced-text-translator)

---

## Related Packages

- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text)
- [@sharpapi/sharpapi-node-paraphrase](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase)
- [@sharpapi/sharpapi-node-proofread](https://www.npmjs.com/package/@sharpapi/sharpapi-node-proofread)

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
