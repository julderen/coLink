'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typedi = require('typedi');
var routingControllers = require('routing-controllers');
var typeorm = require('typeorm');
var classValidator = require('class-validator');
var cryptoJs = require('crypto-js');
var typeormTypediExtensions = require('typeorm-typedi-extensions');
var imageResolver = _interopDefault(require('image-resolver'));
var base64Url = _interopDefault(require('base64-url'));
var jsonwebtoken = _interopDefault(require('jsonwebtoken'));
require('reflect-metadata');

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function registerDependency(prefix, name, target) {
    typedi.Service(`di-${prefix}-${name}`)(target);
}
function getDependency(prefix, name) {
    const dependency = typedi.Container.get(`di-${prefix}-${name}`);
    if (!dependency)
        throw new Error(`Cannot get ${prefix} ${name} dependency.`);
    return dependency;
}
function Inject(prefix, name) {
    return (object, propertyName, index) => {
        typedi.Container.registerHandler({ object, propertyName, index, value: () => {
                return getDependency(prefix, name);
            } });
    };
}
function InjectService(serviceName) {
    return Inject('service', serviceName);
}

class DependencyProvider {
    constructor(...diRegisterObjects) {
        this.diRegisterObjects = diRegisterObjects.reduce((prev, next) => prev.concat(next), []);
    }
    register() {
        this.diRegisterObjects.forEach((di) => {
            registerDependency(di.prefix, di.name, di.target);
        });
    }
}

class HttpServer {
    constructor(config) {
        routingControllers.useContainer(typedi.Container);
        this.controllers = config.controllers;
        this.middlewares = config.middlewares;
        this.options = config.options;
        this.server = null;
    }
    checkerMiddleware(checker) {
        return (action) => {
            const token = action.request.headers['auth-token'];
            return checker.check(token, action);
        };
    }
    createServer(checkers) {
        this.server = routingControllers.createExpressServer(Object.assign({}, this.options, { middlewares: this.middlewares, controllers: this.controllers, defaultErrorHandler: false, authorizationChecker: checkers ? this.checkerMiddleware(checkers.authorization) : null, currentUserChecker: checkers ? this.checkerMiddleware(checkers.currentUser) : null })).listen(this.options.port);
    }
}

class PostgresDatabaseContext {
    constructor(config) {
        typeorm.useContainer(typedi.Container);
        this.entities = config.entities;
        this.options = config.options;
    }
    async connect() {
        return typeorm.createConnection(Object.assign({}, this.options, { entities: this.entities }));
    }
}

class AuthorizationInfo {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.IsEmail(),
    __metadata("design:type", String)
], AuthorizationInfo.prototype, "email", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.MinLength(6),
    __metadata("design:type", String)
], AuthorizationInfo.prototype, "password", void 0);

class CreateUserModel {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.IsEmail(),
    __metadata("design:type", String)
], CreateUserModel.prototype, "email", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateUserModel.prototype, "login", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.MinLength(6),
    __metadata("design:type", String)
], CreateUserModel.prototype, "password", void 0);
class UserContext {
}

class CreateAlbumModel {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateAlbumModel.prototype, "name", void 0);

class CreateLinkModel {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateLinkModel.prototype, "name", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateLinkModel.prototype, "siteUrl", void 0);

