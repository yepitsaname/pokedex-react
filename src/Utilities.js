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

  static drawHexChart(distance, points){
    const canvas = document.createElement('canvas');
    canvas.height = distance * 2;
    canvas.width = distance * 2;
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
          context.moveTo(...Chart.getCoordinate(0,angle,100))
          context.lineTo(...Chart.getCoordinate(distance,angle,100))
        }
        context.closePath();
        context.stroke();
      }

      // Draw current modified outer frame
      context.beginPath();
      for(let angle = 0; angle <= 300; angle += 60){
        context.lineTo(...Chart.getCoordinate(distance * distanceMod,angle,100))
      }
      context.closePath();
      context.stroke();
    }

    function drawData( points ){

    }

    drawFrame( distance );


    return canvas;
  }
}