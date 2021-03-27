"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = exports.Reportable = void 0;
var Reportable = /** @class */ (function () {
    function Reportable() {
    }
    Reportable.prototype.print = function (report) {
        throw new Error('Method not implemented.');
    };
    return Reportable;
}());
exports.Reportable = Reportable;
var ConsoleReport = /** @class */ (function (_super) {
    __extends(ConsoleReport, _super);
    function ConsoleReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleReport.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReport;
}(Reportable));
exports.ConsoleReport = ConsoleReport;
