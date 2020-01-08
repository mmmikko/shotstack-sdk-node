/**
 * Shotstack
 * The Shotstack API is a video editing service that allows for the programatic creation of videos using JSON. You can configure an edit and POST it to the Shotstack API which will render your video and provide a file location when complete. For more details check https://shotstack.io
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Offset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Offset'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.TitleAsset = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Offset);
  }
}(this, function(ApiClient, Offset) {
  'use strict';



  /**
   * The TitleAsset model module.
   * @module model/TitleAsset
   * @version v1
   */

  /**
   * Constructs a new <code>TitleAsset</code>.
   * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning. 
   * @alias module:model/TitleAsset
   * @class
   * @param type {String} The type of asset - set to <b>title</b> for titles.
   * @param text {String} The title text string - i.e. \"My Title\".
   */
  var exports = function(type = 'title', text) {
    var _this = this;

    _this['type'] = type;
    _this['text'] = text;
  };

  /**
   * Constructs a <code>TitleAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TitleAsset} obj Optional instance to populate.
   * @return {module:model/TitleAsset} The populated <code>TitleAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('style')) {
        obj['style'] = ApiClient.convertToType(data['style'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('background')) {
        obj['background'] = ApiClient.convertToType(data['background'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = Offset.constructFromObject(data['offset']);
      }
    }
    return obj;
  }

  /**
   * The type of asset - set to <b>title</b> for titles.
   * @member {String} type
   * @default 'title'
   */
  exports.prototype['type'] = 'title';
  /**
   * The title text string - i.e. \"My Title\".
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Uses a preset to apply font properties and stylng to the title. 
   * @member {module:model/TitleAsset.StyleEnum} style
   */
  exports.prototype['style'] = undefined;
  /**
   * Set the text color using HTML color notation including hexidecimal, rgb, rgba and  color name. Transparency is supported by setting the last two characters of a hex string,  i.e. #ffffff33 or using rgba, i.e. rgba(255, 255, 255, 0.5). 
   * @member {String} color
   * @default 'white'
   */
  exports.prototype['color'] = 'white';
  /**
   * Set the relative size of the text using predefined sizes from xx-small to xx-large. 
   * @member {module:model/TitleAsset.SizeEnum} size
   * @default 'medium'
   */
  exports.prototype['size'] = 'medium';
  /**
   * Apply a background color behind the text using HTML color notation with support for  transparency. Useful for subtitles. 
   * @member {String} background
   */
  exports.prototype['background'] = undefined;
  /**
   * Place the title in one of nine predefined positions of the viewport. 
   * @member {module:model/TitleAsset.PositionEnum} position
   * @default 'center'
   */
  exports.prototype['position'] = 'center';
  /**
   * @member {module:model/Offset} offset
   */
  exports.prototype['offset'] = undefined;


  /**
   * Returns The type of asset - set to <b>title</b> for titles.
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets The type of asset - set to <b>title</b> for titles.
   * @param {String} type The type of asset - set to <b>title</b> for titles.
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
    return this;
  }


  /**
   * Returns The title text string - i.e. \"My Title\".
   * @return {String}
   */
  exports.prototype.getText = function() {
    return this['text'];
  }

  /**
   * Sets The title text string - i.e. \"My Title\".
   * @param {String} text The title text string - i.e. \"My Title\".
   */
  exports.prototype.setText = function(text) {
    this['text'] = text;
    return this;
  }


  /**
   * Returns Uses a preset to apply font properties and stylng to the title. 
   * @return {module:model/TitleAsset.StyleEnum}
   */
  exports.prototype.getStyle = function() {
    return this['style'];
  }

  /**
   * Sets Uses a preset to apply font properties and stylng to the title. 
   * @param {module:model/TitleAsset.StyleEnum} style Uses a preset to apply font properties and stylng to the title. 
   */
  exports.prototype.setStyle = function(style) {
    this['style'] = style;
    return this;
  }


  /**
   * Returns Set the text color using HTML color notation including hexidecimal, rgb, rgba and  color name. Transparency is supported by setting the last two characters of a hex string,  i.e. #ffffff33 or using rgba, i.e. rgba(255, 255, 255, 0.5). 
   * @return {String}
   */
  exports.prototype.getColor = function() {
    return this['color'];
  }

  /**
   * Sets Set the text color using HTML color notation including hexidecimal, rgb, rgba and  color name. Transparency is supported by setting the last two characters of a hex string,  i.e. #ffffff33 or using rgba, i.e. rgba(255, 255, 255, 0.5). 
   * @param {String} color Set the text color using HTML color notation including hexidecimal, rgb, rgba and  color name. Transparency is supported by setting the last two characters of a hex string,  i.e. #ffffff33 or using rgba, i.e. rgba(255, 255, 255, 0.5). 
   */
  exports.prototype.setColor = function(color) {
    this['color'] = color;
    return this;
  }


  /**
   * Returns Set the relative size of the text using predefined sizes from xx-small to xx-large. 
   * @return {module:model/TitleAsset.SizeEnum}
   */
  exports.prototype.getSize = function() {
    return this['size'];
  }

  /**
   * Sets Set the relative size of the text using predefined sizes from xx-small to xx-large. 
   * @param {module:model/TitleAsset.SizeEnum} size Set the relative size of the text using predefined sizes from xx-small to xx-large. 
   */
  exports.prototype.setSize = function(size) {
    this['size'] = size;
    return this;
  }


  /**
   * Returns Apply a background color behind the text using HTML color notation with support for  transparency. Useful for subtitles. 
   * @return {String}
   */
  exports.prototype.getBackground = function() {
    return this['background'];
  }

  /**
   * Sets Apply a background color behind the text using HTML color notation with support for  transparency. Useful for subtitles. 
   * @param {String} background Apply a background color behind the text using HTML color notation with support for  transparency. Useful for subtitles. 
   */
  exports.prototype.setBackground = function(background) {
    this['background'] = background;
    return this;
  }


  /**
   * Returns Place the title in one of nine predefined positions of the viewport. 
   * @return {module:model/TitleAsset.PositionEnum}
   */
  exports.prototype.getPosition = function() {
    return this['position'];
  }

  /**
   * Sets Place the title in one of nine predefined positions of the viewport. 
   * @param {module:model/TitleAsset.PositionEnum} position Place the title in one of nine predefined positions of the viewport. 
   */
  exports.prototype.setPosition = function(position) {
    this['position'] = position;
    return this;
  }


  /**
   * @return {module:model/Offset}
   */
  exports.prototype.getOffset = function() {
    return this['offset'];
  }

  /**
   * @param {module:model/Offset} offset
   */
  exports.prototype.setOffset = function(offset) {
    this['offset'] = offset;
    return this;
  }


  /**
   * Allowed values for the <code>style</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StyleEnum = {
    /**
     * value: "minimal"
     * @const
     */
    "minimal": "minimal",
    /**
     * value: "blockbuster"
     * @const
     */
    "blockbuster": "blockbuster",
    /**
     * value: "vogue"
     * @const
     */
    "vogue": "vogue",
    /**
     * value: "sketchy"
     * @const
     */
    "sketchy": "sketchy",
    /**
     * value: "skinny"
     * @const
     */
    "skinny": "skinny",
    /**
     * value: "chunk"
     * @const
     */
    "chunk": "chunk",
    /**
     * value: "chunkLight"
     * @const
     */
    "chunkLight": "chunkLight",
    /**
     * value: "marker"
     * @const
     */
    "marker": "marker",
    /**
     * value: "future"
     * @const
     */
    "future": "future",
    /**
     * value: "subtitle"
     * @const
     */
    "subtitle": "subtitle"  };

  /**
   * Allowed values for the <code>size</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SizeEnum = {
    /**
     * value: "xx-small"
     * @const
     */
    "xx-small": "xx-small",
    /**
     * value: "x-small"
     * @const
     */
    "x-small": "x-small",
    /**
     * value: "small"
     * @const
     */
    "small": "small",
    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",
    /**
     * value: "large"
     * @const
     */
    "large": "large",
    /**
     * value: "x-large"
     * @const
     */
    "x-large": "x-large",
    /**
     * value: "xx-large"
     * @const
     */
    "xx-large": "xx-large"  };

  /**
   * Allowed values for the <code>position</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PositionEnum = {
    /**
     * value: "top"
     * @const
     */
    "top": "top",
    /**
     * value: "topRight"
     * @const
     */
    "topRight": "topRight",
    /**
     * value: "right"
     * @const
     */
    "right": "right",
    /**
     * value: "bottomRight"
     * @const
     */
    "bottomRight": "bottomRight",
    /**
     * value: "bottom"
     * @const
     */
    "bottom": "bottom",
    /**
     * value: "bottomLeft"
     * @const
     */
    "bottomLeft": "bottomLeft",
    /**
     * value: "left"
     * @const
     */
    "left": "left",
    /**
     * value: "topLeft"
     * @const
     */
    "topLeft": "topLeft",
    /**
     * value: "center"
     * @const
     */
    "center": "center"  };


  return exports;
}));


