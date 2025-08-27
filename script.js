const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")

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
}

renderSnake()

let direction = "LEFT"

const snakeMovement = () => {
    const snakeHead = {x: snake[0].x, y: snake[0].y}
    
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
    snake.pop()
    
    renderSnake()
}

let gameStarted = false

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        direction = "UP"
    }
    if (event.key === "ArrowRight") {
        direction = "RIGHT"
    }
    if (event.key === "ArrowDown") {
        direction = "DOWN"
    }
    if (event.key === "ArrowLeft") {
        direction = "LEFT"
    }

    if (!gameStarted) {
        gameStarted = true
        setInterval(snakeMovement, 150)
    }
})