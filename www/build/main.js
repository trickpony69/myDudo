webpackJsonp([5],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(83);
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
        profileProv.getFriendForAList(navParams.get("proprietaryUid"), navParams.get("title")).on('value', function (snap) {
            snap.forEach(function (el) {
                profileProv.getNameByUid(el.val().friendUid).then(function (name) {
                    _this.friends.push({ name: name, friendUid: el.val().friendUid });
                });
            });
        });
    }
    FriendsListPage.prototype.removeFriend = function (friend) {
        console.log(friend);
    };
    FriendsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsListPage');
    };
    FriendsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends-list',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/friends-list/friends-list.html"*/'<!--\n  Generated template for the FriendsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Utenti della lista</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let friend of friends">\n      <ion-item-sliding #item>\n    <ion-item-options side="right">\n      <button ion-button color="danger" (click)="removeFriend(friend)">Rimuovi</button>\n    </ion-item-options>\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="contact" item-start></ion-icon>\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n    </ion-item>\n  </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/friends-list/friends-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _c || Object])
    ], FriendsListPage);
    return FriendsListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=friends-list.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_list_friends_list__ = __webpack_require__(159);
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
        //-----------------------------Tornato a questa funzione e a non quella subito sotto---------------------
        this.todos = this.itemsRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        //  this.itemsRef.valueChanges().subscribe(item => this.todos = item); 
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
        console.log(todo);
        if (todo.status == 0)
            this.itemsRef.update(todo.key, { status: 1 });
        else
            this.itemsRef.update(todo.key, { status: 0 });
    };
    ;
    ListPage.prototype.viewListFriends = function () {
        var proprietaryUid = this.toUser.proprietaryUid;
        if (!proprietaryUid)
            proprietaryUid = this.toUser.uid;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__friends_list_friends_list__["a" /* FriendsListPage */], {
            title: this.toUser.cardName,
            proprietaryUid: proprietaryUid
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar padding>\n    <ion-title text-center>\n      <p (click)="viewListFriends()">{{toUser.cardName}}</p>\n      <!-- <p>{{ toUser.name }}</p>\n      <p>{{ toUser.link }}</p>\n      <p>Il tuo nickname: {{ toUser.nickname }}</p> -->\n    </ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="createTodo()" ion-button icon-only large >\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let task of todos | async ; let i = index ">\n      <ion-item *ngIf="task.content">\n        <div *ngIf="task.status == 0" > <h1 #elemento>{{ task.content }}</h1></div>\n        <div *ngIf="task.status == 1" > <h1 #elemento class=\'lineThrough\'>{{ task.content }}</h1></div>       \n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button icon-only color="light" (click)="updateTodo(task)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button icon-only color="danger" (click)="deleteTodo(task.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side="left">\n        <button ion-button icon-only color="secondary" (click)="checkUncheck(task)">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/list/list.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[elemento]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_liste_home_liste__ = __webpack_require__(164);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_session__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(257);
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
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.session = session;
        this.profileProv = profileProv;
        this.clipboard = clipboard;
        this.profile = { name: "", email: "", uid: "" };
        this.profileProv.getUserProfile().then(function (data) {
            data.on("value", function (userProfileSnapshot) {
                _this.profile = userProfileSnapshot.val();
                _this.profile.uid = data.key;
            });
        });
    }
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
        this.clipboard.copy(this.profile.uid);
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
            selector: 'page-settings',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Impostazioni</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="slide-container">\n\n    <div class="wrapper">\n      <div class="clash-card barbarian">\n        <div class="clash-card__image clash-card__image--barbarian">\n          <img src="assets/imgs/bogi.png" alt="barbarian" />\n        </div>\n        <div class="clash-card__unit-name">Il tuo profilo</div>\n        <div class="clash-card__unit-description">\n          <ion-list>\n            <ion-item>nome: {{profile.name}}</ion-item>\n            <ion-item>email: {{profile.email}}</ion-item>\n            <ion-item (tap)="copy()">uid: {{profile.uid}}</ion-item>\n          </ion-list>\n\n          <button ion-button block (click)="logout()" color="danger">Esci</button>\n        </div>\n\n        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">\n          <div class="one-third">\n            <div class="stat">nd<sup>liste</sup></div>\n            <div class="stat-value">tue</div>\n          </div>\n\n          <div class="one-third">\n              <div class="stat">nd<sup>liste</sup></div>\n              <div class="stat-value">condivise con altri</div>\n          </div>\n\n          <div class="one-third no-border">\n              <div class="stat">nd<sup>liste</sup></div>\n              <div class="stat-value">di amici</div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_session_session__["a" /* SessionProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], SessionProvider);
    return SessionProvider;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeListe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(83);
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
            var _loop_1 = function (i) {
                profileProv.getUserProfile().then(function (data) {
                    if (val != null && val[i].owner == data.key) {
                        _this.cards.push(val[i]);
                    }
                });
            };
            for (var i = 0; i < counterCards(val); i++) {
                _loop_1(i);
            }
        });
        this.storage.get('cardCount').then(function (val) {
            if (val >= 0)
                _this.cardCount = val;
        });
    }
    HomeListe.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user = { email: "", uid: "" };
        this.profileProv.getUserProfile().then(function (data) { return _this.user.uid = data.key; });
        this.profileProv.getFriendLists().on("value", function (eventListSnapshot) {
            _this.sharedCards = [];
            eventListSnapshot.forEach(function (snap) {
                _this.sharedCards.push({
                    id: snap.key,
                    name: snap.val().title,
                    proprietaryUid: snap.val().proprietaryUid,
                    path: snap.val().path,
                    proprietary: 0
                });
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
                        _this.cards.push({ owner: _this.user.uid, id: _this.cardCount, name: data.title, friends: "null", proprietary: 1, path: data.cardPath });
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
        return new Promise(function (resolve) {
            _this.profileProv.getFriendForAList(_this.user.uid, list).once('value', function (snap) {
                snap.forEach(function (el) {
                    console.log('el: ', el.val().friendUid);
                    if (friendKey == el.val().friendUid)
                        resolve(true);
                });
                resolve(false);
            });
        });
    };
    HomeListe.prototype.addFriend = function (card, i) {
        var _this = this;
        console.log(card);
        if (card.proprietary == 0) {
            alert("Non puoi aggiungere amici perchè la lista non è tua");
            return;
        }
        this.profileProv.getPeople().then(function (people) {
            var alert = _this.alertCtrl.create();
            people.forEach(function (person, index) {
                _this.checkAlreadyAdded(card.name, person.key).then(function (condition) {
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
                    _this.profileProv.setFriends(friend, _this.cards[i].name, path, _this.user.uid);
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
            proprietaryUid: card.proprietaryUid
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
        var _this = this;
        if (post.proprietary == 0) {
            alert("Non puoi eliminare una lista non tua");
            return;
        }
        var index = this.cards.indexOf(post);
        // if (index > -1) {
        //   this.cards.splice(index, 1);
        //   this.cardCount--;
        //   this.storage.set("cards", this.cards);
        //   this.storage.set("cardCount", this.cardCount);
        // }
        console.log('post: ', post);
        this.profileProv.getFriendForAList(this.user.uid, post.name).once('value', function (friends) {
            friends.forEach(function (friend) {
                _this.profileProv.getSharedLists(friend.val().friendUid).once('value', function (lists) {
                    lists.forEach(function (list) {
                        if (list.val().path) {
                            _this.profileProv.removeCloudList(post.owner, post.name, friend.val().friendUid, list.key);
                        }
                    });
                });
            });
        });
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
            selector: 'page-home-liste',template:/*ion-inline-start:"/Users/michele/myDudo/src/pages/home-liste/home-liste.html"*/'<!-- <ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n  <ion-fab bottom right>\n    <button ion-fab (click)="add()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <!-- <ion-fab-list side="top">\n      <button ion-fab (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab-list> -->\n    <!-- <ion-fab-list side="left">\n      <button ion-fab (click)="addShared()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-fab-list> -->\n  </ion-fab>\n  <ion-card class="card" (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of cards; let i = index">\n    <img id="immagine" />\n    <ion-card-content id="gradient">\n      <ion-card-title id="font">\n        {{ card.name }}\n      </ion-card-title>\n      <p id="description" *ngIf="card.proprietary == 1">\n        Questa lista è tua\n      </p>\n      <p id="description" *ngIf="card.proprietary == 0">\n        Questa lista è di un tuo amico\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card class="card" (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of sharedCards; let i = index">\n    <ion-card-content>\n      <ion-card-title id="font">\n        {{ card.name }}\n      </ion-card-title>\n      <p id="description" *ngIf="card.proprietary == 1">\n        Questa lista è tua\n      </p>\n      <p id="description" *ngIf="card.proprietary == 0">\n        Questa lista è di un tuo amico\n      </p>\n    </ion-card-content>\n  </ion-card>  -->\n  <!-- test --> \n  <ion-list (press)="action(card,i)" (click)="openTodo(card)" *ngFor="let card of sharedCards; let i = index">\n  <section class="cards" >\n    <article class="card card--2">\n      <div class="card__info-hover">\n        <svg class="card__like" viewBox="0 0 24 24">\n          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />\n        </svg>\n        <div class="card__clock-info">\n          <svg class="card__clock" viewBox="0 0 24 24">\n            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />\n          </svg><span class="card__time">5 min</span>\n        </div>\n\n      </div>\n      <div class="card__img"></div>\n      <a href="#" class="card_link">\n        <div class="card__img--hover"></div>\n      </a>\n      <div class="card__info">\n        <span class="card__category">Questa lista è di un tuo amico</span>\n        <h1 class="card__title">{{card.name}}</h1>\n        <span class="card__by">by <a href="#" class="card__author" title="author">Lista di:</a></span>\n      </div>\n    </article>\n  </section>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/michele/myDudo/src/pages/home-liste/home-liste.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _e || Object])
    ], HomeListe);
    return HomeListe;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home-liste.js.map

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_to_do_to_do__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_liste_home_liste__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_session_session__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_clipboard__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_friends_list_friends_list__ = __webpack_require__(159);
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
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-liste/home-liste.module#HomeListeModule', name: 'HomeListe', segment: 'home-liste', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"],
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
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuth"],
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/friends-list/friends-list.module": [
		520,
		4
	],
	"../pages/home-liste/home-liste.module": [
		524,
		3
	],
	"../pages/list/list.module": [
		521,
		2
	],
	"../pages/login/login.module": [
		522,
		0
	],
	"../pages/settings/settings.module": [
		523,
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
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(204);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_module__ = __webpack_require__(204);
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_PouchDb__ = __webpack_require__(509);
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'firebase/database';

var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(afDatabase) {
        var _this = this;
        this.afDatabase = afDatabase;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref("/userProfile/" + user.uid);
                _this.listsRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('/userProfile/' + user.uid);
                _this.friendListRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
                    .database()
                    .ref("/userProfile/" + user.uid + "/sharedLists/debugNode");
            }
        });
    }
    ProfileProvider.prototype.getFriendLists = function () {
        return this.friendListRef;
    };
    ProfileProvider.prototype.getSharedLists = function (uid) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref("/userProfile/" + uid + "/sharedLists/debugNode");
    };
    ProfileProvider.prototype.removeCloudList = function (owner, listName, uidConnectedFriend, listKeyConnected) {
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('/todos/' + owner + '/' + listName + '/friends/').remove();
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('/userProfile/' + uidConnectedFriend + '/sharedLists/debugNode/' + listKeyConnected + '/').remove();
    };
    ProfileProvider.prototype.getEmail = function () {
        return this.currentUser.email;
    };
    ProfileProvider.prototype.getUserProfile = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.userProfile);
        });
    };
    ProfileProvider.prototype.getPeople = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = _this.userProfile;
            var friends = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('userProfile/');
            friends.on('value', getData);
            function getData(data) {
                var obj = [];
                data.forEach(function (element) {
                    if (currentUser.key != element.key)
                        obj.push({ key: element.key, payload: element.val() });
                });
                resolve(obj);
            }
        });
    };
    ProfileProvider.prototype.getFriendForAList = function (owner, list) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('/todos/' + owner + '/' + list + '/friends/');
    };
    ProfileProvider.prototype.getNameByUid = function (uid) {
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref(('/userProfile/' + uid + '/' + '/name/'))
                .once('value', function (snapshot) {
                resolve(snapshot.val());
            });
        });
    };
    ProfileProvider.prototype.setFriends = function (friendId, list, path, proprietaryUid) {
        var _this = this;
        console.log("riferimento", 'userProfile/' + friendId + '/sharedLists/');
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('userProfile/' + friendId + '/sharedLists/debugNode/').push({
            title: list,
            path: path,
            proprietaryUid: proprietaryUid
        }).then(function () {
            console.error();
            __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref('todos/' + _this.userProfile.key + '/' + list + '/' + 'friends/').push({
                friendUid: friendId
            });
        });
    };
    ProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({ firstName: firstName, lastName: lastName });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _a || Object])
    ], ProfileProvider);
    return ProfileProvider;
    var _a;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[304]);
//# sourceMappingURL=main.js.map