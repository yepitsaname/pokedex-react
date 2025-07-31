export class Utilities {

}

export default class Chart {
  static getCoordinate( distance = 0, angle = 0, offset = 0 ){
    let coordinate = [ Chart.#getX(angle,distance) + offset, Chart.#getY(angle,distance) + offset ];
    return coordinate;
  }

  static #getX( angle, distance ){
    let radians = this.#getRadians(angle);
    return Math.round( Math.sin(radians) * distance );
  }

  static #getY( angle, distance ){
    let radians = this.#getRadians(angle);
    return Math.round( Math.cos(radians) * distance );
  }

  static #getRadians( angle ){
    return angle * (Math.PI / 180);
  }

  static drawHexChart(canvas, distance, points){
    canvas.height = distance * 2.5;
    canvas.width = distance * 2.5;
    let offset = distance * 1.25
    const context = canvas.getContext('2d');

    function drawFrame( distance, distanceMod = 1 ){
      // Recurse by 25%
      if( distance * distanceMod > 1 ){
        drawFrame( distance, distanceMod - 0.25 );
      }

      // End of recursion draw chart section lines
      if( distance * distanceMod == 0 ){
        context.beginPath();
        for(let angle = 0; angle <= 300; angle += 60){
          context.moveTo(...Chart.getCoordinate(0,angle,offset))
          context.lineTo(...Chart.getCoordinate(distance,angle,offset))
        }
        context.closePath();
        context.stroke();
      }

      // Draw current modified outer frame
      context.beginPath();
      for(let angle = 0; angle <= 300; angle += 60){
        context.lineTo(...Chart.getCoordinate(distance * distanceMod,angle,offset))
      }
      context.closePath();
      context.stroke();
    }
    drawFrame( distance );

    context.beginPath();
    for(let i = 0; i <= 5; i++ ){
      let angle = -180 + i * 60
      context.lineTo(...Chart.getCoordinate(points[i][0],angle,offset))
    }
    context.closePath();
    context.fillStyle = 'rgba(20,20,150, 0.5)';
    context.fill();
    context.stroke();

    context.fillStyle = 'black';
    for(let i = 0; i <= 5; i++ ){
      let angle = -180 + i * 60
      angle == -180 || angle == 0 ? context.textAlign = "center" :  angle <= -60 ? context.textAlign = "right" : context.textAlign = "left"
      context.fillText(points[i][1],...Chart.getCoordinate(distance + 10,angle,offset) )
    }
    context.stroke();
  }
}