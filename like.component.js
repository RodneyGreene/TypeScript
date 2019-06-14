"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_isLiked, _numLikes) {
        this._isLiked = _isLiked;
        this._numLikes = _numLikes;
    }
    LikeComponent.prototype.onClick = function () {
        this._numLikes += (this._isLiked) ? 1 : -1;
        this._isLiked = (!this._isLiked);
    };
    Object.defineProperty(LikeComponent.prototype, "isLiked", {
        get: function () {
            return this._isLiked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
