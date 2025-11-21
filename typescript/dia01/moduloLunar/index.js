"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1() {
    var keys = {
        posts: [{ name: 'uuid', unique: true }],
        projects: [{ name: 'uuid', unique: true }],
    };
    var db;
    var request = indexedDB.open('minerals', 1);
    request.onerror = function (err) { return console.error("IndexedDB error: ".concat(request.error), err); };
    request.onsuccess = function () { return (db = request.result); };
    request.onupgradeneeded = function () {
        var db = request.result;
        var postsStore = db.createObjectStore('postsStore', { keyPath: keys.posts[0].name });
        var projectsStore = db.createObjectStore('projectsStore', { keyPath: keys.projects[0].name });
        keys.posts.forEach(function (key) { return postsStore.createIndex(key.name, key.name, { unique: key.unique }); });
        keys.projects.forEach(function (key) { return projectsStore.createIndex(key.name, key.name, { unique: key.unique }); });
    };
    return db;
}
