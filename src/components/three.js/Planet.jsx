import * as THREE from 'three';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const DOT_COLOR = 0xc6cdd5;

class Planet{
    constructor(radius, dot_size){
        this.dot_size = dot_size;
        this.radius = radius;
    }

    createSphere(nDot){
        const dotGeometries = [];

        for(let i = 0; i < nDot; i++){
            const dotGeometry = new THREE.CircleGeometry(this.dot_size, 5);
            const phi = Math.random()*Math.PI;
            const theta = Math.random()*2*Math.PI;

            const vector = new THREE.Vector3().setFromSphericalCoords(this.radius, phi, theta);
            dotGeometry.lookAt(vector);
            dotGeometry.translate(vector.x, vector.y, vector.z);
            dotGeometries.push(dotGeometry);
        }
        const mergeDotGeometries = BufferGeometryUtils.mergeBufferGeometries(dotGeometries);
        const dotMaterial =  new THREE.MeshBasicMaterial({
            color: DOT_COLOR,
            side: THREE.DoubleSide
        });

        return new THREE.Mesh(mergeDotGeometries, dotMaterial);
    }
}

export default Planet;
