import { LikeComponent } from './like.component';

let likeComponent = new LikeComponent(true, 0);
likeComponent.onClick();

console.log(`Currently liked: ${likeComponent.isLiked} and Current likes: ${likeComponent.numLikes}`);

likeComponent.onClick();

console.log(`Currently liked: ${likeComponent.isLiked} and Current likes: ${likeComponent.numLikes}`);

likeComponent.onClick();

console.log(`Currently liked: ${likeComponent.isLiked} and Current likes: ${likeComponent.numLikes}`);

likeComponent.onClick();

console.log(`Currently liked: ${likeComponent.isLiked} and Current likes: ${likeComponent.numLikes}`);

