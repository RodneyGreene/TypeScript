export class LikeComponent {
    constructor (private _isLiked: boolean, private _numLikes: number) {}

    onClick () {
        this._numLikes += (this._isLiked) ? 1 : -1;
        this._isLiked = (!this._isLiked);
    }

    get isLiked() {
        return this._isLiked;
    }

    get numLikes() {
        return this._numLikes;
    }

}