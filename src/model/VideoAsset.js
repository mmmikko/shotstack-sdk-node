/**
 * shotstack
 * The Shotstack API is a video editing service that allows for the programatic creation of videos using JSON. 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.VideoAsset = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The VideoAsset model module.
   * @module model/VideoAsset
   * @version v1
   */

  /**
   * Constructs a new <code>VideoAsset</code>.
   * The VideoAsset is used to create video sequences from video files. The src must be a publicly accesible URL to a video resource such as an mp4 file. The in and out attributes of the parent Clip let you trim the video file by setting the start and end point to use. 
   * @alias module:model/VideoAsset
   * @class
   * @param type {String} The type of asset - set to <b>video</b> for videos.
   * @param src {String} The video source URL. The URL must be publicly accessible or include credentials. 
   */
  var exports = function(type, src) {
    var _this = this;

    _this['type'] = type;
    _this['src'] = src;
  };

  /**
   * Constructs a <code>VideoAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoAsset} obj Optional instance to populate.
   * @return {module:model/VideoAsset} The populated <code>VideoAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('src')) {
        obj['src'] = ApiClient.convertToType(data['src'], 'String');
      }
      if (data.hasOwnProperty('trim')) {
        obj['trim'] = ApiClient.convertToType(data['trim'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The type of asset - set to <b>video</b> for videos.
   * @member {String} type
   * @default 'video'
   */
  exports.prototype['type'] = 'video';
  /**
   * The video source URL. The URL must be publicly accessible or include credentials. 
   * @member {String} src
   */
  exports.prototype['src'] = undefined;
  /**
   * The start trim point of the clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached. 
   * @member {Number} trim
   */
  exports.prototype['trim'] = undefined;
  /**
   * Set the volume for the clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0). 
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;


  /**
   * Returns The type of asset - set to <b>video</b> for videos.
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets The type of asset - set to <b>video</b> for videos.
   * @param {String} type The type of asset - set to <b>video</b> for videos.
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * Returns The video source URL. The URL must be publicly accessible or include credentials. 
   * @return {String}
   */
  exports.prototype.getSrc = function() {
    return this['src'];
  }

  /**
   * Sets The video source URL. The URL must be publicly accessible or include credentials. 
   * @param {String} src The video source URL. The URL must be publicly accessible or include credentials. 
   */
  exports.prototype.setSrc = function(src) {
    this['src'] = src;
  }


  /**
   * Returns The start trim point of the clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached. 
   * @return {Number}
   */
  exports.prototype.getTrim = function() {
    return this['trim'];
  }

  /**
   * Sets The start trim point of the clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached. 
   * @param {Number} trim The start trim point of the clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached. 
   */
  exports.prototype.setTrim = function(trim) {
    this['trim'] = trim;
  }


  /**
   * Returns Set the volume for the clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0). 
   * @return {Number}
   */
  exports.prototype.getVolume = function() {
    return this['volume'];
  }

  /**
   * Sets Set the volume for the clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0). 
   * @param {Number} volume Set the volume for the clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0). 
   */
  exports.prototype.setVolume = function(volume) {
    this['volume'] = volume;
  }



  return exports;
}));

