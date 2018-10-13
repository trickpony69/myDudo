webpackJsonp([5],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FriendsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsListPage = /** @class */ (function () {
    function FriendsListPage(navCtrl, navParams, profileProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProv = profileProv;
        this.friends = [];
        console.log(navParams.get("proprietaryUid"), "---", navParams.get("title"));
        profileProv.getFriendForAList(navParams.get("proprietaryUid"), navParams.get("title")).then(function (data) {
            data.forEach(function (element) {
                console.log(element);
                profileProv.getNameByUid(element.data).then(function (name) {
                    _this.friends.push({ name: name });
                });
            });
            console.log("friends: ", _this.friends);
        });
    }
    FriendsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsListPage');
    };
    FriendsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends-list',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/friends-list/friends-list.html"*/'<!--\n  Generated template for the FriendsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Utenti che possono</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let friend of friends">\n      <ion-list>\n          <ion-item>\n            <ion-avatar item-start>\n                <ion-icon name="contact" item-start></ion-icon>\n            </ion-avatar>\n            <h2>{{friend.name}}</h2>\n            <!-- <p>Ugh. As if.</p> -->\n          </ion-item>\n        </ion-list>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/friends-list/friends-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _c || Object])
    ], FriendsListPage);
    return FriendsListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=friends-list.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_list_friends_list__ = __webpack_require__(155);
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
        var _this = this;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toUser = {
            path: navParams.get("path"),
            uid: navParams.get("uid"),
            email: navParams.get("email"),
            cardName: navParams.get("cardName"),
            nickname: navParams.get("nickname"),
            friendId: navParams.get("friend"),
            proprietary: navParams.get("proprietary"),
            proprietaryUid: navParams.get("proprietaryUid")
        };
        console.log(this.toUser.proprietaryUid);
        if (this.toUser.proprietary == "0")
            this.itemsRef = afDatabase.list(this.toUser.path);
        else
            this.itemsRef = afDatabase.list("/todos/" + this.toUser.uid + "/" + this.toUser.cardName);
        //-----------------------------Sostituito dalla funzione sottostante---------------------
        // this.todos = this.itemsRef.snapshotChanges().pipe(
        //   map(changes =>
        //     changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))
        //   ))
        this.itemsRef.valueChanges().subscribe(function (item) { return _this.todos = item; });
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
                    text: 'Invia',
                    handler: function (data) {
                        _this.itemsRef.push({ content: data.title, status: 0 }); //status 0 è normale, 1 è sottolineata
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
    ListPage.prototype.checkUncheck = function (todo, i) {
        if (todo.status == 0)
            this.itemsRef.update(todo.key, { status: 1 });
        else
            this.itemsRef.update(todo.key, { status: 0 });
    };
    ;
    ListPage.prototype.viewListFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_list_friends_list__["a" /* FriendsListPage */], {
            title: this.toUser.cardName,
            proprietaryUid: this.toUser.proprietaryUid
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar padding>\n    <ion-title text-center>\n      <p (click)="viewListFriends()" >Titolo</p>\n      <!-- <p>{{ toUser.name }}</p>\n      <p>{{ toUser.link }}</p>\n      <p>Il tuo nickname: {{ toUser.nickname }}</p> -->\n    </ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="createTodo()" ion-button icon-only large >\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let task of todos  ; let i = index ">\n      <ion-item *ngIf="task.content">\n        <div *ngIf="task.status == 0" > <h1 #elemento>{{ task.content }}</h1></div>\n        <div *ngIf="task.status == 1" > <h1 #elemento class=\'lineThrough\'>{{ task.content }}</h1></div>       \n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button icon-only color="light" (click)="updateTodo(task)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button icon-only color="danger" (click)="deleteTodo(task.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side="left">\n        <button ion-button icon-only color="secondary" (click)="checkUncheck(task)">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/list/list.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[elemento]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object])
    ], ListPage);
    return ListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeListe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(82);
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
    function HomeListe(storage, actionSheet, alertCtrl, navCtrl, profileProv) {
        var _this = this;
        this.storage = storage;
        this.actionSheet = actionSheet;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.profileProv = profileProv;
        this.cards = [];
        this.sharedCards = [];
        this.cardCount = 0;
        this.user = { email: "", uid: "" };
        this.immagine = "src=\"./../assets/imgs/sfondo0.jpg\"";
        this.storage.get('cards').then(function (val) {
            // Object.values(myObject).length forse funziona anche questa
            var counterCards = function (obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key))
                        size++;
                }
                return size;
            };
            for (var i = 0; i < counterCards(val); i++) {
                if (val != null && val[i].owner == profileProv.getUserProfile().key) {
                    _this.cards.push(val[i]);
                }
            }
        });
        this.storage.get('cardCount').then(function (val) {
            if (val >= 0)
                _this.cardCount = val;
        });
    }
    HomeListe.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.user = { email: "", uid: this.profileProv.getUserProfile().key };
        this.profileProv.getFriendLists().then(function (data) {
            var trovato = false;
            data.forEach(function (element0) {
                _this.sharedCards.forEach(function (local, index) {
                    if (element0.path == local.path) {
                        trovato = true;
                    }
                });
                if (!trovato) {
                    _this.sharedCards.push({ id: '0', name: element0.title, friends: "null", proprietary: 0, path: element0.path, proprietaryUid: element0.proprietaryUid });
                    _this.cardCount++;
                }
            });
        });
    };
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
                    text: 'Crea',
                    handler: function (data) {
                        _this.cards.push({ owner: _this.profileProv.getUserProfile().key, id: _this.cardCount, name: data.title, friends: "null", proprietary: 1, path: data.cardPath });
                        _this.cardCount++;
                        _this.storage.set("cards", _this.cards);
                        _this.storage.set("cardCount", _this.cardCount);
                    }
                }
            ]
        });
        splash.present();
    };
    HomeListe.prototype.checkAlreadyAdded = function (list, friendKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.profileProv.getFriendForAList(_this.profileProv.getUserProfile().key, list).then(function (data) {
                console.log(data);
                data.forEach(function (element) {
                    if (friendKey == element.uid) {
                        resolve(true);
                    }
                });
                resolve(false);
            });
        });
    };
    HomeListe.prototype.addFriend = function (card, i) {
        var _this = this;
        var friends = this.profileProv.getPeople().then(function (people) {
            var alert = _this.alertCtrl.create();
            people.forEach(function (person, index) {
                _this.checkAlreadyAdded(card.name, person.key).then(function (condition) {
                    // console.log("condition: ", condition)
                    alert.addInput({
                        type: 'radio',
                        label: person.payload.name,
                        value: person.key,
                        checked: false,
                        disabled: condition
                    });
                });
            });
            alert.setTitle('Persone');
            alert.addButton('Annulla');
            alert.addButton({
                text: 'Aggiungi',
                handler: function (friend) {
                    var path = "/todos/" + _this.user.uid + "/" + _this.cards[i].name + "/";
                    _this.profileProv.setFriends(friend, _this.cards[i].name, i, path, _this.user.uid);
                }
            });
            alert.present();
        });
    };
    HomeListe.prototype.openTodo = function (card) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], {
            path: card.path,
            uid: this.user.uid,
            email: this.user.email,
            id: card.id,
            cardName: card.name,
            friend: card.friend,
            proprietary: card.proprietary,
            proprietaryUid: card.owner
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
            title: 'Cosa vuoi fare con questa lista ?',
            buttons: [
                {
                    text: "Aggiungi amico",
                    handler: function () { _this.addFriend(card, index); }
                }, {
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
    //-----------REFACTORING------------
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
                    placeholder: 'id amico',
                    name: 'friendId'
                },
            ],
            buttons: [
                {
                    text: 'Aggiungi',
                    handler: function (data) {
                        _this.cards.push({ id: _this.cardCount, name: data.title, friend: data.friendId, proprietary: 0 });
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
            message: 'Inserisci il nome della lista ed il nome del tuo amico',
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
    HomeListe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-liste',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/home-liste/home-liste.html"*/'<!-- <ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n  <ion-fab bottom right>\n    <button ion-fab (click)="add()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n    <!-- <ion-fab-list side="top">\n      <button ion-fab (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab-list> -->\n    <!-- <ion-fab-list side="left">\n      <button ion-fab (click)="addShared()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-fab-list> -->\n  </ion-fab>\n  <ion-card class="card" (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of cards; let i = index">\n    <img id="immagine" />\n    <ion-card-content id="gradient">\n      <ion-card-title id="font">\n        {{ card.name }}\n      </ion-card-title>\n      <p id="description" *ngIf="card.proprietary == 1">\n        Questa lista è tua\n      </p>\n      <p id="description" *ngIf="card.proprietary == 0">\n        Questa lista è di un tuo amico\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card class="card" (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of sharedCards; let i = index">\n    <ion-card-content>\n      <ion-card-title id="font">\n        {{ card.name }}\n      </ion-card-title>\n      <p id="description" *ngIf="card.proprietary == 1">\n        Questa lista è tua\n      </p>\n      <p id="description" *ngIf="card.proprietary == 0">\n        Questa lista è di un tuo amico\n      </p>\n    </ion-card-content>\n  </ion-card>  -->\n  <!-- test --> \n  <ion-list (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of sharedCards; let i = index">\n  <section class="cards" >\n    <article class="card card--2">\n      <div class="card__info-hover">\n        <svg class="card__like" viewBox="0 0 24 24">\n          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />\n        </svg>\n        <div class="card__clock-info">\n          <svg class="card__clock" viewBox="0 0 24 24">\n            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />\n          </svg><span class="card__time">5 min</span>\n        </div>\n\n      </div>\n      <div class="card__img"></div>\n      <a href="#" class="card_link">\n        <div class="card__img--hover"></div>\n      </a>\n      <div class="card__info">\n        <span class="card__category">Questa lista è di un tuo amico</span>\n        <h1 class="card__title">{{card.name}}</h1>\n        <span class="card__by">by <a href="#" class="card__author" title="author">Lista di:</a></span>\n      </div>\n    </article>\n  </section>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/home-liste/home-liste.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _e || Object])
    ], HomeListe);
    return HomeListe;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home-liste.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_liste_home_liste__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
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
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_liste_home_liste__["a" /* HomeListe */];
        this.impostazioni = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="home" tabTitle="Liste" tabIcon="home"></ion-tab>\n  <ion-tab [root]="impostazioni" tabTitle="Impostazioni" tabIcon="settings"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_session__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(249);
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
    function SettingsPage(toastCtrl, loadingCtrl, session, profileProv, clipboard) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.session = session;
        this.profileProv = profileProv;
        this.clipboard = clipboard;
        this.user = { email: "", uid: "" };
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        // non ho capito come funzioni
        //  var profilex;
        //  this.profileProv.getUserProfile().on("value", userProfileSnapshot => {
        //  profilex = userProfileSnapshot.val();
        //  });
        //  console.log(profilex);
        var profile1 = this.profileProv.getUserProfile();
        this.user = { email: this.profileProv.getEmail(), uid: profile1.key };
    };
    SettingsPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Id amico copiato negli appunti',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast'); // penso se fare qualcosa dopo il toast
        });
        toast.present();
    };
    SettingsPage.prototype.copy = function () {
        this.clipboard.copy(this.user.uid);
        this.presentToast();
    };
    SettingsPage.prototype.logout = function () {
        var loading;
        loading = this.loadingCtrl.create({
            content: "<img src=\"assets/imgs/loader.svg\"/>",
            spinner: 'hide'
        });
        loading.present();
        this.session.logoutUser().then(function () { loading.dismiss().then(function () { window.location.reload(); }); });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Impostazioni</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="slide-container">\n\n    <div class="wrapper">\n      <div class="clash-card barbarian">\n        <div class="clash-card__image clash-card__image--barbarian">\n          <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" /> -->\n          <img src="assets/imgs/bogi.png" alt="barbarian" />\n          <!-- https://cdn4.iconfinder.com/data/icons/cute-funny-monster-characters/66/20-512.png -->\n        </div>\n        <!-- <div class="clash-card__level clash-card__level--barbarian">Level 4</div> -->\n        <div class="clash-card__unit-name">Il tuo profilo</div>\n        <div class="clash-card__unit-description">\n          <ion-list>\n            <ion-item>email: {{user.email}}</ion-item>\n            <ion-item>uid: {{user.uid}}</ion-item>\n          </ion-list>\n          <!-- <h1></h1>\n          <h1></h1> -->\n          <button ion-button block (click)="logout()" color="danger">Esci</button>\n        </div>\n\n        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">\n          <div class="one-third">\n            <!-- <div class="stat">20<sup>S</sup></div> -->\n            <!-- <div class="stat-value">Training</div> -->\n          </div>\n\n          <div class="one-third">\n            <!-- <div class="stat">16</div> -->\n            <!-- <div class="stat-value">Speed</div> -->\n          </div>\n\n          <div class="one-third no-border">\n            <!-- <div class="stat">150</div> -->\n            <!-- <div class="stat-value">Cost</div> -->\n          </div>\n\n        </div>\n\n      </div> <!-- end clash-card barbarian-->\n    </div> <!-- end wrapper -->\n  </div>\n</ion-content>\n\n<!-- <ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="heart"></ion-icon>\n      </ion-avatar>\n      <h2>Email: {{ user.email }}</h2>\n      <p>La tua email</p>\n    </ion-item>\n    <ion-item (tap)="copy()">\n      <ion-avatar item-start>\n        <ion-icon name="person"></ion-icon>\n      </ion-avatar>\n      <div >\n      <h2 >Id: {{ user.uid }}</h2>\n      <p>Ti servirà per condividere le tue liste</p>\n    </div>\n    </ion-item>\n  </ion-list>\n  <button ion-button block  (click)="logout()" color="danger">Esci</button>\n</ion-content> -->'/*ion-inline-end:"/Users/michele/myDudo/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_session_session__["a" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SessionProvider = /** @class */ (function () {
    function SessionProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.user = { uid: "", email: "", name: "" };
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            console.log("authState: ", _this.authState);
        });
    }
    SessionProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().signInWithEmailAndPassword(email, password);
    };
    ;
    SessionProvider.prototype.signupUser = function (email, password, name) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUserCredential) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]()
                .ref("/userProfile/" + newUserCredential.user.uid + "/")
                .set({ email: email, name: name });
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    SessionProvider.prototype.resetPassword = function (email) {
        var userId = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]()
            .ref("/userProfile/" + userId)
            .off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().sendPasswordResetEmail(email);
    };
    SessionProvider.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]()
            .ref("/userProfile/" + userId)
            .off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().signOut();
    };
    SessionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_to_do_to_do__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_liste_home_liste__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_session_session__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_clipboard__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_friends_list_friends_list__ = __webpack_require__(155);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_friends_list_friends_list__["a" /* FriendsListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/friends-list/friends-list.module#FriendsListPageModule', name: 'FriendsListPage', segment: 'friends-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-liste/home-liste.module#HomeListeModule', name: 'HomeListe', segment: 'home-liste', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_friends_list_friends_list__["a" /* FriendsListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_to_do_to_do__["a" /* ToDoProvider */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_15__providers_session_session__["a" /* SessionProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_session_session__["a" /* SessionProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_clipboard__["a" /* Clipboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/friends-list/friends-list.module": [
		499,
		4
	],
	"../pages/home-liste/home-liste.module": [
		501,
		3
	],
	"../pages/list/list.module": [
		500,
		2
	],
	"../pages/login/login.module": [
		502,
		0
	],
	"../pages/settings/settings.module": [
		503,
		1
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
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(194);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_module__ = __webpack_require__(194);
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
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_7__app_module__["b" /* firebaseConfig */]);
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = 'LoginPage';
                unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                unsubscribe();
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/michele/myDudo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/michele/myDudo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_PouchDb__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_database__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileProvider = /** @class */ (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref("/userProfile/" + user.uid);
                _this.listsRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('/userProfile/' + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getFriendLists = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.listsRef;
            var numListe;
            ref.child("sharedLists/").on("value", function (snapshot) {
                numListe = snapshot.numChildren();
            });
            ref.once("value")
                .then(function (snapshot) {
                var payload = [];
                for (var i = 0; i < numListe; i++) {
                    var title = snapshot.child('sharedLists/list' + i + '/title').val();
                    var path = snapshot.child('sharedLists/list' + i + '/path').val();
                    var friendUid = snapshot.child('sharedLists/list' + i + '/proprietaryUid').val();
                    payload.push({ title: title, path: path, proprietaryUid: friendUid });
                }
                resolve(payload);
            });
        });
    };
    ProfileProvider.prototype.getEmail = function () {
        return this.currentUser.email;
    };
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.getPeople = function () {
        return new Promise(function (resolve, reject) {
            var friends = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('userProfile/');
            friends.on('value', getData);
            function getData(data) {
                var obj = [];
                data.forEach(function (element) {
                    obj.push({ key: element.key, payload: element.val() });
                });
                resolve(obj);
            }
        });
    };
    ProfileProvider.prototype.getFriendForAList = function (owner, list) {
        return new Promise(function (resolve) {
            var arr = [];
            var friendsLists = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('/todos/' + owner + '/' + list + '/friends/');
            friendsLists.once('value', function (snapshot) {
                snapshot.forEach(function (child) {
                    arr.push({ data: child.val() });
                });
            }).then(function () {
                resolve(arr);
            });
        });
    };
    ProfileProvider.prototype.getNameByUid = function (uid) {
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref(('/userProfile/' + uid + '/' + '/name/'))
                .once('value', function (snapshot) {
                resolve(snapshot.val());
            });
        });
    };
    ProfileProvider.prototype.setFriends = function (friendId, list, i, path, proprietaryUid) {
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('userProfile/' + friendId + '/sharedLists' + '/list' + i).update({
            n: i,
            title: list,
            path: path,
            proprietaryUid: proprietaryUid
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('todos/' + this.userProfile.key + '/' + list + '/' + 'friends/').set({
            friendUid: friendId
        });
    };
    ProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({ firstName: firstName, lastName: lastName });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map