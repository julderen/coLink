"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const models_1 = require("../models");
const decorators_1 = require("core/decorators");
const services_1 = require("abstractions/services");
const entities_1 = require("abstractions/entities");
const errors_1 = require("../errors");
let UserController = class UserController {
    async getAlbums(user) {
        return await this.albumsService.getAlbumsByUser(user);
    }
    async createAlbum(user, album) {
        const saveAlbum = await this.albumsService.createAlbum(Object.assign({}, album, { owner: user }));
        return saveAlbum.id;
    }
    async updateAlbum(user, albumId, album) {
        const oldAlbum = await this.albumsService.getAlbumById(albumId);
        if (oldAlbum.owner !== user) {
            throw new errors_1.NoRights();
        }
        return await this.albumsService.updateAlbum(Object.assign({}, album, { owner: user }), oldAlbum);
    }
    async removeAlbum(user, albumId) {
        const oldAlbum = await this.albumsService.getAlbumById(albumId);
        if (oldAlbum.owner !== user) {
            throw new errors_1.NoRights();
        }
        return await this.albumsService.removeAlbum(oldAlbum);
    }
};
__decorate([
    decorators_1.InjectService('albums'),
    __metadata("design:type", Object)
], UserController.prototype, "albumsService", void 0);
__decorate([
    routing_controllers_1.Get(),
    __param(0, routing_controllers_1.CurrentUser({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAlbums", null);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.CurrentUser({ required: true })), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, models_1.CreateAlbumModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createAlbum", null);
__decorate([
    routing_controllers_1.Put('/:id'),
    __param(0, routing_controllers_1.CurrentUser()), __param(1, routing_controllers_1.Param('id')), __param(2, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, models_1.CreateAlbumModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAlbum", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    __param(0, routing_controllers_1.CurrentUser({ required: true })), __param(1, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeAlbum", null);
UserController = __decorate([
    routing_controllers_1.JsonController('/api/albums')
], UserController);
exports.UserController = UserController;
exports.default = UserController;
