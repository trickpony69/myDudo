webpackJsonp([3],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeListe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeListe = /** @class */ (function () {
    function HomeListe(storage, actionSheet, navParams, alertCtrl, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.actionSheet = actionSheet;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = [];
        this.cardCount = 0;
        this.immagine = "src=\"./../assets/imgs/sfondo0.jpg\"";
        this.storage.get('cards').then(function (val) {
            if (val != null) {
                _this.cards = val;
            }
        });
        this.storage.get('cardCount').then(function (val) {
            if (val >= 0)
                _this.cardCount = val;
        });
        this.nickname = navParams.get("nickname");
    }
    HomeListe.prototype.add = function () {
        var _this = this;
        var splash = this.alertCtrl.create({
            title: 'Lista',
            message: 'Inserisci il nome della lista che vuoi creare',
            inputs: [
                {
                    placeholder: '',
                    name: 'title'
                }
            ],
            buttons: [
                {
                    text: 'Invia',
                    handler: function (data) {
                        _this.cards.push({ id: _this.cardCount, name: data.title, friend: "null", proprietary: "yes" });
                        _this.cardCount++;
                        _this.storage.set("cards", _this.cards);
                        _this.storage.set("cardCount", _this.cardCount);
                    }
                }
            ]
        });
        splash.present();
    };
    HomeListe.prototype.addShared = function () {
        var _this = this;
        var splash = this.alertCtrl.create({
            title: 'Lista',
            message: 'Inserisci il nome della lista ed il nome del tuo amico',
            inputs: [
                {
                    placeholder: 'nome lista',
                    name: 'title'
                },
                {
                    placeholder: 'nome amico',
                    name: 'friend'
                },
            ],
            buttons: [
                {
                    text: 'Invia',
                    handler: function (data) {
                        _this.cards.push({ id: _this.cardCount, name: data.title, friend: data.friend, proprietary: "no" });
                        _this.cardCount++;
                        _this.storage.set("cards", _this.cards);
                        _this.storage.set("cardCount", _this.cardCount);
                    }
                }
            ]
        });
        splash.present();
        // alert.onDidDismiss(() => {})
    };
    HomeListe.prototype.choseImage = function (index) {
        var splash = this.alertCtrl.create({
            title: 'Sfondo',
            // message: 'Inserisci il nome della lista ed il nome del tuo amico',
            inputs: [
                {
                    type: 'radio',
                    name: 'image',
                    label: 'nessuno',
                    value: 'nessuno',
                }, {
                    type: 'radio',
                    name: 'image',
                    label: 'sfondo 0',
                    value: 'sfondo0',
                }, {
                    type: 'radio',
                    name: 'image',
                    label: 'sfondo 1',
                    value: 'sfondo1',
                }, {
                    type: 'radio',
                    name: 'image',
                    label: 'sfondo 2',
                    value: 'sfondo2',
                }, {
                    type: 'radio',
                    name: 'image',
                    label: 'ombrellone',
                    value: 'ombrellone',
                }, {
                    type: 'radio',
                    name: 'image',
                    label: 'spiaggia',
                    value: 'spiaggia',
                }, {
                    type: 'radio',
                    name: 'image',
                    label: 'carrello della spesa',
                    value: 'shopping',
                }
            ],
            buttons: [
                {
                    text: 'Cambia',
                    handler: function (data) {
                        var listeCards = document.getElementsByTagName("img");
                        if (data == "nessuno") {
                            listeCards[index].style.display = "none";
                        }
                        else {
                            listeCards[index].style.background = "url('./../assets/imgs/" + data + ".jpg')";
                            listeCards[index].style.display = "block";
                        }
                    }
                }
            ]
        });
        splash.present();
    };
    HomeListe.prototype.openTodo = function (card) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], {
            id: card.id,
            name: card.name,
            nickname: this.nickname,
            friend: card.friend,
            proprietary: card.proprietary
        }, {
            animate: true,
            animation: "ios-transition",
            direction: "backward"
        });
    };
    HomeListe.prototype.action = function (card, index) {
        this.presentActionSheet(card, index);
    };
    HomeListe.prototype.presentActionSheet = function (card, index) {
        var _this = this;
        var popup = this.actionSheet.create({
            title: 'Cosa fuori fare con questa lista ?',
            buttons: [
                {
                    text: "modifica",
                    handler: function () { _this.choseImage(index); }
                }, {
                    text: 'Annulla',
                    role: 'cancel',
                    handler: function () { }
                }, {
                    text: 'Elimina',
                    cssClass: 'deleteButton',
                    role: 'delete',
                    handler: function () { _this.removePost(card); }
                }
            ]
        });
        popup.present();
    };
    HomeListe.prototype.removePost = function (post) {
        var index = this.cards.indexOf(post);
        if (index > -1) {
            this.cards.splice(index, 1);
            this.cardCount--;
            this.storage.set("cards", this.cards);
            this.storage.set("cardCount", this.cardCount);
        }
    };
    HomeListe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-liste',template:/*ion-inline-start:"/Users/micky/Documents/GitHub/myDudo/src/pages/home-liste/home-liste.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <h1 id="titolo">Le tue liste({{cardCount}})</h1>\n    <p>Il tuo user: {{nickname}}</p>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-fab bottom right>\n    <button ion-fab>\n      <ion-icon name="create"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="addShared()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-card class="card" (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of cards; let i = index">\n    <img id="immagine"/>\n    <ion-card-content>\n      <ion-card-title id="font">\n        {{ card.name }}\n      </ion-card-title>\n      <p id="description">\n        Condivisa con {{ card.friend }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/micky/Documents/GitHub/myDudo/src/pages/home-liste/home-liste.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _e || Object])
    ], HomeListe);
    return HomeListe;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home-liste.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(30);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(afDatabase, navCtrl, navParams, alertCtrl) {
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toUser = {
            name: navParams.get("name"),
            nickname: navParams.get("nickname"),
            friend: navParams.get("friend"),
            proprietary: navParams.get("proprietary")
        };
        if (this.toUser.proprietary == "yes")
            this.itemsRef = afDatabase.list("/todos/" + this.toUser.nickname + "/" + this.toUser.name + "/");
        else
            this.itemsRef = afDatabase.list("/todos/" + this.toUser.friend + "/" + this.toUser.name + "/");
        this.todos = this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    ListPage.prototype.createTodo = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Aggiungi',
            message: 'Cosa dovrai fare di bello oggi?',
            inputs: [
                {
                    placeholder: 'task',
                    name: 'title'
                }
            ],
            buttons: [
                {
                    text: 'Annulla'
                },
                {
                    text: 'Salva',
                    handler: function (data) {
                        _this.itemsRef.push({ content: data.title });
                    }
                }
            ]
        });
        prompt.present();
    };
    ListPage.prototype.updateTodo = function (todo) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cambiato idea ?',
            inputs: [
                {
                    name: 'title',
                    value: todo.content,
                }
            ],
            buttons: [
                {
                    text: 'Annulla'
                },
                {
                    text: 'Modifica',
                    handler: function (data) {
                        _this.itemsRef.update(todo.key, { content: data.title });
                    }
                }
            ]
        });
        prompt.present();
    };
    ListPage.prototype.deleteTodo = function (key) {
        this.itemsRef.remove(key);
    };
    ListPage.prototype.checked = function (todo) {
        document.getElementById("task").style.textDecoration = "line-through";
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/micky/Documents/GitHub/myDudo/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar padding>\n    <ion-title text-center>\n      <p>{{ toUser.name }}</p>\n      <p>{{ toUser.link }}</p>\n      <p>Il tuo nickname: {{ toUser.nickname }}</p>\n    </ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="createTodo()" ion-button icon-only large >\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let task of todos | async">\n      <ion-item>\n        <h1 id="task">{{ task.content }}</h1>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button icon-only color="light" (click)="updateTodo(task)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button icon-only color="danger" (click)="deleteTodo(task.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side="left">\n        <button ion-button icon-only color="secondary" (click)="checked()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/micky/Documents/GitHub/myDudo/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_to_do_to_do__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, todoProv) {
        this.navCtrl = navCtrl;
        this.todoProv = todoProv;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/micky/Documents/GitHub/myDudo/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Impostazioni</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/micky/Documents/GitHub/myDudo/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_to_do_to_do__["a" /* ToDoProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-liste/home-liste.module": [
		489,
		2
	],
	"../pages/list/list.module": [
		490,
		1
	],
	"../pages/settings/settings.module": [
		491,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_PouchDb__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToDoProvider = /** @class */ (function () {
    function ToDoProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.db = new __WEBPACK_IMPORTED_MODULE_1_PouchDb__["a" /* default */]('myDudo');
        this.options = {
            live: true,
            retry: true,
            continuous: true
        };
    }
    ToDoProvider.prototype.getTodo = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log('ciè problema con database ( getTodo() )');
            });
        });
    };
    ToDoProvider.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //Un documento è stato eliminato
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            else {
                this.data.push(change.doc);
            }
        }
    };
    ToDoProvider.prototype.createTodo = function (todo) {
        this.db.post(todo);
    };
    ToDoProvider.prototype.updateTodo = function (todo) {
        this.db.put(todo).catch(function (err) {
            console.log(err);
        });
    };
    ToDoProvider.prototype.deleteTodo = function (todo) {
        this.db.remove(todo).catch(function (err) {
            console.log(err);
        });
    };
    ToDoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ToDoProvider);
    return ToDoProvider;
}());

