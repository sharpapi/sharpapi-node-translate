const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for translating text using SharpAPI.com
 */
class SharpApiTranslateService extends SharpApiCoreService {
  /**
   * Translates the provided text into selected language.
   * Perfect for generating marketing introductions of longer texts.
   *
   * @param {string} text
   * @param {string} language
   * @param {string|null} voiceTone
   * @param {string|null} context
   * @returns {Promise<string>} - The status URL.
   */
  async translate(text, language, voiceTone = null, context = null) {
    const data = { content: text, language };
    if (voiceTone) data.voice_tone = voiceTone;
    if (context) data.context = context;

    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_TRANSLATE.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiTranslateService };