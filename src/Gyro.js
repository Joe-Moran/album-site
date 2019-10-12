const gyroscope = new Gyroscope({
    frequency: 60
});


(function () {

    Promise.all([
            navigator.permissions.query({
                name: "gyroscope"
            })
        ])
        .then(results => {
            if (results.every(result => result.state === "granted")) {
                gyroscope.start();
            } else {
                console.log("No permissions to use Gyroscope.");
            }
        });
})()

export default gyroscope;