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
    define(['ApiClient', 'model/Edit', 'model/QueuedResponse', 'model/RenderResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Edit'), require('../model/QueuedResponse'), require('../model/RenderResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.DefaultApi = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Edit, root.ShotstackSdk.QueuedResponse, root.ShotstackSdk.RenderResponse);
  }
}(this, function(ApiClient, Edit, QueuedResponse, RenderResponse) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version v1
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRender operation.
     * @callback module:api/DefaultApi~getRenderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the rendering status, video url and details of a timeline by ID.
     * @param {String} id The id of the timeline render task in UUID format
     * @param {module:api/DefaultApi~getRenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenderResponse}
     */
    this.getRender = function(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRender");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['DeveloperKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RenderResponse;
      return this.apiClient.callApi(
        '/render/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRender operation.
     * @callback module:api/DefaultApi~postRenderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QueuedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render the contents of a timeline as a video file.
     * @param {module:model/Edit} edit 
     * @param {module:api/DefaultApi~postRenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueuedResponse}
     */
    this.postRender = function(edit, callback) {
      var postBody = edit;
      // verify the required parameter 'edit' is set
      if (edit === undefined || edit === null) {
        throw new Error("Missing the required parameter 'edit' when calling postRender");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['DeveloperKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = QueuedResponse;
      return this.apiClient.callApi(
        '/render', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));