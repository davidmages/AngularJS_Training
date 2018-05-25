

var coords = {
  x: 12,
  Y: 14,
};

coords.z = 30; //ajoute ou modifie
delete coords.z; //supprime

for (var key in coords){
  console.log(key); //x y
  console.log(coords[key]); //10 20

}

function coords3dFactory(x,y,z){
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return{
    x: x,
    y: y,
    z: z,
  }
}

const coords3dA = coords3dFactory( )
