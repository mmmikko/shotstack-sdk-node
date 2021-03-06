/**
 * Shotstack
 * The Shotstack API is a video editing service that allows for the automated creation of videos using JSON. You can configure an edit and POST it to the Shotstack API which will render your video and provide a file location when complete. For more details check https://shotstack.io
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
    define(['ApiClient', 'model/Edit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Edit'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.RenderResponseData = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Edit);
  }
}(this, function(ApiClient, Edit) {
  'use strict';



  /**
   * The RenderResponseData model module.
   * @module model/RenderResponseData
   * @version v1
   */

  /**
   * Constructs a new <code>RenderResponseData</code>.
   * @alias module:model/RenderResponseData
   * @class
   * @param status {module:model/RenderResponseData.StatusEnum} The status of the render task
   * @param id {String} The id of the render task in UUID format
   * @param owner {String} The owner id of the render task
   * @param data {module:model/Edit} 
   * @param created {String} The time the render task was initially queued
   * @param updated {String} The time the render status was last updated
   */
  var exports = function(status, id, owner, data, created, updated) {
    var _this = this;

    _this['status'] = status;
    _this['id'] = id;
    _this['owner'] = owner;
    _this['data'] = data;
    _this['created'] = created;
    _this['updated'] = updated;
  };

  /**
   * Constructs a <code>RenderResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderResponseData} obj Optional instance to populate.
   * @return {module:model/RenderResponseData} The populated <code>RenderResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = Edit.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
      }
    }
    return obj;
  }

  /**
   * The status of the render task
   * @member {module:model/RenderResponseData.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The id of the render task in UUID format
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The owner id of the render task
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The URL of the final video. This will only be available if status is done.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {module:model/Edit} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The time the render task was initially queued
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The time the render status was last updated
   * @member {String} updated
   */
  exports.prototype['updated'] = undefined;


  /**
   * Returns The status of the render task
   * @return {module:model/RenderResponseData.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets The status of the render task
   * @param {module:model/RenderResponseData.StatusEnum} status The status of the render task
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
    return this;
  }


  /**
   * Returns The id of the render task in UUID format
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The id of the render task in UUID format
   * @param {String} id The id of the render task in UUID format
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
    return this;
  }


  /**
   * Returns The owner id of the render task
   * @return {String}
   */
  exports.prototype.getOwner = function() {
    return this['owner'];
  }

  /**
   * Sets The owner id of the render task
   * @param {String} owner The owner id of the render task
   */
  exports.prototype.setOwner = function(owner) {
    this['owner'] = owner;
    return this;
  }


  /**
   * Returns The URL of the final video. This will only be available if status is done.
   * @return {String}
   */
  exports.prototype.getUrl = function() {
    return this['url'];
  }

  /**
   * Sets The URL of the final video. This will only be available if status is done.
   * @param {String} url The URL of the final video. This will only be available if status is done.
   */
  exports.prototype.setUrl = function(url) {
    this['url'] = url;
    return this;
  }


  /**
   * @return {module:model/Edit}
   */
  exports.prototype.getData = function() {
    return this['data'];
  }

  /**
   * @param {module:model/Edit} data
   */
  exports.prototype.setData = function(data) {
    this['data'] = data;
    return this;
  }


  /**
   * Returns The time the render task was initially queued
   * @return {String}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * Sets The time the render task was initially queued
   * @param {String} created The time the render task was initially queued
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
    return this;
  }


  /**
   * Returns The time the render status was last updated
   * @return {String}
   */
  exports.prototype.getUpdated = function() {
    return this['updated'];
  }

  /**
   * Sets The time the render status was last updated
   * @param {String} updated The time the render status was last updated
   */
  exports.prototype.setUpdated = function(updated) {
    this['updated'] = updated;
    return this;
  }


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "fetching"
     * @const
     */
    "fetching": "fetching",
    /**
     * value: "rendering"
     * @const
     */
    "rendering": "rendering",
    /**
     * value: "saving"
     * @const
     */
    "saving": "saving",
    /**
     * value: "done"
     * @const
     */
    "done": "done",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"  };


  return exports;
}));


