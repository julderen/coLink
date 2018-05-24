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
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Link_1 = require("./Link");
let Album = class Album {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Album.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Album.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Album.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Album.prototype, "isPublic", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.default, user => user.albums, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.default)
], Album.prototype, "owner", void 0);
__decorate([
    typeorm_1.OneToMany(type => Link_1.default, link => link.album),
    __metadata("design:type", Array)
], Album.prototype, "links", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Album.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Album.prototype, "updateDate", void 0);
Album = __decorate([
    typeorm_1.Entity('albums')
], Album);
exports.default = Album;
