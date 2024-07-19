


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


canvas.width = 1248
canvas.height = 1280
const viewportHeight = window.innerHeight

/****************************************************/
/****************************************************/

const collisionsLevel1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0, 211, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0, 211, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0,
  0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0,
  0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 211, 211, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 211, 211, 211, 0,
  0, 211, 211, 211, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 211, 211, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 211, 211, 0, 211, 211, 211, 211, 211, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 0,
  0, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 0,
  0, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 0,
  0, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 0,
  0, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 211, 211, 211, 211, 211, 211, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 211, 0,
  0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



function parseData(data, width) {
  const rows = []
  for (let i = 0; i < data.length; i += width) {
    rows.push(data.slice(i, i + width))
  }
  return rows
}

/****************************************************/
/****************************************************/

class Background {
  constructor({imageSrc}) {
    this.image = new Image()
    this.image.src = imageSrc
  }

  draw() {
    ctx.drawImage(this.image, 0, 0)
  }

}

/****************************************************/
/****************************************************/

class CollisionBlock {
  constructor({position}) {
      this.position = position
  }

  draw() {
      ctx.fillStyle = 'rgb(0, 0, 0, 0)'
      ctx.fillRect(this.position.x, this.position.y, 32, 32)
  }

  collide(bullets) {
    bullets.forEach((bullet) => {
      if (bullet.x + 16 >= this.position.x &&
        bullet.x + 16 <= this.position.x + 32 &&
        bullet.y + 16 >= this.position.y &&
        bullet.y + 16 <= this.position.y + 32
      ) {
        bullet.fired = false
      }
    })
  }
}

/****************************************************/
/****************************************************/

class Enemy {
  constructor({enemyX, enemyY, startX, endX, startY, endY}) {
    this.spriteSheet = new Image()
    this.spriteSheet.src = '/img/ZombieWalk.png'
    this.frameX = 0 
    this.frameY = 0
    this.maxFrame = 9
    this.gameFrame = 0
    this.staggerFrames = 5
    this.enemyX = enemyX
    this.enemyY = enemyY
    this.startX = startX
    this.endX = endX
    this.startY = startY
    this.endY = endY
    this.directionX = 0
    this.directionY = 0
    this.initialized = false
    this.alive = true
  }


  draw() {
      ctx.drawImage(this.spriteSheet,  this.frameX * 32, this.frameY * 32, 32, 35, this.enemyX, this.enemyY, 32, 32)
  }

  frameUpdate() {
    if (this.gameFrame % this.staggerFrames == 0){
      if (this.frameX < this.maxFrame){
        this.frameX++ 
      } else {
        this.frameX = 0
      }
    }
    this.gameFrame++
  }


  movement() {

    if(!this.initialized) {
      if (this.startX === 0 && this.endX === 0) {
        this.directionX = 0
        this.directionY = 1
      } else if (this.startY === 0 && this.endY === 0) {
        this.directionY = 0
        this.directionX = 1
      }
      this.initialized = true
    }

    this.enemyX += this.directionX
    this.enemyY += this.directionY


    if (this.directionX === 1 || this.directionX === -1) {
      if (this.enemyX >= this.endX || this.enemyX <= this.startX) {
        this.directionX *= -1
      } 
    }


    if (this.directionY === 1 || this.directionY === -1) {
      if (this.enemyY >= this.endY || this.enemyY <= this.startY) {
        this.directionY *= -1
      }
    }

    if (this.directionY === 1) {
      this.frameY = 0
    }

    if (this.directionY === -1) {
      this.frameY = 1
    }

    if (this.directionX === 1) {
      this.frameY = 2
    } 
    
    if (this.directionX === -1) {
      this.frameY = 3
    }

  }

  playerDeath() {
    if (playerX + 25 >= this.enemyX + 12 &&
      playerX + 5 <= this.enemyX + 18 &&
      playerY + 28 >= this.enemyY + 3 &&
      playerY + 5 <= this.enemyY + 32
    ) {
      alive = false
    }
  }

  enemyDeath(bullets) {
    bullets.forEach((bullet) => {
      if (bullet.x + 16 >= this.enemyX + 12 &&
        bullet.x + 16 <= this.enemyX + 18 &&
        bullet.y + 16 >= this.enemyY + 3 &&
        bullet.y + 16 <= this.enemyY + 32
      ) {
        this.alive = false
      }
  })
  }

}

