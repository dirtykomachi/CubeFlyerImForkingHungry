var score = 0;
var highScore = 0;
var scoreText;
var highScoreText;

var createHud = function() {
    var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    // Create a Text Block that can display the current score
    scoreText = new BABYLON.GUI.TextBlock();
    scoreText.fontFamily = "Times New Roman, serif";
    scoreText.color = "white";
    scoreText.fontSize = 48;
    scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
    scoreText.width = .5;
    scoreText.height = .15;

    // Create a Text Block that can display the high score
    highScoreText = new BABYLON.GUI.TextBlock();
    highScoreText.fontFamily = "Times New Roman, serif";
    highScoreText.color = "white";
    highScoreText.fontSize = 48;
    highScoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    highScoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_LEFT;
    highScoreText.width = .5;
    highScoreText.height = .15;

    updateScoreText();

    hudTexture.addControl(scoreText);
    hudTexture.addControl(highScoreText);
}

var updateScoreText = function() {
    scoreText.text = "Score: " + score;
    highScoreText.text = "High Score: " + highScore;
}

var resetScore = function() {
    console.log("Score reset at: " + score);
    score = 0;
    updateScoreText();
}

var addScore = function(points) {
    score += points;
    updateScoreText();
}

var updateHighScore = function(points) {
    if (points > highScore) {
        highScore = points;
        updateScoreText();
    }
}