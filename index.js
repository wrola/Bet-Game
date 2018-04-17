// var config = {
//     apiKey: "apiKey",
//     authDomain: "projectId.firebaseapp.com",
//     databaseURL: "https://databaseName.firebaseio.com",
//     storageBucket: "bucket.appspot.com"
// };
// firebase.initializeApp(config);
//
// // Get a reference to the database service
// var database = firebase.database();
//
// function writeNewPost(uid, username, picture, title, body) {
//     // A post entry.
//     var postData = {
//         author: username,
//         uid: uid,
//         body: body,
//         title: title,
//         starCount: 0,
//         authorPic: picture
//     };
//
//     // Get a key for a new Post.
//     var newPostKey = firebase.database().ref().child('posts').push().key;
//
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + uid + '/' + newPostKey] = postData;
//
//     return firebase.database().ref().update(updates);
// }
// function toggleStar(postRef, uid) {
//     postRef.transaction(function(post) {
//         if (post) {
//             if (post.stars && post.stars[uid]) {
//                 post.starCount--;
//                 post.stars[uid] = null;
//             } else {
//                 post.starCount++;
//                 if (!post.stars) {
//                     post.stars = {};
//                 }
//                 post.stars[uid] = true;
//             }
//         }
//         return post;
//     });
// }