/****************************************************/
/****************************************************/

class Key {
  constructor(x, y) {
    this.spriteSheet = new Image()
    this.spriteSheet.src = 'img/MagicKeys.png'
    this.x = x
    this.y = y
    this.frameX = 0
    this.frameY = 0
    this.maxFrame = 3
    this.gameFrame = 0
    this.staggerFrames = 8
    this.found = false
  }

  draw() {
    ctx.drawImage(this.spriteSheet,  this.frameX * 16, this.frameY * 16, 16, 16, this.x, this.y, 16, 16)
  }

  frameUpdate() {
    if (this.gameFrame % this.staggerFrames == 0){
      if (this.frameX < this.maxFrame) {
        this.frameX++
      } else {
        this.frameX = 0
      }
    }
    this.gameFrame++  
  }

  find() {
    if (playerX + 32 >= this.x &&
      playerX <= this.x + 32 &&
      playerY + 32 >= this.y &&
      playerY <= this.y + 32
    ) {
      foundKeys += 1
      this.found = true
    }
  }
}

/****************************************************/
/****************************************************/

class Player {
  constructor({spriteSheetSrc, maxFrame, frameY, staggerFrames }) {
    this.spriteSheet = new Image()
    this.spriteSheet.src = spriteSheetSrc 
    this.frameX = 0 
    this.frameY = frameY
    this.maxFrame = maxFrame
    this.gameFrame = 0
    this.staggerFrames = staggerFrames
    this.coolDownLeft = 0
    this.coolDownAmount = 300
  }

  draw() {
    ctx.drawImage(this.spriteSheet,  this.frameX * 32, this.frameY * 32, 32, 35, playerX, playerY, 32, 32)

  }

  frameUpdate() {
    if (this.gameFrame % this.staggerFrames == 0){
      if (this.frameX < this.maxFrame) {
        this.frameX++
      } else {
        this.frameX = 0
      }
    }
    this.gameFrame++  
  }

  shoot() {
    if (this.coolDownLeft > 0) {
      return
    }

    const bullet = new Bullet(playerX, playerY, this.frameY)
    bullets.push(bullet)
    bulletSound.play()

    this.coolDownLeft = this.coolDownAmount
  }

  coolDown() {
    this.coolDownLeft -= 5

    if (this.coolDownLeft < 0) {
      this.coolDownLeft = 0
    }
  }

}

/****************************************************/
/****************************************************/

class Bullet {
  constructor(playerX, playerY, frameY) {
    this.spriteSheet = new Image()
    this.spriteSheet.src = '/img/Bullet.png'
    this.x = playerX
    this.y = playerY
    this.speed = 2
    this.playerFrameY = frameY
    this.frameX = 0 
    this.frameY = frameY
    this.maxFrame = 3
    this.gameFrame = 0
    this.staggerFrames = 10
    this.fired = true
  }


  update() {
    if (this.playerFrameY === 0) {
      this.y += this.speed
    } else if (this.playerFrameY === 1) {
      this.y -= this.speed
    } else if (this.playerFrameY === 2) {
      this.x += this.speed
    } else if (this.playerFrameY === 3) {
      this.x -= this.speed
    }
  }

  draw() {
    ctx.drawImage(this.spriteSheet,  this.frameX * 32, this.frameY * 32, 32, 32, this.x, this.y, 32, 32)
  }

  frameUpdate() {
    if (this.gameFrame % this.staggerFrames == 0){
      if (this.frameX < this.maxFrame) {
        this.frameX++
      } else {
        this.frameX = 0
      }
    }
    this.gameFrame++  
  }
}

/****************************************************/
/****************************************************/

const parsed_collisions = parseData(collisionsLevel1, 39)

let collision_blocks = []

for (let y = 0; y < parsed_collisions.length; y++) {
  const row = parsed_collisions[y]

  for (let x = 0; x < row.length; x++) {
    const value = row[x]

    if (value === 211) {
      collision_blocks.push(
          new CollisionBlock({
              position: {
                  x: x * 32,
                  y: y * 32,
              }
          })
      )
    }
  }
}

/****************************************************/
/****************************************************/

const enemies = []

const enemy1 = new Enemy({
  enemyX: 870,
  enemyY: 200,
  startX: 0,
  endX: 0,
  startY: 150,
  endY: 250
})

