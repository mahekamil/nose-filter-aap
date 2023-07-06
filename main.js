noseX=0;
nosey=0;

function prelod(){
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    Video.size(300, 300);
    Video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPose);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPose(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        nosey = results[0].pose.nose.y-15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, nosey, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}
