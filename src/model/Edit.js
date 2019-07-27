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
    define(['ApiClient', 'model/Output', 'model/Timeline'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Output'), require('./Timeline'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.Edit = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Output, root.ShotstackSdk.Timeline);
  }
}(this, function(ApiClient, Output, Timeline) {
  'use strict';



  /**
   * The Edit model module.
   * @module model/Edit
   * @version v1
   */

  /**
   * Constructs a new <code>Edit</code>.
   * An edit defines the content of the video in a timeline and the output format. 
   * @alias module:model/Edit
   * @class
   * @param timeline {module:model/Timeline} 
   * @param output {module:model/Output} 
   */
  var exports = function(timeline, output) {
    var _this = this;

    _this['timeline'] = timeline;
    _this['output'] = output;
  };

  /**
   * Constructs a <code>Edit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Edit} obj Optional instance to populate.
   * @return {module:model/Edit} The populated <code>Edit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('timeline')) {
        obj['timeline'] = Timeline.constructFromObject(data['timeline']);
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = Output.constructFromObject(data['output']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Timeline} timeline
   */
  exports.prototype['timeline'] = undefined;
  /**
   * @member {module:model/Output} output
   */
  exports.prototype['output'] = undefined;


  /**
   * @return {module:model/Timeline}
   */
  exports.prototype.getTimeline = function() {
    return this['timeline'];
  }

  /**
   * @param {module:model/Timeline} timeline
   */
  exports.prototype.setTimeline = function(timeline) {
    this['timeline'] = timeline;
  }


  /**
   * @return {module:model/Output}
   */
  exports.prototype.getOutput = function() {
    return this['output'];
  }

  /**
   * @param {module:model/Output} output
   */
  exports.prototype.setOutput = function(output) {
    this['output'] = output;
  }



  return exports;
}));