const enemy2 = new Enemy({
  enemyX: 340,
  enemyY: 200,
  startX: 0,
  endX: 0,
  startY: 150,
  endY: 250
})

const enemy3 = new Enemy({
  enemyX: 500,
  enemyY: 205,
  startX: 500,
  endX: 705,
  startY: 0,
  endY: 0
})

const enemy4 = new Enemy({
  enemyX: 500,
  enemyY: 398,
  startX: 500,
  endX: 705,
  startY: 0,
  endY: 0
})

const enemy5 = new Enemy({
  enemyX: 340,
  enemyY: 400,
  startX: 0,
  endX: 0,
  startY: 360,
  endY: 460
}) 

const enemy6 = new Enemy({
  enemyX: 870,
  enemyY: 400,
  startX: 0,
  endX: 0,
  startY: 360,
  endY: 460
})

const enemy7 = new Enemy({
  enemyX: 340,
  enemyY: 600,
  startX: 0,
  endX: 0,
  startY: 580,
  endY: 660
}) 

const enemy8 = new Enemy({
  enemyX: 870,
  enemyY: 600,
  startX: 0,
  endX: 0,
  startY: 580,
  endY: 660
})

const enemy9 = new Enemy({
  enemyX: 390,
  enemyY: 623,
  startX: 390,
  endX: 820,
  startY: 0,
  endY: 0
}) 

const enemy10 = new Enemy({
  enemyX: 600,
  enemyY: 800,
  startX: 560,
  endX: 650,
  startY: 0,
  endY: 0
})

const enemy11 = new Enemy({
  enemyX: 600,
  enemyY: 900,
  startX: 450,
  endX: 765,
  startY: 0,
  endY: 0
})

const enemy12 = new Enemy({
  enemyX: 450,
  enemyY: 1000,
  startX: 450,
  endX: 765,
  startY: 0,
  endY: 0
})

const enemy13 = new Enemy({
  enemyX: 600,
  enemyY: 1100,
  startX: 450,
  endX: 765,
  startY: 0,
  endY: 0
})

enemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12, enemy13)

/****************************************************/
/****************************************************/

const keys = [
  new Key(70, 70),
  new Key(1160, 260),
  new Key(70, 1190),
  new Key(1160, 1190),
  new Key(70, 485),
  new Key(1000, 370)
]

var foundKeys = 0

/****************************************************/
/****************************************************/

const playerUp = new Player({
  spriteSheetSrc: '/img/PlayerWalk.png',
  maxFrame: 3,
  frameY: 1,
  staggerFrames: 10
})

const playerDown = new Player({
  spriteSheetSrc: '/img/PlayerWalk.png',
  maxFrame: 3,
  frameY: 0,
  staggerFrames: 10
})

const playerLeft = new Player({
  spriteSheetSrc: '/img/PlayerWalk.png',
  maxFrame: 3,
  frameY: 3,
  staggerFrames: 10
})

const playerRight = new Player({
  spriteSheetSrc: '/img/PlayerWalk.png',
  maxFrame: 3,
  frameY: 2,
  staggerFrames: 10
})

const playerIdle = new Player({
  spriteSheetSrc: '/img/PlayerIdle.png',
  maxFrame: 1,
  frameY: 0,
  staggerFrames: 5
})

const attackUp = new Player({
  spriteSheetSrc: '/img/Shoot.png',
  maxFrame: 3,
  frameY: 1,
  staggerFrames: 25
})

const attackDown = new Player({
  spriteSheetSrc: '/img/Shoot.png',
  maxFrame: 3,
  frameY: 0, 
  staggerFrames: 25
})

const attackRight = new Player({
  spriteSheetSrc: '/img/Shoot.png',
  maxFrame: 3,
  frameY: 2, 
  staggerFrames: 25
})

const attackLeft = new Player({
  spriteSheetSrc: '/img/Shoot.png',
  maxFrame: 3,
  frameY: 3,
  staggerFrames: 25
})

/****************************************************/
/****************************************************/

let player = playerIdle
let alive = true

let playerX = 608
let playerY = 100

const playerSpeed = 2

let bullets = []

const bulletSound = new Audio('/audio/GunAudio.mp3')
const gameOver = new Audio('/audio/GameOverAudio.wav')
const gameAudio = new Audio('/audio/GameAudio.mp3')

