"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeComponent = new like_component_1.LikeComponent(true, 0);
likeComponent.onClick();
console.log("Currently liked: " + likeComponent.isLiked + " and Current likes: " + likeComponent.numLikes);
likeComponent.onClick();
console.log("Currently liked: " + likeComponent.isLiked + " and Current likes: " + likeComponent.numLikes);
likeComponent.onClick();
console.log("Currently liked: " + likeComponent.isLiked + " and Current likes: " + likeComponent.numLikes);
likeComponent.onClick();
console.log("Currently liked: " + likeComponent.isLiked + " and Current likes: " + likeComponent.numLikes);
