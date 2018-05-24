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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const entities_1 = require("api/entities");
let AlbumsService = class AlbumsService {
    createAlbum(info) {
        const album = new entities_1.Album();
        album.name = info.name;
        album.description = info.description;
        album.isPublic = info.isPublic;
        album.owner = info.owner;
        return this.saveAlbum(album);
    }
    async updateAlbum(info, oldAlbum) {
        const album = new entities_1.Album();
        album.name = info.name;
        album.description = info.description;
        album.isPublic = info.isPublic;
        album.owner = info.owner;
        const updatedMiner = this.mergeAlbum(oldAlbum, album);
        return this.saveAlbum(updatedMiner);
    }
    mergeAlbum(album, update) {
        return this.albumsRepository.merge(album, update);
    }
    async saveAlbum(user) {
        return this.albumsRepository.save(user);
    }
    async removeAlbum(album) {
        return this.albumsRepository.remove(album);
    }
    getAlbumsByUser(user) {
        return this.albumsRepository.find({ owner: user });
    }
    getAlbumById(id, options) {
        return this.albumsRepository.findOne(Object.assign({ id }, options));
    }
};
__decorate([
    typeorm_typedi_extensions_1.OrmRepository(entities_1.Album),
    __metadata("design:type", typeorm_1.Repository)
], AlbumsService.prototype, "albumsRepository", void 0);
AlbumsService = __decorate([
    typedi_1.Service()
], AlbumsService);
exports.default = AlbumsService;
