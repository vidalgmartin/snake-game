const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")

const randomPosition = () => {
    let randomNum = Math.floor(Math.random() * 20) * 20
    return randomNum
}

let apple = {x: randomPosition(), y: randomPosition()}

const drawApple = () => {
    ctx.fillStyle = "red"
    ctx.fillRect(apple.x, apple.y, 20, 20)
}

const renderApple = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawApple()
}

let snake = [
    {x: 200, y: 200},
    {x: 220, y: 200},
    {x: 240, y: 200},
    {x: 260, y: 200}
]

const drawSnakeCell = (snakeCell) => {
    ctx.fillStyle = "lightgreen"
    ctx.fillRect(snakeCell.x, snakeCell.y, 20, 20)
}

const renderSnake = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snake.forEach(drawSnakeCell)
    drawApple()
}

renderSnake()

let direction = "LEFT"

const snakeMovement = () => {
    const snakeHead = {x: snake[0].x, y: snake[0].y}

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snakeHead.x && snake[i].y === snakeHead.y) {
            return
        }
    }
    
    if (snakeHead.x < 0 || snakeHead.x > 380 || snakeHead.y < 0 || snakeHead.y > 380) {
        return
    }
    
    if (direction === "UP") {
        snakeHead.y -= 20
    }
    if (direction === "RIGHT") {
        snakeHead.x += 20
    }
    if (direction === "DOWN") {
        snakeHead.y += 20
    }
    if (direction === "LEFT") {
        snakeHead.x -= 20
    }

    snake.unshift(snakeHead)

    if (snakeHead.x === apple.x && snakeHead.y === apple.y) {
        apple = {x: randomPosition(), y: randomPosition()}
        renderApple()
    } else {
        snake.pop()
    }
    
    renderSnake()
}

let gameStarted = false

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP"
    }
    if (event.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT"
    }
    if (event.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN"
    }
    if (event.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT"
    }

    if (!gameStarted) {
        gameStarted = true
        setInterval(snakeMovement, 150)
    }
})