let UserController = class UserController {
    getAll() {
        return 'This action returns all users';
    }
    getOne(id) {
        return 'This action returns user #' + id;
    }
    async createUser(user) {
        const saveUser = await this.usersService.createUser(user);
        return await this.jwtService.generateToken({
            id: saveUser.id,
            email: saveUser.email,
            login: saveUser.login
        });
    }
    async updateUser(id, user) {
        return 'Updating a user...';
    }
    remove(id) {
        return 'Removing user...';
    }
};
__decorate([
    InjectService('users'),
    __metadata("design:type", typeof (_a = typeof IUsersService !== "undefined" && IUsersService) === "function" && _a || Object)
], UserController.prototype, "usersService", void 0);
__decorate([
    InjectService('jwt'),
    __metadata("design:type", typeof (_b = typeof IJWTService !== "undefined" && IJWTService) === "function" && _b || Object)
], UserController.prototype, "jwtService", void 0);
__decorate([
    routingControllers.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    routingControllers.Get('/:id'),
    __param(0, routingControllers.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    routingControllers.Post(''),
    __param(0, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof CreateUserModel !== "undefined" && CreateUserModel) === "function" && _c || Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    routingControllers.Put('/:id'),
    __param(0, routingControllers.Param('id')), __param(1, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    routingControllers.Delete('/:id'),
    __param(0, routingControllers.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    routingControllers.JsonController('/api/users')
], UserController);
var UserControllers = UserController;
var _a, _b, _c;

var ErrorTypeOption;
(function (ErrorTypeOption) {
    ErrorTypeOption["InternalServerError"] = "InternalServerError";
    ErrorTypeOption["ValidationError"] = "ValidationError";
    ErrorTypeOption["IncorrectLoginOrPassword"] = "Incorrect login or password";
    ErrorTypeOption["NotRights"] = "You have't rights";
    ErrorTypeOption["AlbumNotExit"] = "Album does not exist";
})(ErrorTypeOption || (ErrorTypeOption = {}));

var EmailTemplateOption;
(function (EmailTemplateOption) {
    EmailTemplateOption["ResetPassword"] = "resetPassword";
})(EmailTemplateOption || (EmailTemplateOption = {}));

var UserRoleOption;
(function (UserRoleOption) {
    UserRoleOption[UserRoleOption["User"] = 0] = "User";
})(UserRoleOption || (UserRoleOption = {}));

class HttpError extends routingControllers.HttpError {
    constructor(httpCode, type, message) {
        super(httpCode, message);
        this.type = type;
    }
}

class IncorrectLoginOrPasswordError extends HttpError {
    constructor(message) {
        super(404, ErrorTypeOption.IncorrectLoginOrPassword, message);
    }
}
class NoRights extends HttpError {
    constructor(message) {
        super(404, ErrorTypeOption.NotRights, message);
    }
}

class AlbumNotExit extends HttpError {
    constructor(message) {
        super(404, ErrorTypeOption.AlbumNotExit, message);
    }
}

let AuthorizationController = class AuthorizationController {
    async authorize(request, info) {
        const { email: inputEmail, password } = info;
        const email = inputEmail.toLowerCase();
        const user = await this.usersService.getUserByEmail(email);
        if (!user)
            throw new IncorrectLoginOrPasswordError();
        const isValid = this.usersService.validatePassword(email, password, user.passwordHash);
        if (!isValid)
            throw new IncorrectLoginOrPasswordError();
        return await this.jwtService.generateToken({
            id: user.id,
            email: user.email,
            login: user.login
        });
    }
    getContext(userContext) {
        return userContext;
    }
};
__decorate([
    InjectService('jwt'),
    __metadata("design:type", typeof (_a$1 = typeof IJWTService !== "undefined" && IJWTService) === "function" && _a$1 || Object)
], AuthorizationController.prototype, "jwtService", void 0);
__decorate([
    InjectService('users'),
    __metadata("design:type", typeof (_b$1 = typeof IUsersService !== "undefined" && IUsersService) === "function" && _b$1 || Object)
], AuthorizationController.prototype, "usersService", void 0);
__decorate([
    routingControllers.Post(),
    __param(0, routingControllers.Req()),
    __param(1, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c$1 = typeof AuthorizationInfo !== "undefined" && AuthorizationInfo) === "function" && _c$1 || Object]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "authorize", null);
__decorate([
    routingControllers.Get('/context'),
    __param(0, routingControllers.CurrentUser({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof UserContext !== "undefined" && UserContext) === "function" && _d || Object]),
    __metadata("design:returntype", void 0)
], AuthorizationController.prototype, "getContext", null);
AuthorizationController = __decorate([
    routingControllers.JsonController('/authorization')
], AuthorizationController);
var AuthorizationController$1 = AuthorizationController;
var _a$1, _b$1, _c$1, _d;

let UserController$1 = class UserController {
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
            throw new NoRights();
        }
        return await this.albumsService.updateAlbum(Object.assign({}, album, { owner: user }), oldAlbum);
    }
    async removeAlbum(user, albumId) {
        const oldAlbum = await this.albumsService.getAlbumById(albumId);
        if (oldAlbum.owner !== user) {
            throw new NoRights();
        }
        return await this.albumsService.removeAlbum(oldAlbum);
    }
};
__decorate([
    InjectService('albums'),
    __metadata("design:type", typeof (_a$2 = typeof IAlbumsService !== "undefined" && IAlbumsService) === "function" && _a$2 || Object)
], UserController$1.prototype, "albumsService", void 0);
__decorate([
    routingControllers.Get(),
    __param(0, routingControllers.CurrentUser({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b$2 = typeof IUser !== "undefined" && IUser) === "function" && _b$2 || Object]),
    __metadata("design:returntype", Promise)
], UserController$1.prototype, "getAlbums", null);
__decorate([
    routingControllers.Post(),
    __param(0, routingControllers.CurrentUser({ required: true })), __param(1, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c$2 = typeof IUser !== "undefined" && IUser) === "function" && _c$2 || Object, typeof (_d$1 = typeof CreateAlbumModel !== "undefined" && CreateAlbumModel) === "function" && _d$1 || Object]),
    __metadata("design:returntype", Promise)
], UserController$1.prototype, "createAlbum", null);
__decorate([
    routingControllers.Put('/:id'),
    __param(0, routingControllers.CurrentUser()), __param(1, routingControllers.Param('id')), __param(2, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof IUser !== "undefined" && IUser) === "function" && _e || Object, Number, typeof (_f = typeof CreateAlbumModel !== "undefined" && CreateAlbumModel) === "function" && _f || Object]),
    __metadata("design:returntype", Promise)
], UserController$1.prototype, "updateAlbum", null);
__decorate([
    routingControllers.Delete('/:id'),
    __param(0, routingControllers.CurrentUser({ required: true })), __param(1, routingControllers.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof IUser !== "undefined" && IUser) === "function" && _g || Object, Number]),
    __metadata("design:returntype", Promise)
], UserController$1.prototype, "removeAlbum", null);
UserController$1 = __decorate([
    routingControllers.JsonController('/api/albums')
], UserController$1);
var AlbumsControllers = UserController$1;
var _a$2, _b$2, _c$2, _d$1, _e, _f, _g;

