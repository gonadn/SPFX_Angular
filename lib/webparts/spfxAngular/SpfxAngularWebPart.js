"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var SpfxAngularWebPart_module_scss_1 = require("./SpfxAngularWebPart.module.scss");
var strings = require("SpfxAngularWebPartStrings");
require("angular");
var SpfxAngularWebPart = (function (_super) {
    __extends(SpfxAngularWebPart, _super);
    function SpfxAngularWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxAngularWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + SpfxAngularWebPart_module_scss_1.default.spfxAngular + "\">\n        <div class=\"" + SpfxAngularWebPart_module_scss_1.default.container + "\">\n          <div class=\"" + SpfxAngularWebPart_module_scss_1.default.row + "\">\n            <div class=\"" + SpfxAngularWebPart_module_scss_1.default.column + "\">\n              <span class=\"" + SpfxAngularWebPart_module_scss_1.default.title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + SpfxAngularWebPart_module_scss_1.default.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + SpfxAngularWebPart_module_scss_1.default.description + "\">" + sp_lodash_subset_1.escape(this.properties.description) + "</p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + SpfxAngularWebPart_module_scss_1.default.button + "\">\n                <span class=\"" + SpfxAngularWebPart_module_scss_1.default.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(SpfxAngularWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxAngularWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxAngularWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = SpfxAngularWebPart;

//# sourceMappingURL=SpfxAngularWebPart.js.map