//# sourceMappingURL=to-do.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_liste_home_liste__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(alertCtrl, navCtrl) {
        var _this = this;
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_liste_home_liste__["a" /* HomeListe */];
        this.impostazioni = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
        this.tab2Params = {};
        var splash = alertCtrl.create({
            title: 'Nome utente',
            message: 'Inserisci il tuo nome utente',
            enableBackdropDismiss: false,
            inputs: [
                {
                    placeholder: '',
                    name: 'title'
                }
            ],
            buttons: [
                {
                    text: 'Invia',
                    handler: function (data) {
                        _this.tab2Params = { nickname: data.title };
                        console.log("Il tuo nickname " + _this.tab2Params.nickname);
                    }
                }
            ]
        });
        splash.present();
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/micky/Documents/GitHub/myDudo/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="home" [rootParams]="tab2Params" tabTitle="Liste" tabIcon="home"></ion-tab>\n  <ion-tab [root]="impostazioni"  tabTitle="Impostazioni" tabIcon="settings"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/micky/Documents/GitHub/myDudo/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _b || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_to_do_to_do__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_liste_home_liste__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyCJf4aqwkCNGixvmTKHm8NnnzksXmTnpE0",
    authDomain: "mydudo-27891.firebaseapp.com",
    databaseURL: "https://mydudo-27891.firebaseio.com",
    projectId: "mydudo-27891",
    storageBucket: "mydudo-27891.appspot.com",
    messagingSenderId: "33566013920"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_liste_home_liste__["a" /* HomeListe */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-liste/home-liste.module#HomeListeModule', name: 'HomeListe', segment: 'home-liste', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_liste_home_liste__["a" /* HomeListe */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_to_do_to_do__["a" /* ToDoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/micky/Documents/GitHub/myDudo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/micky/Documents/GitHub/myDudo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map