let UserController$2 = class UserController {
    async getLinks(user, albumId) {
        const album = await this.albumsService.getAlbumById(albumId, { relations: ['owner'] });
        if (!album) {
            throw new AlbumNotExit();
        }
        if (!album.isPublic && (!user || user.id !== album.owner.id)) {
            throw new NoRights();
        }
        return await this.linksService.getLinksByAlbum(album);
    }
    async createLink(user, albumId, link) {
        const album = await this.albumsService.getAlbumById(albumId, { relations: ['owner'] });
        if (!album) {
            throw new AlbumNotExit();
        }
        if (!user || user.id !== album.owner.id) {
            throw new NoRights();
        }
        const saveLink = await this.linksService.createLink(Object.assign({}, link, { album }));
        return saveLink.id;
    }
    async updateLink(user, albumId, link) {
        const album = await this.albumsService.getAlbumById(albumId, { relations: ['owner'] });
        if (!album) {
            throw new AlbumNotExit();
        }
        if (!user || user.id !== album.owner.id) {
            throw new NoRights();
        }
        return await this.linksService.updateLink(Object.assign({}, link), albumId);
    }
    async removeLink(linkId) {
        return await this.linksService.removeLink(linkId);
    }
};
__decorate([
    InjectService('links'),
    __metadata("design:type", typeof (_a$3 = typeof ILinksService !== "undefined" && ILinksService) === "function" && _a$3 || Object)
], UserController$2.prototype, "linksService", void 0);
__decorate([
    InjectService('albums'),
    __metadata("design:type", typeof (_b$3 = typeof IAlbumsService !== "undefined" && IAlbumsService) === "function" && _b$3 || Object)
], UserController$2.prototype, "albumsService", void 0);
__decorate([
    routingControllers.Get('/:albumId'),
    __param(0, routingControllers.CurrentUser()), __param(1, routingControllers.Param('albumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c$3 = typeof IUser !== "undefined" && IUser) === "function" && _c$3 || Object, Number]),
    __metadata("design:returntype", Promise)
], UserController$2.prototype, "getLinks", null);
__decorate([
    routingControllers.Post('/:albumId'),
    __param(0, routingControllers.CurrentUser({ required: true })), __param(1, routingControllers.Param('albumId')), __param(2, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d$2 = typeof IUser !== "undefined" && IUser) === "function" && _d$2 || Object, Number, typeof (_e$1 = typeof CreateLinkModel !== "undefined" && CreateLinkModel) === "function" && _e$1 || Object]),
    __metadata("design:returntype", Promise)
], UserController$2.prototype, "createLink", null);
__decorate([
    routingControllers.Put('/:albumId'),
    __param(0, routingControllers.CurrentUser({ required: true })), __param(1, routingControllers.Param('albumId')), __param(2, routingControllers.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f$1 = typeof IUser !== "undefined" && IUser) === "function" && _f$1 || Object, Number, typeof (_g$1 = typeof CreateLinkModel !== "undefined" && CreateLinkModel) === "function" && _g$1 || Object]),
    __metadata("design:returntype", Promise)
], UserController$2.prototype, "updateLink", null);
__decorate([
    routingControllers.Authorized(),
    routingControllers.Delete('/:id'),
    __param(0, routingControllers.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController$2.prototype, "removeLink", null);
UserController$2 = __decorate([
    routingControllers.JsonController('/api/links')
], UserController$2);
var LinksControllers = UserController$2;
var _a$3, _b$3, _c$3, _d$2, _e$1, _f$1, _g$1;

var controllers = [UserControllers, AuthorizationController$1, AlbumsControllers, LinksControllers];

let User = class User {
};
__decorate([
    typeorm.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    typeorm.OneToMany(type => Album$1, album => album.owner),
    __metadata("design:type", Array)
], User.prototype, "albums", void 0);
__decorate([
    typeorm.CreateDateColumn(),
    __metadata("design:type", Object)
], User.prototype, "createDate", void 0);
__decorate([
    typeorm.UpdateDateColumn(),
    __metadata("design:type", Object)
], User.prototype, "updateDate", void 0);
User = __decorate([
    typeorm.Entity('users'),
    typeorm.Unique(['email'])
], User);
var User$1 = User;

let Link = class Link {
};
__decorate([
    typeorm.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Link.prototype, "id", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Link.prototype, "name", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Link.prototype, "description", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Link.prototype, "siteUrl", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Link.prototype, "image", void 0);
__decorate([
    typeorm.ManyToOne(type => Album$1, album => album.links, { cascade: true }),
    __metadata("design:type", typeof (_a$4 = typeof Album$1 !== "undefined" && Album$1) === "function" && _a$4 || Object)
], Link.prototype, "album", void 0);
__decorate([
    typeorm.CreateDateColumn(),
    __metadata("design:type", Object)
], Link.prototype, "createDate", void 0);
__decorate([
    typeorm.UpdateDateColumn(),
    __metadata("design:type", Object)
], Link.prototype, "updateDate", void 0);
Link = __decorate([
    typeorm.Entity('links')
], Link);
var Link$1 = Link;
var _a$4;

let Album = class Album {
};
__decorate([
    typeorm.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Album.prototype, "id", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Album.prototype, "name", void 0);
__decorate([
    typeorm.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], Album.prototype, "description", void 0);
__decorate([
    typeorm.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Album.prototype, "isPublic", void 0);
__decorate([
    typeorm.ManyToOne(type => User$1, user => user.albums, { cascade: true }),
    typeorm.JoinColumn(),
    __metadata("design:type", typeof (_a$5 = typeof User$1 !== "undefined" && User$1) === "function" && _a$5 || Object)
], Album.prototype, "owner", void 0);
__decorate([
    typeorm.OneToMany(type => Link$1, link => link.album),
    __metadata("design:type", Array)
], Album.prototype, "links", void 0);
__decorate([
    typeorm.CreateDateColumn(),
    __metadata("design:type", Object)
], Album.prototype, "createDate", void 0);
__decorate([
    typeorm.UpdateDateColumn(),
    __metadata("design:type", Object)
], Album.prototype, "updateDate", void 0);
Album = __decorate([
    typeorm.Entity('albums')
], Album);
var Album$1 = Album;
var _a$5;

var entities = [
    User$1,
    Link$1,
    Album$1
];

function encryptPassword(email, password) {
    return cryptoJs.SHA256(`${email}.newCoLink.${password}`).toString();
}

let UsersService = class UsersService {
    createUser(info) {
        const user = new User$1();
        user.email = info.email;
        user.passwordHash = this.encryptPassword(info.email, info.password);
        user.login = info.login;
        return this.saveUser(user);
    }
    async saveUser(user) {
        return this.usersRepository.save(user);
    }
    getUser(conditions) {
        return this.usersRepository.findOne(conditions);
    }
    getUserById(id) {
        return this.getUser({ id });
    }
    getUserByEmail(email) {
        return this.getUser({ email });
    }
    encryptPassword(email, password) {
        return encryptPassword(email, password);
    }
    validatePassword(email, password, passwordHash) {
        const generatedPasswordHash = encryptPassword(email, password);
        return Boolean(generatedPasswordHash === passwordHash);
    }
};
__decorate([
    typeormTypediExtensions.OrmRepository(User$1),
    __metadata("design:type", typeof (_a$6 = typeof typeorm.Repository !== "undefined" && typeorm.Repository) === "function" && _a$6 || Object)
], UsersService.prototype, "usersRepository", void 0);
UsersService = __decorate([
    typedi.Service()
], UsersService);
var UsersServices = UsersService;
var _a$6;

let AlbumsService = class AlbumsService {
    createAlbum(info) {
        const album = new Album$1();
        album.name = info.name;
        album.description = info.description;
        album.isPublic = info.isPublic;
        album.owner = info.owner;
        return this.saveAlbum(album);
    }
    async updateAlbum(info, oldAlbum) {
        const album = new Album$1();
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
    typeormTypediExtensions.OrmRepository(Album$1),
    __metadata("design:type", typeof (_a$7 = typeof typeorm.Repository !== "undefined" && typeorm.Repository) === "function" && _a$7 || Object)
], AlbumsService.prototype, "albumsRepository", void 0);
AlbumsService = __decorate([
    typedi.Service()
], AlbumsService);
var AlbumsServices = AlbumsService;
var _a$7;

let resolver;
resolver = new imageResolver();
resolver.register(new imageResolver.FileExtension());
resolver.register(new imageResolver.MimeType());
resolver.register(new imageResolver.Opengraph());
resolver.register(new imageResolver.Webpage());
function findImage(url) {
    return new Promise((resolve, reject) => {
        resolver.resolve(url, result => {
            if (!result) {
                return resolve(null);
            }
            resolve(result.image);
        });
    });
}

let LinksService = class LinksService {
    async createLink(info) {
        const link = new Link$1();
        link.name = info.name;
        link.description = info.description;
        link.siteUrl = info.siteUrl;
        link.image = await findImage(info.siteUrl);
        link.album = info.album;
        return this.saveLink(link);
    }
    async updateLink(info, id) {
        const oldLink = await this.getLinkById(id);
        const album = new Link$1();
        album.name = info.name;
        album.description = info.description;
        const updatedMiner = this.mergeLink(oldLink, album);
        return this.saveLink(updatedMiner);
    }
    async getLinksByAlbum(album) {
        return this.linksRepository.find({ album });
    }
    mergeLink(album, update) {
        return this.linksRepository.merge(album, update);
    }
    async saveLink(user) {
        return this.linksRepository.save(user);
    }
    async removeLink(id) {
        const album = await this.getLinkById(id);
        return this.linksRepository.remove(album);
    }
    getLinkById(id) {
        return this.linksRepository.findOne({ id });
    }
};
__decorate([
    typeormTypediExtensions.OrmRepository(Link$1),
    __metadata("design:type", typeof (_a$8 = typeof typeorm.Repository !== "undefined" && typeorm.Repository) === "function" && _a$8 || Object)
], LinksService.prototype, "linksRepository", void 0);
LinksService = __decorate([
    typedi.Service()
], LinksService);
var LinksServices = LinksService;
var _a$8;

const SECRET_KEY = 'addfsfsfssd';
const EXPIRES_TIME = '48h';
class JWTService {
    generateToken(payload, options, toBase64) {
        return new Promise((resolve, reject) => {
            const payloadObject = Object.assign({}, payload);
            jsonwebtoken.sign(payloadObject, SECRET_KEY, Object.assign({ expiresIn: EXPIRES_TIME }, options), (err, token) => {
                if (err)
                    return reject(err);
                const finalToken = toBase64 ? base64Url.encode(token) : token;
                resolve(finalToken);
            });
        });
    }
    verifyToken(token, options, isBase64) {
        return new Promise((resolve, reject) => {
            const inputToken = isBase64 ? base64Url.decode(token) : token;
            jsonwebtoken.verify(inputToken, SECRET_KEY, Object.assign({ maxAge: EXPIRES_TIME }, options), (err, payload) => {
                if (err)
                    return reject(err);
                resolve(payload);
            });
        });
    }
    decodeToken(token, options) {
        return new Promise((resolve, reject) => {
            const payload = jsonwebtoken.decode(token, options);
            if (!payload)
                return reject('Empty payload');
            resolve(payload);
        });
    }
}

const services = [
    { prefix: 'service', name: 'jwt', target: JWTService },
    { prefix: 'service', name: 'users', target: UsersServices },
    { prefix: 'service', name: 'albums', target: AlbumsServices },
    { prefix: 'service', name: 'links', target: LinksServices }
];

class AuthorizationChecker {
    async check(token, action) {
        if (!token)
            return false;
        let user = undefined;
        try {
            user = await this.jwtService.verifyToken(token);
        }
        catch (e) { }
        return Boolean(user && user.id);
    }
}
__decorate([
    InjectService('jwt'),
    __metadata("design:type", typeof (_a$9 = typeof IJWTService !== "undefined" && IJWTService) === "function" && _a$9 || Object)
], AuthorizationChecker.prototype, "jwtService", void 0);
var _a$9;

class CurrentUserChecker {
    async check(token, action) {
        if (!token)
            return undefined;
        let user = undefined;
        try {
            user = await this.jwtService.verifyToken(token);
        }
        catch (e) { }
        return user;
    }
}
__decorate([
    InjectService('jwt'),
    __metadata("design:type", typeof (_a$10 = typeof IJWTService !== "undefined" && IJWTService) === "function" && _a$10 || Object)
], CurrentUserChecker.prototype, "jwtService", void 0);
var _a$10;

const checkers = [
    { prefix: 'checker', name: 'authorization', target: AuthorizationChecker },
    { prefix: 'checker', name: 'currentUser', target: CurrentUserChecker }
];

let CustomErrorHandler = class CustomErrorHandler {
    error(error, request, response, next) {
        const statusCode = 'httpCode' in error && typeof error.httpCode === 'number' ? error.httpCode : 500;
        const resultError = {
            failure: true,
            type: 'type' in error && error.type ? error.type : ErrorTypeOption.InternalServerError
        };
        if ('errors' in error && error.errors) {
            resultError.type = ErrorTypeOption.ValidationError;
            resultError.validationErrors = error.errors;
        }
        else if ('message' in error && error.message) {
            resultError.message = error.message;
        }
        response.status(statusCode).json(resultError);
    }
};
CustomErrorHandler = __decorate([
    routingControllers.Middleware({ type: 'after' })
], CustomErrorHandler);
var ErrorHandlerMiddleware = CustomErrorHandler;

var middlewares = {
    ErrorHandlerMiddleware
};

require(`dotenv`).config();
class Application {
    constructor(environment, config) {
        this.dependencyProvider = new DependencyProvider(services, checkers);
        this.databaseContext = new PostgresDatabaseContext({ entities, options: config.dbConfig });
        this.httpServer = new HttpServer({ middlewares, controllers, options: config.http });
    }
    start() {
        this.dependencyProvider.register();
        this.databaseContext.connect()
            .then(() => {
            this.httpServer.createServer({
                authorization: getDependency('checker', 'authorization'),
                currentUser: getDependency('checker', 'currentUser')
            });
            console.log('Server start');
        }).catch(console.error);
    }
}

var local = {
    http: {
        development: true,
        cors: true,
        validation: true,
        port: 8892
    },
    domains: {
        api: 'http://localhost:8892',
        cdn: '/',
        web: 'http://localhost:3005'
    },
    dbConfig: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'coLink',
        username: 'postgres',
        password: 'root',
        logging: true,
        synchronize: true
    }
};

var configs = {
    local
};

const server = new Application(process.env.TYPE, configs[process.env.TYPE] || configs.local);
server.start();