/****************************************************/
/****************************************************/

const scrollValue = 400

function updateViewport() {
  const scrollY = playerY - viewportHeight + scrollValue
  window.scrollTo(0, scrollY)
}

const backgroundLevel1 = new Background({imageSrc: 'img/map.png'})

/****************************************************/
/****************************************************/

const pressedKeys = {
  'w' : false,
  's' : false,
  'a' : false,
  'd' : false,
  '0' : false
}

/****************************************************/
/****************************************************/

document.addEventListener('keydown', (event) => {
  const key = event.key
  pressedKeys[key] = true
})


document.addEventListener('keyup', (event) => {
  const key = event.key
  pressedKeys[key] = false
})

/****************************************************/
/****************************************************/

let animationID

function animate() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  backgroundLevel1.draw()

  /****************************************************/


  if (foundKeys === 6) {
    if (collision_blocks.length === 554) {
      collision_blocks.splice(535, 1)
      }
  }

  collision_blocks.forEach((block) => {
    block.draw()
    block.collide(bullets)


    const blockX = block.position.x
    const blockY = block.position.y

    if (playerX + 32 >= blockX &&
      playerX <= blockX + 32 &&
      playerY + 32 >= blockY &&
      playerY <= blockY + 32
    ) {
    const overlapLeft = playerX + 32 - blockX
    const overlapRight = blockX + 32 - playerX
    const overlapTop = playerY + 32 - blockY
    const overlapBottom = blockY + 32 - playerY

    const smallestOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom)

    if (smallestOverlap === overlapLeft) {
      playerX = blockX - 32
    } else if (smallestOverlap === overlapRight) {
      playerX = blockX + 32
    } else if (smallestOverlap === overlapTop) {
      playerY = blockY - 32
    } else if (smallestOverlap === overlapBottom) {
      playerY = blockY + 32
    }
    }
  })

  /****************************************************/

  if (pressedKeys['w']) {
    playerY -= playerSpeed
    player = playerUp
  }
  if (pressedKeys['s']) {
    playerY += playerSpeed
    player = playerDown
  }
  if (pressedKeys['a']) {
    playerX -= playerSpeed
    player = playerLeft
  }
  if (pressedKeys['d']) {
    playerX += playerSpeed
    player = playerRight
  }

  if (pressedKeys['0'] && pressedKeys['w']) {
    player = attackUp
  } else if (pressedKeys['0'] && pressedKeys['s']) {
    player = attackDown
  } else if(pressedKeys['0'] && pressedKeys['a']) {
    player = attackLeft
  } else if (pressedKeys['0'] && pressedKeys['d']) {
    player = attackRight
  } 

  if (!pressedKeys['w'] && !pressedKeys['s'] && !pressedKeys['a'] && !pressedKeys['d'] && !pressedKeys[' ']) {
    player = playerIdle
  }

  if (player === attackDown || player === attackLeft || player === attackRight || player === attackUp) {
    player.shoot()
    console.log('shoot')
  }

  if (playerY > scrollValue) {
    updateViewport()
  }

  /****************************************************/

  enemies.forEach((enemy) => {
    if (enemy.alive) {
      enemy.draw()
      enemy.frameUpdate()
      enemy.movement()
      enemy.playerDeath()
      enemy.enemyDeath(bullets)
    }
  })
  
  /****************************************************/

  bullets.forEach((bullet) => {
    if (bullet.fired) {
      bullet.draw()
      bullet.update()
    }
  })

  /****************************************************/

  keys.forEach((key) => {
    if (key.found === false) {
      key.draw()
      key.frameUpdate()
      key.find()
    }
  })

  /****************************************************/

  player.draw()
  player.frameUpdate()
  player.coolDown()
  gameAudio.play()

  /****************************************************/

  animationID = requestAnimationFrame(animate)

  /****************************************************/

  if (playerY > 1248) {
    cancelAnimationFrame(animationID)
    outcomeElement.innerHTML = 'You Win'
  }

  /****************************************************/
  
  if (!alive) {
    cancelAnimationFrame(animationID)
    gameOver.play()
    outcomeElement.innerHTML = 'Game Over'
  }

  /****************************************************/
}

/****************************************************/
/****************************************************/

const outcomeElement = document.getElementById('outcome')

animate()
