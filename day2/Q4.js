
function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userProfile = {
                userId,
                name: 'John Doe',
                email: 'john@example.com',
            };
            resolve(userProfile);
        }, 1000); 
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userPosts = [
                { postId: 1, title: 'Post 1', content: 'Lorem ipsum...' },
                { postId: 2, title: 'Post 2', content: 'Dolor sit amet...' },
            ];
            resolve(userPosts);
        }, 1500); 
    });
}

function getUserData(userId) {
    return Promise.all([fetchUserProfile(userId), fetchUserPosts(userId)])
        .then(([userProfile, userPosts]) => {
            return {
                ...userProfile,
                posts: userPosts,
            };
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
            throw error; // Propagate the error
        });
}


const userId = 123;
getUserData(userId)
    .then((userData) => {
        console.log('Combined user data:', userData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
